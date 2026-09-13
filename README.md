# Alexandre Andrade — Personal Website

Personal website built with **Vite + React + TypeScript**.

## Features

- **Internationalization (i18n)**: Portuguese (default), English, and Spanish
- **Cloud Projects Section**: Showcases self-hosted solutions on Magalu Cloud
- **Responsive Design**: Mobile-first approach with CSS Grid
- **Dark Theme**: Modern dark UI with blue accents

## Stack

- Vite
- React
- TypeScript
- CSS
- Lucide React
- GitHub Pages

## Cloud Projects

| Project | Description | URL |
|---------|-------------|-----|
| n8n | Workflow automation and integrations | n8n.aralvesandrade.com.br |
| Excalidraw | Digital whiteboard for diagrams | excalidraw.aralvesandrade.com.br |
| databasement | Database management | databasement.aralvesandrade.com.br |
| portainer | Docker container management | mgc-portainer.aralvesandrade.com.br |

All projects are hosted on [Magalu Cloud](https://magalu.cloud/).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

Create a repository named `aralvesandrade.github.io`, push the project to `main`, and enable GitHub Pages using **GitHub Actions** as the source.

### Optional

Place a PDF named `curriculo.pdf` inside `public/` to enable the curriculum button.

## Notes

The site focuses on professional experience, expertise, technology stack, and self-hosted cloud projects. The i18n system allows visitors to switch between Portuguese, English, and Spanish.
