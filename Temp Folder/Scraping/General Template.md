Absolutely, Jackson — you can package this as a **reusable module** and also include **regex-based data cleaning** helpers.\ Below is a clean, minimal structure you can drop into any project.

---

## 📁 Suggested Package Structure

```
scraper_utils/
├─ __init__.py
├─ http.py          # fetch_html, fetch_and_parse
├─ html.py          # parse_html_string, small DOM helpers
├─ cleaning.py      # regex-based cleaning utilities
└─ examples/
   └─ demo_olympics.py
```

You can install it locally in editable mode:

pip install -e .

``

_(Optional: create a `pyproject.toml` or `setup.py` if you want to package/publish it later.)_

---

## `scraper_utils/__init__.py`

from .http import fetch_html, fetch_and_parse, HEADERS, GeneralException_

_from .html import parse_html_string_

_from .cleaning import (_

    _clean_whitespace,

    strip_non_ascii,

    extract_digits,_

    _to_int,

    to_float,_

    _normalize_space,

    remove_commas,_

    _keep_alnum_space,_

_)_

_  

**all** = [

_

    _"fetch_html",

    "fetch_and_parse",

    "HEADERS",

    "GeneralException",

    "parse_html_string",

    "clean_whitespace",_

    _"strip_non_ascii",_

    _"extract_digits",

    "to_int",_

    _"to_float",

    "normalize_space",_

    _"remove_commas",

    "keep_alnum_space",

]

---

## `scraper_utils/http.py`

import logging

from typing import Optional, Dict

import requests

  

from .html import parse_html_string

  

# -------------------------------------------------------------------

# Logging configuration

# -------------------------------------------------------------------

  

logging.basicConfig(

    level=logging.INFO,

    format="%(asctime)s - %(levelname)s - %(message)s",

)

logger = logging.getLogger(**name**)

  

# -------------------------------------------------------------------

# Defaults

# -------------------------------------------------------------------

  

HEADERS: Dict[str, str] = {

    "User-Agent": (

        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "

        "AppleWebKit/537.36 (KHTML, like Gecko) "

        "Chrome/120.0.0.0 Safari/537.36"

    ),

    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,_/_;q=0.8",

    "Accept-Language": "en-US,en;q=0.9",

}

  

# -------------------------------------------------------------------

# Exceptions

# -------------------------------------------------------------------

  

class GeneralException(Exception):

    """General exception for common scraping errors."""

    def **init**(self, message: str = "Something went wrong"):

        super().**init**(message)

  

# -------------------------------------------------------------------

# HTTP -> HTML helpers

# -------------------------------------------------------------------

  

def fetch_html(url: str, headers: Optional[Dict[str, str]] = None, timeout: int = 10) -> str:_

    _"""_

    _Sends a GET request and returns the HTML as text._

    _Args:

        url: URL to fetch.

        headers: Optional request headers.

        timeout: Timeout in seconds.

  

    Returns:

        Raw HTML string.

  

    Raises:

        GeneralException: Request or network failure.

    """

    try:

        response = requests.get(url, headers=headers or HEADERS, timeout=timeout)_

        _response.raise_for_status()_

        _return response.text_

    _except requests.exceptions.RequestException as exc:_

        _raise GeneralException(f"Request failed: {exc}") from exc_

_def fetch_and_parse(_

    _url: str, headers: Optional[Dict[str, str]] = None, timeout: int = 10_

_):_

    _"""_

    _Fetch a URL and directly return a parsed Selectolax HTML tree._

    _Args:

        url: URL to fetch.

        headers: Optional request headers.

        timeout: Timeout in seconds.

  

    Returns:

        HTMLParser: Parsed HTML tree.

  

    Raises:

        GeneralException: On request or parsing failure.

    """

    logger.info("Fetching URL: %s", url)_

    _html = fetch_html(url, headers=headers, timeout=timeout)

    tree = parse_html_string(html)

    logger.info("Successfully parsed HTML from: %s", url)

    return tree

``

---

## `scraper_utils/html.py`

from selectolax.parser import HTMLParser

  

from .http import GeneralException

  

def parse_html_string(html_string: str) -> HTMLParser:_

    _"""_

    _Parse an HTML string and return a Selectolax HTML tree._

    _Args:_

        _html_string: Raw HTML content.

  

    Returns:

        HTMLParser: Parsed HTML tree.

  

    Raises:

        GeneralException: If parsing fails or input is empty.

    """

    if not html_string or not html_string.strip():

        raise GeneralException("HTML string is empty")

  

    try:

        return HTMLParser(html_string)

    except Exception as exc:

        raise GeneralException(f"Failed to parse HTML string: {exc}") from exc

---

## `scraper_utils/cleaning.py` (Regex Data Cleaning Utilities)

These are lightweight, reusable helpers to clean strings you scrape.

import re

from typing import Optional

  

# Pre-compiled regex patterns (faster reuse)

_RE_MULTI_WS = re.compile(r"\s+")_

RE_NON_ASCII = re.compile(r"[^\x00-\x7F]+")

