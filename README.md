# Auth Frontend

Skapad av: Pontus Johansson

Webbplats som konsumerar https://github.com/Punttt/auth-api.git — webbtjänsten från Uppgift 1. Användare kan skapa konton, logga in och se profildata från en skyddad route. Del av Moment 4 i backend-kursen.

## Funktionalitet

- Registrering av användarkonton via formulär
- Inloggning som returnerar en JWT
- JWT sparas i sessionStorage
- Skyddad dashboard som hämtar profildata via Fetch API
- Logout som rensar token
- Klientvalidering med tydliga felmeddelanden

## Tech stack

- Vite (utvecklingsmiljö)
- Vanilla JavaScript (ES6 modules)
- SCSS för styling
- Fetch API för anrop mot backend

## Installation

1. Klona repot
```bash
   git clone https://github.com/DITTNAMN/auth-frontend.git
   cd auth-frontend
```

2. Installera beroenden
```bash
   npm install
```

3. Starta utvecklingsservern
```bash
   npm run dev
```

Webbplatsen körs på `http://localhost:5173`.

**OBS!** Backend måste köras parallellt på `http://localhost:3000`. Se [auth-api](https://github.com/DITTNAMN/auth-api) för instruktioner.

## Sidor
  - Index.html (startsidan - registrering av konto)
  - login.html (logga in med befintligt konto)
  - dashboard.html (Skyddad sida som visar profildata.)

## Projektstruktur

```
auth-frontend/
├── index.html
├── login.html
├── dashboard.html
├── vite.config.js
└── src/
    ├── css/
    │   └── main.scss
    └── js/
        ├── api.js          (delade hjälpfunktioner)
        ├── register.js     (registreringslogik)
        ├── login.js        (login-logik + token-lagring)
        └── dashboard.js    (hämtar profil + logout)
```

## Användarflöde

1. Användaren kommer in på registreringssidan
2. Efter lyckad registrering, skickas man till logga in sidan
3. Lyckad inloggning skapar JWT som lagras i session storage sedan omdirigeras till dashboard
4. Dashboard hämtar profildata från skyddad route med JWT i Authorization-header
5. Logout-knapp rensar token och skickar tillbaka till login

## Säkerhetstänk

- JWT lagras i `sessionStorage` (raderas vid flikstängning)
- Token är giltig i 1 timme (server-sida)
- Dashboard kontrollerar token vid sidladdning och redirectar vid avsaknad
- Klientvalidering kompletterar (men ersätter inte) validering på servern
