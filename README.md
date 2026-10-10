# Tenent Trading Game — Web Platform

A multiplayer web-based stock trading simulation for schools, built with React + Firebase.

---

## Architecture Overview

```
tenent-trading-game/
├── src/
│   ├── components/
│   │   ├── admin/        # Game creation, monitoring, licence management
│   │   ├── game/         # Player trading interface
│   │   └── auth/         # Login screens
│   ├── hooks/            # Firebase real-time hooks
│   ├── utils/            # Price engine, game logic
│   └── styles/           # Global CSS
├── firebase-rules/       # Firestore + Realtime DB security rules
└── public/
```

### Firebase Services Used
- **Firestore**: Game configs, game codes, player state, licence tracking
- **Firebase Realtime Database**: Live price broadcasts (low-latency pub/sub)
- **Firebase Auth**: Anonymous auth for players; email auth for admins
- **Firebase Hosting**: Static site deployment

---

## Quick Setup

### 1. Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project: `tenent-trading-game`
3. Enable **Authentication** → Anonymous + Email/Password
4. Enable **Firestore Database** (production mode)
5. Enable **Realtime Database**
6. Enable **Hosting**

### 2. Environment Variables
Copy `.env.example` → `.env.local` and fill in your Firebase config:

```bash
cp .env.example .env.local
```

Find your config in Firebase Console → Project Settings → Your Apps → Web App.

### 3. Install & Run
```bash
npm install
npm run dev        # Development server
npm run build      # Production build
npm run deploy     # Deploy to Firebase Hosting
```

### 4. Deploy Firebase Rules
```bash
firebase deploy --only firestore:rules,database:rules
```

### 5. Create First Admin Account
1. Open the app → click "Admin Login"
2. Use the Firebase Console → Authentication to manually add an admin email
3. In Firestore, create: `admins/{uid}` → `{ role: "superadmin" }`

---

## Licence / Game Code System

- **Admins** create **Game Codes** (e.g. `TENENT-XK7Q`)
- Each code has: `startDate`, `endDate`, `maxUsers`, `maxPlays`
- A **"play"** = one student completing one game session
- The system counts plays and blocks access when `maxPlays` is reached
- Schools cannot reuse codes beyond what they've paid for

---

## Multiplayer Flow

```
Admin creates game config → shares Game Code with teacher
Teacher shares code with students → students enter code + nickname
Admin presses START → all players see prices + can trade
Admin advances to next segment → news story shown to all
Price engine applies effects → all players see updated prices
Game ends → leaderboard shown to all
```

---

## Assets in the Game
- **Netshop** — Internet retailer
- **Peach** — Technology company  
- **Elliecar** — Electric car company
- **Oilco** — Oil and gas driller
- **Cryptcoin** — Electronic currency

---

## Price Effect Types (Admin Configuration)
| Effect | Multiplier Range |
|--------|-----------------|
| Sharp Up | +20% to +35% |
| Up | +5% to +15% |
| Flat/Random | -3% to +3% |
| Down | -5% to -15% |
| Sharp Down | -20% to -35% |
| High Volatility | ±5% to ±25% random |
