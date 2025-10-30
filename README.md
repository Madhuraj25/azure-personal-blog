# Personal Blog — Azure Static Web Apps (No Build)

A clean, fast personal blog (HTML/CSS/JS) designed for **Azure Static Web Apps** with GitHub integration.

## How to deploy
1) Push this folder to GitHub (`main` branch).
2) Azure Portal → Static Web Apps → Create
   - Source: GitHub → select repo + `main`
   - Build preset: Custom (or No build)
   - App location: `/`
   - API location: *(empty)*
   - Output location: `/`
3) The GitHub Action runs → your site is live on `.azurestaticapps.net`.

## Customize
- Change name/email in `index.html` Contact section.
- Replace `assets/avatar.png` and `assets/favicon.png`.
- Edit posts in `/posts` or add more by duplicating a file.
- Update `rss.xml` and `sitemap.xml` with your final site URL.
