# GitHub User Explorer

**GitHub User Explorer** is a lightweight and responsive web application that allows users to search for any GitHub username and explore their real-time profile information and repositories using the GitHub API.

🚀 **Live Demo**: [GitInsights](https://git-user-explorer.netlify.app/) 

---

## 📖 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Live Demo](#live-demo)

---

## ✨ Features

- **GitHub User Search**: Instantly search for any GitHub username.
- **Debounced Input**: Search input is debounced (500ms delay) to minimize API hits.
- **User Profile Info**: View avatar, name, bio, and follower count.
- **Repositories Explorer**:
  - Display public repositories.
  - Filter by programming language (dropdown or checkbox).
  - Infinite scroll to load more repositories as you scroll.
- **Responsive Design**: Fully mobile-friendly layout.
- **Dark Mode Toggle**: Switch between light and dark themes.
- **Error Handling**: Handles user not found and API rate limit exceeded errors.
- **Loader UI**: Shows spinners while fetching data.

---

## 🛠️ Technology Stack

- **React**: For building the user interface.
- **Vite**: For lightning-fast development.
- **Axios**: For making API requests.
- **Tailwind CSS**: For modern and responsive styling.
- **React Icons**: For accessible and beautiful icons.
- **React Hot Toast**: For toast notifications.

---

## 🛠 Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/Soraiya11-7/github-user-explorer

# Navigate into the project
cd git-user-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📦 Dependencies

```bash
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.5",
    "axios": "^1.9.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "tailwindcss": "^4.1.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}

```
---
## 🌍 Live Demo & Repository

### 🚀 Live URL

  - Netlify: [GitInsights](https://git-user-explorer.netlify.app/)


🔗 GitHub Repository: [Link](https://github.com/Soraiya11-7/github-user-explorer)
---
🎯 GitHub User Explorer – Effortlessly explore GitHub profiles and repositories with real-time data and a smooth user experience!