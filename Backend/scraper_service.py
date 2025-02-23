import requests
from bs4 import BeautifulSoup
import re

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

def search_google(query):
    search_url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
    
    try:
        response = requests.get(search_url, headers=HEADERS, timeout=10)
        response.raise_for_status()
    except requests.RequestException:
        return []

    soup = BeautifulSoup(response.text, "html.parser")
    results = []

    for g in soup.find_all("div", class_="tF2Cxc"):
        link_tag = g.find("a")
        if link_tag and link_tag["href"]:
            url = link_tag["href"]
            if "google.com" not in url:
                results.append(url)

    return results[:5]

def search_duckduckgo(query):
    search_url = f"https://html.duckduckgo.com/html/?q={query.replace(' ', '+')}"
    
    try:
        response = requests.get(search_url, headers=HEADERS, timeout=10)
        response.raise_for_status()
    except requests.RequestException:
        return []

    soup = BeautifulSoup(response.text, "html.parser")
    results = []

    for a in soup.select("a.result__a"):
        url = a["href"]
        if "duckduckgo.com" not in url:
            results.append(url)

    return results[:5]

def scrape_license_from_page(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
    except requests.RequestException:
        return None

    soup = BeautifulSoup(response.text, "html.parser")

    license_texts = []
    for tag in soup.find_all(["p", "div", "span"]):
        text = tag.get_text(strip=True)
        if re.search(r'license|terms|agreement|open source', text, re.IGNORECASE):
            license_texts.append(text)

    return "\n".join(license_texts[:5]) if license_texts else None
