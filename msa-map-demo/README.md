# MSA — Carte des garages (démo)

Petit projet démo (React + Node + MongoDB) pour afficher des garages sur une carte avec **filtre par région**.  
Objectif : montrer une stack full‑stack JS et une fonctionnalité similaire à la mission de stage.

## Aperçu
- **Frontend** : React + Vite + react-leaflet (Leaflet)
- **Backend** : Express + MongoDB (Mongoose), endpoints REST
- **Fonction** : `/api/garages?region=...` et `/api/regions`, rendu sur carte OSM

---

## Prérequis
- Node.js ≥ 18
- MongoDB local (ou URI Atlas)

## Installation

```bash
git clone <votre-repo> msa-map-demo
cd msa-map-demo

# Backend
cd backend
cp .env.example .env
# Si vous utilisez MongoDB local, l'URI par défaut suffit
npm install
npm run seed
npm run dev
# Backend: http://localhost:4000

# Dans un autre terminal : Frontend
cd ../frontend
npm install
npm run dev
# Frontend: http://localhost:5173
```

Le frontend est configuré pour **proxy** les requêtes `/api` vers `http://localhost:4000` en dev.

---

## Endpoints API
- `GET /api/health` — statut simple
- `GET /api/regions` — liste des régions distinctes
- `GET /api/garages?region=Île-de-France` — garages, filtrés optionnellement par région

### Schéma `Garage`
```js
{
  name: String,
  region: String,
  city: String,
  address: String,
  lat: Number,
  lng: Number
}
```

---

## TODO (idées d’améliorations)
- Filtre multi-critères (ville, rayon, texte)
- Pagination / clustering des marqueurs
- TypeScript
- Tests (Jest + Supertest / React Testing Library)
- Docker compose
- Déploiement (Render/Vercel/Atlas)

---

## Licence
MIT
