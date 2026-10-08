# Yihong Hang's academic homepage

A minimal English academic homepage hosted at <https://anklesupport.github.io/>.

## Edit the homepage

- **Name and biography:** edit `index.html`.
- **Avatar:** replace `avatar.jpg` in the repository root. The homepage displays it in a vertical oval on desktop and mobile.
- **Publications:** add entries to `publish/publications.json`. See `publish/README.md` for the format.
- **Appearance:** edit `assets/style.css`.

The biography includes the academic affiliation, advisor, and research interests. The publication list is empty until real entries are added.

## Deployment

No build or dependencies are required. GitHub Pages serves the root of the `main` branch. Push changes to `main` to update the website automatically.

For local preview, use a static HTTP server so the publication data can be loaded. Opening the HTML directly as a local file does not support the publication data request.
