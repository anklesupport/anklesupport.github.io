# Yihong Hang's academic homepage

A minimal English academic homepage hosted at <https://anklesupport.github.io/>.

## Edit the homepage

- **Name and biography:** edit `index.html`.
- **Photo:** replace `assets/profile.png` with your portrait. The initial image is your public GitHub avatar; update its alternative text and remove the "GitHub avatar" caption when replacing it.
- **Publications:** add entries to `publish/publications.json`. See `publish/README.md` for the format.
- **Appearance:** edit `assets/style.css`.

The initial biography is explicitly a placeholder. The publication list is empty until real entries are added.

## Deployment

No build or dependencies are required. GitHub Pages serves the root of the `main` branch. Push changes to `main` to update the website automatically.

For local preview, use a static HTTP server so the publication data can be loaded. Opening the HTML directly as a local file does not support the publication data request.
