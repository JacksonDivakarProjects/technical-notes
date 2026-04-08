from playwright.sync_api import sync_playwright

from selectolax.parser import HTMLParser

def fetch_page_content(url):

    with sync_playwright() as p:

        browser = p.chromium.launch(headless=True)

        page = browser.new_page()

        page.goto(url)

        content = page.content()

        browser.close()

        return content

url = "[https://en.wikipedia.org/wiki/Space_exploration"](https://en.wikipedia.org/wiki/Space_exploration%22 "https://en.wikipedia.org/wiki/space_exploration%22")

html_content = fetch_page_content(url)

# print(html_content)

# Parse the HTML content

tree = HTMLParser(html_content)

# Example: extract all h1 headings

h1_tags = tree.css('#mw-content-text > div.mw-content-ltr.mw-parser-output > p:nth-child(18)')

for h1 in h1_tags:

    print(h1.text())