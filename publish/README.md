# Publications

The homepage reads `publications.json` from this directory. Add real publications in the order you want them displayed, typically newest first. The initial list is empty.

Each entry requires a `title`. Optional fields are:

| Field | Description |
| --- | --- |
| `authors` | Author names as a single string. |
| `venue` | Journal, conference, or preprint venue. |
| `year` | Publication year as a number or string. |
| `url` | Paper or DOI URL, linked from the title. |
| `pdf` | Public PDF URL or a relative path such as `publish/paper.pdf`. |
| `code` | Public code repository URL. |

All relative links are resolved from the homepage root. You may place paper PDFs in this directory. Omit links that are not available.

Example format only; replace every bracketed value with real information before publishing:

```json
[
  {
    "title": "[Paper title]",
    "authors": "[Author names]",
    "venue": "[Venue]",
    "year": "[Year]",
    "url": "https://doi.org/[DOI]"
  }
]
```
