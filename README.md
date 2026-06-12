# adeliaramp.github.io

Personal portfolio and writing hub. Built with Next.js 14 (App Router) and Tailwind CSS, exported as a fully static site and served by GitHub Pages.

Live at: [adeliaramp.github.io](https://adeliaramp.github.io)

## How it works

- **Projects** load client-side from the GitHub API (`api.github.com/users/adeliaramp/repos`). If the API is unavailable, a hardcoded snapshot of selected repos renders instead.
- **Writing** is pulled from the Medium RSS feed at build time, so the deployed HTML already contains the latest posts. The deploy workflow also rebuilds the site every Monday to pick up new posts automatically.
- **Contact form** posts to Formspree, so no backend is needed.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
```

Node 20 or newer.

## Deployment

The site deploys itself through GitHub Actions (`.github/workflows/deploy.yml`):

1. Create a GitHub repository named exactly `adeliaramp.github.io` (user pages only work with this name).
2. Push this project to the `main` branch.
3. The workflow builds the site and publishes `/out` to the `gh-pages` branch.
4. In the repository settings, under **Pages**, set the source to **Deploy from a branch** and pick `gh-pages` / root. This only needs to be done once, after the first workflow run.

After that, every push to `main` redeploys the site within a couple of minutes.

## Before going live

Two placeholders need real values:

- **Formspree**: create a free form at [formspree.io](https://formspree.io), then replace `YOUR_FORMSPREE_ID` in `app/components/Contact.tsx` with the form ID.
- **Resume**: replace `public/resume.pdf` with the real file. The filename must stay `resume.pdf`.

Optional: add a photo at `public/avatar.jpg` and swap the initials circle in `app/components/Hero.tsx` for an `img` tag (there is a comment marking the spot).

## Structure

```
app/
  layout.tsx          fonts, metadata
  page.tsx            single-page composition
  components/         one file per section
public/
  resume.pdf          downloadable resume
.github/workflows/
  deploy.yml          build + deploy on push, plus weekly rebuild
```