_RE_DIGITS = re.compile(r"[-+]?\d+(?:[.,]\d+)?")

_RE_NON_ALNUM_SPACE = re.compile(r"[^0-9A-Za-z\s]+")

  

def clean_whitespace(text: Optional[str]) -> str:

    """

    Collapse sequences of whitespace into a single space and strip ends.

    """

    if not text:

        return ""

    return _RE_MULTI_WS.sub(" ", text).strip()

  

def normalize_space(text: Optional[str]) -> str:_

    _"""_

    _Alias for clean_whitespace for readability in pipelines.

    """

    return clean_whitespace(text)_

_def strip_non_ascii(text: Optional[str]) -> str:

    """

    Remove non-ASCII characters.

    """

    if not text:

        return ""

    return _RE_NON_ASCII.sub("", text)

  

def extract_digits(text: Optional[str]) -> str:

    """

    Extract the first integer/float-like number in the string.

    Returns empty string if none found.

    """

    if not text:

        return ""

    m = _RE_DIGITS.search(text.replace(",", ""))_

    _return m.group(0) if m else ""_

_def remove_commas(text: Optional[str]) -> str:

    """

    Remove commas (e.g., '1,234' -> '1234') to prepare for numeric casting.

    """

    if not text:

        return ""

    return text.replace(",", "")

  

def keep_alnum_space(text: Optional[str]) -> str:

    """

    Remove punctuation and symbols, keeping only alphanumerics and spaces.

    """

    if not text:

        return ""

    return _RE_NON_ALNUM_SPACE.sub("", text)

  

def to_int(text: Optional[str]) -> Optional[int]:_

    _"""_

    _Convert a string to int safely. Handles commas and surrounding text._

    _Returns None if conversion is not possible._

    _"""_

    _if not text:_

        _return None_

    _numeric = extract_digits(text)

    if not numeric:

        return None

    try:

        return int(float(numeric))  # allows "12.0" to become 12

    except (ValueError, TypeError):

        return None

  

def to_float(text: Optional[str]) -> Optional[float]:_

    _"""_

    _Convert a string to float safely. Handles commas._

    _Returns None if conversion is not possible._

    _"""_

    _if not text:_

        _return None_

    _numeric = extract_digits(text)

    if not numeric:

        return None

    try:

        return float(numeric)

    except (ValueError, TypeError):

        return None

---

## `scraper_utils/examples/demo_olympics.py` (Usage Example)

from scraper_utils import (_

    _fetch_and_parse,_

    _HEADERS,_

    _clean_whitespace,

    to_int,_

_)_

_URL = "https://en.wikipedia.org/wiki/2020_Summer_Olympics_medal_table"_

_  

def main():

_

    _tree = fetch_and_parse(URL, headers=HEADERS)_

    _# Find the first medal table_

    _table = tree.css_first("table.wikitable")

    if not table:

        print("No table found.")

        return

  

    rows = []

    for tr in table.css("tbody tr"):

        cells = tr.css("th, td")

        if len(cells) < 5:

            continue

  

        rank = clean_whitespace(cells[0].text(strip=True))_

        _noc = clean_whitespace(cells[1].text(strip=True))

        gold = to_int(cells[2].text(strip=True))_

        _silver = to_int(cells[3].text(strip=True))

        bronze = to_int(cells[4].text(strip=True))_

        _# Some tables have total as the 5th index; adjust safely

        total = None

        if len(cells) > 5:_

            _total = to_int(cells[5].text(strip=True))

  

        # Skip header rows or empty rows

        if not noc or noc.lower() in {"nation", "noc", "team"}:

            continue

  

        rows.append(

            {

                "rank": to_int(rank),

                "noc": noc,

                "gold": gold,

                "silver": silver,

                "bronze": bronze,

                "total": total,

            }

        )

  

    print(f"Extracted {len(rows)} rows")

    for r in rows[:5]:

        print(r)

  

if **name** == "**main**":

    main()

---

## ✅ Tips for Using as a Module

- Place the `scraper_utils` folder in your project root.
- Use relative imports within the package (`from .html import parse_html_string`).
- Use absolute imports from your app (`from scraper_utils import fetch_and_parse`).
- Keep **HTTP**, **HTML parsing**, and **Cleaning** separated — easier to test and reuse.

---

## 🔧 Optional: Minimal `pyproject.toml`

If you want to install it locally via `pip install -e .`:

[build-system]

requires = ["setuptools", "wheel"]

  

[project]

name = "scraper-utils"

version = "0.1.0"

description = "Simple reusable scraping helpers (HTTP, HTML parsing, regex cleaning)"

authors = [{ name = "Jackson Divakar Rajasingh" }]

requires-python = ">=3.9"

dependencies = [

    "requests",

    "selectolax",

]

---

If you want, I can also:

- Add **unit tests** (`pytest`) for the cleaning functions,
- Provide a **pandas** helper to turn rows into a DataFrame and export CSV/Excel,
- Or convert to a **class-based** variant.