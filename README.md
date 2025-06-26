## ✨ README: JWT Auth + Product List (DummyJSON API)

This is a Next.js (App Router) project implementing JWT-based user authentication and product listing using the [DummyJSON public API](https://dummyjson.com/).

---

## ♻ Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Zustand** (state management)
* **Axios** (HTTP requests)
* **SCSS Modules** (styling)
* **Prettier + ESLint + Stylelint** (code quality)

---

## ✉️ Functional Requirements (Implemented)

### 1. User Authorization (JWT)

* Login page with username & password fields
* Form validation (min 3 characters)
* On success, token and user info stored in Zustand
* On failure, error message shown
* Redirect to `/` on success

### 2. Product List

* Displays 12 products on the home page
* Each product shows image, title, category, and price
* If user is logged in, "Add to cart" button is shown

### 3. Header

* Not logged in: shows link to Login page
* Logged in: shows user's `firstName lastName`, avatar, and Logout

### 4. Footer

* Not logged in: © YEAR
* Logged in: © YEAR Logged as `username@dummyjson.com`

### 5. Additional

* Fully responsive (mobile/desktop)
* SSR for initial products (optional)
* Lazy loading with `IntersectionObserver`

---

## ⚡ Login Test Account

Use these credentials (from DummyJSON docs):

```txt
username: kminchelle
password: 0lelplR
```

---

## 🌄 Project Structure

```
src/
├── app/
│   ├── login/page.tsx        # Login page
│   ├── layout.tsx            # Shared layout with Header/Footer
│   └── page.tsx              # Home page with product list
├── components/               # UI components
├── store/                    # Zustand store (auth.ts)
├── lib/api.ts                # Axios instance
├── styles/                   # SCSS modules
├── types/                    # TS interfaces
```

---

## ▶️ Run the project locally

```bash
git clone <repo-url>
cd <project-folder>
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Features to consider

* LocalStorage persist for auth (optional)
* Add-to-cart implementation
* Token-based protected APIs
* Skeleton loaders and UX polishing

---

## 🌟 Author

Developed as part of a test task using real API authorization (JWT) + public product list from DummyJSON.
