from flask import Blueprint, jsonify, request
from scraper_service import search_google, search_duckduckgo, scrape_license_from_page
from mistral_service import get_license_explanation

routes = Blueprint("routes", __name__)

user_context = {}

@routes.route("/api/<software_name>", methods=["GET"])
def get_software_license(software_name):
    search_results = search_google(f"{software_name} software license")
    if not search_results:
        search_results = search_duckduckgo(f"{software_name} software license")

    if not search_results:
        return jsonify({
            "software": software_name,
            "license": "Unknown",
            "explanation": "Failed to retrieve license details."
        })

    for link in search_results:
        license_text = scrape_license_from_page(link)
        if license_text:
            license_name = extract_license_name(license_text) or "Unknown"
            explanation = get_license_explanation(license_text)

            user_context["license_name"] = license_name
            user_context["explanation"] = explanation

            return jsonify({
                "software": software_name,
                "license": license_name,
                "explanation": explanation
            })

    return jsonify({
        "software": software_name,
        "license": "Unknown",
        "explanation": "Could not extract license details."
    })

@routes.route("/api/follow-up", methods=["POST"])
def follow_up():
    data = request.get_json()
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "Missing question"}), 400

    license_name = user_context.get("license_name", "Unknown")
    explanation = user_context.get("explanation", "No context available.")

    follow_up_response = get_license_explanation(f"License: {license_name}\nExplanation: {explanation}\nQuestion: {question}")

    return jsonify({
        "license": license_name,
        "answer": follow_up_response,
        "follow_up": "/api/software/license/follow-up"
    })

def extract_license_name(text):
    import re

    license_patterns = [
        "MIT", "GPL", "LGPL", "AGPL", "Apache", "BSD", "MPL", "CDDL", "EUPL",
        "Zlib", "Boost", "Unlicense", "CC0", "Public Domain", "Proprietary",
        "SSPL", "EULA", "Creative Commons", "Artistic License", "NASA Open Source",
        "OpenSSL", "PHP License", "Python Software Foundation License", 
        "Mozilla Public License", "Eclipse Public License", "ISC", "PostgreSQL License",
        "SIL Open Font License", "Unicode License", "Academic Free License", 
        "zlib/libpng", "Apple Public Source License", "Microsoft Reciprocal License",
        "Reciprocal Public License", "Open Software License", "Common Public License",
        "CeCILL License", "Lucent Public License", "Sun Public License"
    ]

    pattern = r"\b(" + "|".join(license_patterns) + r")\b"
    match = re.search(pattern, text, re.IGNORECASE)
    return match.group(0) if match else None
