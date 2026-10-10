# Tenent Trading Game — Step-by-Step Setup Guide

Follow these steps in order. The whole setup takes about 30 minutes.

---

## STEP 1 — Create your Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project** → name it `tenent-trading-game` (or anything you like)
3. Disable Google Analytics if not needed → **Create project**

---

## STEP 2 — Enable Firebase services

Inside your new project:

### Authentication
1. Left menu → **Build → Authentication** → **Get started**
2. **Sign-in method** tab → Enable **Anonymous** (for students)
3. **Sign-in method** tab → Enable **Email/Password** (for admins)

### Firestore
1. Left menu → **Build → Firestore Database** → **Create database**
2. Choose **Production mode**
3. Pick a region close to your users (e.g. `europe-west2` for UK)

### Realtime Database
1. Left menu → **Build → Realtime Database** → **Create database**
2. Choose the **same region** as Firestore
3. Start in **Locked mode** (we'll add rules later)

### Hosting
1. Left menu → **Build → Hosting** → **Get started**
2. Follow the prompts (you don't need to install Firebase CLI yet — we'll do that below)

---

## STEP 3 — Get your Firebase config

1. In Firebase Console → **Project Overview** (gear icon) → **Project settings**
2. Scroll to **Your apps** → Click the **</>** (Web) icon → register the app
3. Copy the `firebaseConfig` object — you'll need these values for your `.env.local`

---

## STEP 4 — Clone and configure the app

```bash
# 1. Clone or download this project to your machine

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local

# 4. Edit .env.local and paste in your Firebase config values
#    (open it in any text editor)
```

Your `.env.local` should look like:
```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=tenent-trading-game.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://tenent-trading-game-default-rtdb.europe-west1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=tenent-trading-game
VITE_FIREBASE_STORAGE_BUCKET=tenent-trading-game.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

---

## STEP 5 — Update .firebaserc with your project ID

Open `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID:
```json
{
  "projects": {
    "default": "tenent-trading-game"
  }
}
```

---

## STEP 6 — Install Firebase CLI and deploy rules

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Log in to Firebase
firebase login

# Deploy Firestore rules + indexes and Realtime Database rules
firebase deploy --only firestore:rules,firestore:indexes,database
```

---

## STEP 7 — Create your first admin account

1. In Firebase Console → **Authentication** → **Users** tab → **Add user**
2. Enter your email and a strong password → **Add user**
3. Copy the **User UID** shown in the users table

4. In Firebase Console → **Firestore** → **Start collection**:
   - Collection ID: `admins`
   - Document ID: paste your User UID
   - Add field: `role` (string) = `superadmin`
   - Add field: `email` (string) = your email

---

## STEP 8 — Build and deploy the app

```bash
# Build the production app
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

Your app will be live at: `https://YOUR_PROJECT_ID.web.app`

---

## STEP 9 — First run workflow

1. Open your app URL
2. Click **Admin →** (top right of the join screen)
3. Sign in with the admin email/password you created in Step 7
4. You'll see the Admin Dashboard

### Create a game configuration:
1. **Game Configs** tab → **+ New Config**
2. Name it, set starting cash (e.g. £20,000)
3. Configure each segment: label, duration, price effects per asset, news story
4. **Save Game Config**

### Create a game code for a school:
1. **Game Codes** tab → **+ New Code**
2. Fill in school name, contact email, select the game config
3. Set start/end dates and max users (e.g. 35) and max plays (e.g. 100)
4. **Create Code** — a code like `TENENT-XK7Q` is generated

### Run a session:
1. **Launch Session** tab → select the game code → **🚀 Launch Session**
2. Share the code with the teacher to give to students
3. Students go to your app URL, enter the code and a nickname
4. Press **▶ Start Game** when everyone is ready
5. Click **Next Segment →** to advance through the game
6. The final leaderboard appears automatically

---

## STEP 10 — GitHub setup (optional but recommended)

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/tenent-trading-game.git
git push -u origin main
```

For automatic deployments on every push, use **GitHub Actions** with Firebase:
```bash
firebase init hosting:github
```
This adds a workflow file that deploys automatically when you push to `main`.

---

## Licence enforcement summary

- Each **Game Code** has `maxPlays` — the number of individual student completions purchased
- Each time a student finishes a game, `playsUsed` increments by 1
- When `playsUsed >= maxPlays`, new students cannot join — they see: *"This school has used all available plays"*
- Codes also have a date window (`startDate` / `endDate`) — expired codes are rejected
- Admins can disable codes manually at any time
- The **Game Codes** table in the admin dashboard shows usage at a glance

---

## Scaling to 200 concurrent users

The architecture handles 200 simultaneous users through:

- **Firebase Realtime Database** broadcasts price updates — all 200 players receive the same price
  tick from a single write, not 200 separate reads
- **Firestore** handles player state (cash, holdings) — each player only reads/writes their own
  document, so 200 players = 200 independent document streams (well within free-tier limits)
- **Firebase Hosting** serves the static React app via CDN — scales to thousands automatically
- **Firebase Auth** handles anonymous sign-in — no server needed

For a class of 35, you'll comfortably be within Firebase's Spark (free) plan.
For 200 simultaneous users across multiple sessions, consider upgrading to the Blaze (pay-as-you-go) plan,
which adds negligible cost at this scale (typically pennies per session).
