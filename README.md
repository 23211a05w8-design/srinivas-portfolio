# Srinivas Vankudoth – Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```
Requires Node.js 18+.

## Where to add your details
| What | Where |
|---|---|
| Photo | save as `public/assets/profile.jpg` (initials show until then) |
| Resume | save as `public/assets/Srinivas_Vankudoth_Resume.pdf` |
| Email, phone, GitHub, LinkedIn | `src/data/portfolio.js` → `profile` |
| Project demo / GitHub links | `src/data/portfolio.js` → `projects` (`demo`, `github`) |
| Certifications, education | `src/data/portfolio.js` |
| Colors | CSS variables at the top of `src/index.css` |

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com, sign in with GitHub, click **Add New → Project**, and import the repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. Every `git push` to `main` redeploys the site.

CLI alternative: `npm i -g vercel`, then run `vercel` in this folder.
