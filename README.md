# Bansi Santoki — Portfolio (Vite + React)

---

## 📁 Complete File Structure

```
bansi-portfolio/
│
├── index.html                        ← Root HTML (Vite standard)
├── vite.config.js                    ← Vite config
├── package.json                      ← Dependencies
│
└── src/
    ├── main.jsx                      ← React entry point
    ├── App.jsx                       ← Root component
    ├── App.css                       ← App-level styles
    ├── index.css                     ← Global styles + utility classes
    │
    ├── assets/
    │   └── profile.jpg               ← ⬅ PUT YOUR PHOTO HERE
    │
    └── components/
        ├── Navbar.jsx  + Navbar.css
        ├── Hero.jsx    + Hero.css
        ├── Clients.jsx + Clients.css
        ├── Projects.jsx + Projects.css
        ├── Skills.jsx  + Skills.css
        ├── Services.jsx + Services.css
        ├── Testimonials.jsx + Testimonials.css
        ├── Contact.jsx + Contact.css
        └── Footer.jsx  + Footer.css
```

---

## 🚀 STEP-BY-STEP SETUP

### ✅ Step 1 — Install Node.js
- Download from: https://nodejs.org
- Install the **LTS version** (v18 or v20)
- Verify: open terminal and type:
  ```
  node -v
  npm -v
  ```
  Both should show version numbers.

---

### ✅ Step 2 — Extract this ZIP
- Extract the ZIP to any folder, e.g., `Desktop/bansi-portfolio`

---

### ✅ Step 3 — Add Your Profile Photo
1. Find your photo file (`1782212700667_image.png`)
2. Copy it into `src/assets/`
3. Rename it to **`profile.jpg`**

> ⚠️ If your image is `.png`, rename it to `profile.png` AND update
> line 2 of `Hero.jsx`:
> ```js
> import profilePic from '../assets/profile.png'
> ```

---

### ✅ Step 4 — Open Terminal in Project Folder

**Windows:**
- Right-click the `bansi-portfolio` folder → "Open in Terminal"
  OR open Command Prompt and type:
  ```
  cd Desktop\bansi-portfolio
  ```

**Mac / Linux:**
- Right-click folder → "Open Terminal Here"
  OR:
  ```
  cd ~/Desktop/bansi-portfolio
  ```

---

### ✅ Step 5 — Install Dependencies
```bash
npm install
```
This downloads React, Vite, and all required packages into `node_modules/`.
Takes 1–2 minutes.

---

### ✅ Step 6 — Start the Dev Server
```bash
npm run dev
```
You will see:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```
Open **http://localhost:5173** in your browser. 🎉

---

### ✅ Step 7 — Build for Production
When you're ready to deploy:
```bash
npm run build
```
This creates a `dist/` folder with your final website files.

---

## 🌐 How to Deploy (Free Options)

### 🟢 Option A — Netlify (Easiest)
1. Run `npm run build`
2. Go to https://netlify.com → Sign up free
3. Drag and drop your `dist/` folder onto the dashboard
4. Done! You get a live URL like `bansi-portfolio.netlify.app`

### 🟣 Option B — Vercel
1. Push code to GitHub
2. Go to https://vercel.com → "New Project" → import repo
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output dir: `dist`
6. Deploy!

### 🔵 Option C — GitHub Pages
```bash
npm install gh-pages --save-dev
```
Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
Add homepage:
```json
"homepage": "https://BansiSantoki.github.io/portfolio"
```
Then run:
```bash
npm run deploy
```

---

## ✏️ How to Customise

| What to change      | Which file                        |
|---------------------|-----------------------------------|
| Your name / bio     | `src/components/Hero.jsx`         |
| Projects            | `src/components/Projects.jsx`     |
| Skills list         | `src/components/Skills.jsx`       |
| Services accordion  | `src/components/Services.jsx`     |
| Testimonials        | `src/components/Testimonials.jsx` |
| Contact email       | `src/components/Contact.jsx`      |
| Social links        | `src/components/Contact.jsx`      |
| Colors / fonts      | `src/index.css` (`:root` vars)    |
| Nav links           | `src/components/Navbar.jsx`       |
| Footer links        | `src/components/Footer.jsx`       |

---

## 📧 Make Contact Form Actually Send Emails

In `Contact.jsx`, find the `submit` function and replace with:

**Using Formspree (free, no backend needed):**
1. Sign up at https://formspree.io
2. Create a form, get your form ID (e.g. `xabc1234`)
3. Replace the submit function:
```js
const submit = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/xabc1234', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) {
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }
}
```

---

## ❓ Common Issues

| Problem | Fix |
|---|---|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Cannot find module '../assets/profile.jpg'` | Add profile.jpg to src/assets/ |
| Port 5173 already in use | Run `npm run dev -- --port 3000` |
| Blank page after build | Check browser console for errors |

---

## 🛠 Tech Stack
- **React 18** — UI library
- **Vite 5** — Build tool (fast HMR)
- **Pure CSS** — No UI library, all custom
- **Google Fonts** — Inter + Playfair Display
