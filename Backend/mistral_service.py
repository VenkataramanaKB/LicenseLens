import requests

def get_license_explanation(license_text):
    """Use local Mistral via Ollama to summarize the software license."""
    if not license_text or "could not be extracted" in license_text.lower():
        return "I'm unable to summarize the license as no clear information was found."

    api_url = "http://localhost:11434/api/generate"
    headers = {"Content-Type": "application/json"}
    payload = {
        "model": "mistral",
        "prompt": f"Summarize the following software license in simple terms:\n\n{license_text}",
        "stream": False
    }

    try:
        response = requests.post(api_url, json=payload, headers=headers)
        return response.json().get("response", "Explanation not available.")
    except requests.RequestException:
        return "Explanation service is currently unavailable."