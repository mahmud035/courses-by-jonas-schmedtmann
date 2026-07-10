# 📚 Courses by Jonas Schmedtmann — Complete JavaScript & Ultimate React

My projects, notes, and exercises from two of Jonas Schmedtmann's courses: the **Complete JavaScript Course** and the **Ultimate React Course**. Each course is worked through section by section, from fundamentals to full applications.

> Personal learning archive. Code follows the courses' structure and projects; use it as reference or a study companion.

---

## 📂 Repository structure

```
courses-by-jonas-schmedtmann/
├── complete-javascript-course/     # 18 sections, fundamentals → Forkify
├── ultimate-react-course/          # 20+ sections, pure React → full-stack Next.js
└── resources/                      # course slides, coding challenges, and reference sheets
    ├── js-theory-lectures-v2.3.pdf
    ├── js-all-coding-challenges.pdf
    ├── js-assignments-fundamentals.pdf
    ├── js-pathways.pdf
    ├── react-theory-slides-v1.1.pdf
    ├── es6-classes-summary.png
    ├── more-array-tools-and-techniques.png
    └── which-array-method-to-use.png
```

---

## 🟨 Complete JavaScript Course

JavaScript from the ground up, section by section (`01-fundamentals-part-1` → `18-forkify`).

**Concepts:** variables, data types, operators, control flow, loops · functions, scoping, hoisting, closures · DOM manipulation & events · execution contexts, the call stack, the event loop · ES6+ (arrow functions, destructuring, spread/rest) · promises & async/await · OOP (prototypes, ES6 classes) · modules & tooling (Webpack, Babel, Parcel).

**Projects built:**
- **Guess My Number**, **Modal**, **Pig Game** — DOM & events fundamentals
- **Bankist** (arrays, numbers/dates/timers, advanced DOM) — a banking-app simulation
- **Mapty** — a workout tracker with Leaflet maps, OOP, and local storage
- **Forkify** — a recipe app consuming a REST API, with MVC architecture and Parcel bundling

## ⚛️ Ultimate React Course

Modern React from first principles (`01-pure-react` → `21-the-wild-oasis-website`).

**Concepts:** JSX, components, props, state, event handling · lists, forms & conditional rendering · hooks (`useState`, `useEffect`, `useContext`, `useReducer`, custom hooks) · how React works behind the scenes · performance & memoization · Context API and **Redux Toolkit** · **React Router** (v6.4+ data loaders) · **TanStack Query** for server state · **styled-components** · **Next.js** (SSR and the App Router) with **Supabase**.

**Projects built (selected):**
- **Pizza Menu**, **Travel List**, **Eat-'N-Split** — components, state, and props
- **usePopcorn** — data fetching, custom hooks, and effects
- **React Quiz** — `useReducer`-driven state
- **WorldWise** — routing, context, and maps
- **Fast React Pizza** — React Router data loaders + Redux Toolkit
- **The Wild Oasis** — a hotel-management dashboard (Supabase, React Query, styled-components)
- **The Wild Oasis Website** — a full-stack **Next.js** guest site with Supabase

---

## 💻 Technologies covered

- **JavaScript (ES6+)** — closures, promises, async/await, modules, OOP
- **React** — functional components, hooks, Context API
- **Redux Toolkit** — global state management
- **TanStack Query** — server/remote state
- **Next.js** — SSR and full-stack React
- **Supabase** — database, auth, and APIs for the Wild Oasis projects
- **Styling** — Flexbox, CSS Grid, CSS Modules, styled-components
- **Tooling** — Webpack, Babel, Parcel, Vite; Create React App's Jest / React Testing Library defaults
- **Git & GitHub** — version control workflow

---

## 🛠 How to run a project

Projects live under each course folder. Vanilla-JS projects open directly in the browser; React/Next.js projects have their own `package.json`.

```bash
# Clone this repository
git clone https://github.com/mahmud035/courses-by-jonas-schmedtmann.git
cd courses-by-jonas-schmedtmann

# For a React / Next.js project, cd into it, then:
npm install
npm start        # CRA/Vite projects
# or: npm run dev   (Next.js / Vite projects)
```

Vanilla-JavaScript sections (e.g. `complete-javascript-course/05-guess-my-number`) can be opened by launching their `index.html` (a Live Server extension works well).
