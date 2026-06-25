# React Profile Card – Checkpoint Project

> **GoMyCode Checkpoint** · React · Class-Based Components · State · Lifecycle Methods

---

## 📋 Project Spec

| Item | Detail |
|---|---|
| **Project name** | React Profile Card |
| **Author** | Mohamed Amine GHarbi |
| **Bootcamp** | GoMyCode |
| **Goal** | Demonstrate class-based React components, local state, conditional rendering, and the component lifecycle |

---

## 🎯 What This App Does

A single-page React application that:

1. **Displays a toggleable profile card** – clicking the button flips the `show` boolean in state, which conditionally renders the card.
2. **Stores a `Person` object in state** with `fullName`, `bio`, `imgSrc`, and `profession` fields.
3. **Tracks time since mount** – a `setInterval` inside `componentDidMount` ticks every second and updates `secondsSinceMount` in state, displaying a live uptime counter at the top of the page.
4. **Cleans up properly** – the interval is cleared in `componentWillUnmount` to prevent memory leaks.

---

## 🛠 Tech Stack

- **React 18** (Create React App)
- **JavaScript (ES6+)**
- **CSS3** (custom properties, keyframe animations, responsive layout)
- Google Fonts – *Space Grotesk* + *JetBrains Mono*

---

## 📁 File Structure

```
react-profile-app/
├── public/
│   └── index.html          # HTML shell
├── src/
│   ├── App.js              # Class-based component (main logic)
│   ├── App.css             # Component styles
│   ├── index.js            # React DOM entry point
│   └── index.css           # Global reset & CSS variables
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Installation & Run

```bash
# 1. Navigate into the project folder
cd react-profile-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000** automatically.

---

## 🧠 Key Concepts Demonstrated

### Class-Based Component
`App` extends `React.Component` and uses a `constructor` to initialise state and bind event handlers.

### State
```js
this.state = {
  person: {
    fullName:   'Mohamed Amine Harbi',
    bio:        '...',
    imgSrc:     '...',
    profession: 'Software Engineer',
  },
  show:              false,
  secondsSinceMount: 0,
};
```

### Toggle Logic
```js
handleToggle() {
  this.setState(prevState => ({ show: !prevState.show }));
}
```

### Component Lifecycle
```js
componentDidMount() {
  this.intervalId = setInterval(() => {
    this.setState(prev => ({ secondsSinceMount: prev.secondsSinceMount + 1 }));
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.intervalId);   // prevent memory leak
}
```

---

## 📸 UI Preview

```
┌──────────────────────────────────────┐
│       React Profile Card             │
│  ● Component mounted 42s ago         │
│                                      │
│       [ 👤 Show Profile ]            │
│                                      │
│  ┌────────────────────────────────┐  │
│  │        (avatar image)          │  │
│  │   Mohamed Amine Harbi          │  │
│  │   < Software Engineer />       │  │
│  │   ────────────────────         │  │
│  │   Developer / Software Eng 💻  │  │
│  │   "A passionate software…"     │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

---

## ✅ Checkpoint Requirements Checklist

- [x] Project created with `create-react-app`
- [x] `App.js` transformed into a **class-based component**
- [x] State contains a `Person` object (`fullName`, `bio`, `imgSrc`, `profession`)
- [x] State contains a `show` boolean
- [x] Button **toggles** `show` – profile card appears/disappears accordingly
- [x] Live counter shows **time since component mounted** using `setInterval` in `componentDidMount`
- [x] Interval cleaned up in `componentWillUnmount`

---

## 👤 Author

**Mohamed Amine Gharbi**  
Software Engineer · GoMyCode Student  

---

*Built with ❤️ as part of the GoMyCode React curriculum.*
