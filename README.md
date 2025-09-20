# Cat Saga Implementation 🐱

A simple React application demonstrating the use of **Redux-Saga** for managing asynchronous side effects in a Redux-based state management system.

This project was built to explore and understand how Redux-Saga can handle complex async logic such as data fetching, error handling, and action coordination — commonly used in real-world applications.

> Originally named after a fun "Cat Facts" API integration, this app serves as a practical example of middleware-driven state updates.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **State Management**: Redux, Redux-Saga, Redux Toolkit
- **Styling**: CSS Modules / Plain CSS
- **API**: [https://catfact.ninja](https://catfact.ninja) (public domain)
- **Build Tool**: Vite (or Create React App, if applicable)

---

## 🧩 Features

✅ Fetching random cat facts via API  
✅ Loading states and error handling using sagas  
✅ Watcher and worker saga pattern implementation  
✅ Proper separation of actions, reducers, and side effects  
✅ Clean, readable code structure for educational purposes  

Ideal for developers learning:
- How Redux-Saga works
- Managing async flows beyond `thunks`
- Decoupling side effects from components

---

## 🔧 Getting Started

### 1. Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 2. Clone and Install
```bash
git clone https://github.com/nelsonct7/cat_saga_implementation.git
cd cat_saga_implementation
npm install
