# Kidrove
Kidrove is a full-stack workshop registration project for an **AI & Robotics Summer Workshop**. The repository contains:
- a **React + TypeScript + Vite** frontend (`Frontend/kidrove-app`)
- an **Express + TypeScript + MongoDB** backend (`Backend`)

## What this project does
- Displays a workshop landing page with details, curriculum outcomes, FAQ, and organizer info
- Collects parent/student registration enquiries (name, email, phone)
- Validates inputs on both frontend and backend
- Stores enquiries in MongoDB

## Tech stack
### Frontend
- React 19 + TypeScript
- Vite 7
- Tailwind CSS + custom theme tokens
- Wouter (routing)
- Radix UI primitives (toast/tooltip)
- TanStack React Query (provider wired in app)

### Backend
- Node.js + Express 5
- TypeScript
- Mongoose
- CORS + dotenv

## Repository structure
```text
Kidrove/
├─ Backend/
│  ├─ src/
│  │  ├─ app.ts
│  │  ├─ server.ts
│  │  ├─ config/db.ts
│  │  ├─ controllers/enquiryController.ts
│  │  ├─ models/Enquiry.ts
│  │  └─ routes/enquiryRoutes.ts
│  ├─ .env.example
│  ├─ package.json
│  └─ tsconfig.json
├─ Frontend/
│  └─ kidrove-app/
│     ├─ src/
│     │  ├─ App.tsx
│     │  ├─ pages/workshop.tsx
│     │  ├─ components/workshop/*
│     │  ├─ components/layout/Navbar.tsx
│     │  ├─ components/ui/*
│     │  ├─ lib/constants.ts
│     │  └─ index.css
│     ├─ public/ai.jpg
│     ├─ public/logo.jpeg
│     ├─ package.json
│     └─ vite.config.ts
└─ README.md
```

## Prerequisites
- Node.js 18+ (recommended: latest LTS)
- npm
- MongoDB Atlas (or local MongoDB instance)

## Setup and run
### 1) Backend
```bash
cd Backend
cp .env.example .env
npm install
npm run dev
```
Backend runs on `http://localhost:5000` by default.

### 2) Frontend
```bash
cd Frontend/kidrove-app
npm install
npm run dev
```
Frontend runs on `http://localhost:5173` by default.

## Environment variables
### Backend (`Backend/.env`)
```env
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
NODE_ENV=development
```

### Frontend (`Frontend/kidrove-app/.env`, optional)
If not set, frontend defaults to `http://localhost:5000`.
```env
VITE_API_URL=http://localhost:5000
```

## API
### POST `/api/enquiry`
Creates a new enquiry.

Request body:
```json
{
  "name": "Parent Name",
  "email": "parent@example.com",
  "phone": "9876543210"
}
```

Validation rules:
- `name`: required
- `email`: required, valid email format
- `phone`: required, valid 10-digit Indian mobile format (`^[6789]\d{9}$`)

Success response: `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Parent Name",
    "email": "parent@example.com",
    "phone": "9876543210",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## npm scripts
### Backend (`Backend/package.json`)
- `npm run dev` → run server with `ts-node-dev`
- `npm run build` → compile TypeScript to `dist/`
- `npm run start` → run compiled server

### Frontend (`Frontend/kidrove-app/package.json`)
- `npm run dev` → start Vite dev server
- `npm run build` → type-check and build
- `npm run preview` → preview production build
- `npm run lint` → run ESLint

