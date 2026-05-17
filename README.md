# Ornela Design — Site statique

Site complet en HTML / CSS / JS / JSON pur, sans framework.

## Structure
- `index.html`, `services.html`, `a-propos.html`, `contact.html` — pages
- `css/styles.css` — styles
- `js/main.js` — interactions, icônes SVG, rendu dynamique depuis JSON
- `data/services.json` — données (services, pack, valeurs)
- `assets/logo.png` — logo

## Lancer en local
Comme le site charge `data/services.json` via fetch, il faut un mini serveur :
```
npx serve .
# ou
python3 -m http.server 8000
```
Puis ouvrir http://localhost:8000

## Hébergement
Déployable tel quel sur Netlify, Vercel, GitHub Pages, OVH, etc.
