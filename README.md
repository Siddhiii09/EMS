# Employee Management System

A React.js-based Employee Management System built with Vite for fast development. This app provides role-based dashboards for Admins and Employees to manage and track tasks efficiently.

---

## 🚀 Features
👨‍💼 Admin Features

🔑 Login authentication (Login.jsx)

📝 Create new tasks (CreateTask.jsx)

📋 View and manage all tasks (AllTask.jsx)

📊 Admin dashboard overview (AdminDashboard.jsx)

---

## 👨‍🔧 Employee Features

🖥️ Employee dashboard (EmployeeDashboard.jsx)

✅ Accept tasks (AcceptTask.jsx)

✔️ Complete tasks (CompleteTask.jsx)

❌ Fail tasks (FailedTask.jsx)

🆕 View new tasks (NewTask.jsx)

🔢 Track Task Counts (TaskListNum.jsx)

---

## ⚙️ Shared Features

🌐 Centralized authentication (AuthProvider.jsx)

💾 Local storage persistence (Utils/localStorage.jsx)

🧩 Reusable UI components (Header.jsx, TaskList.jsx)

⚡ Fast build system with Vitee

---

## 🛠️ Tech Stack

⚛️ Frontend: React.js + Vite

🎨 Styling: Tailwind CSS (App.css, index.css)

📦 State Management: React Context API

💾 Storage: LocalStorage

🧹 Linting: ESLint (eslint.config.js)

---

## 📂 Project Structure

```
src
│── assets/              
│── Components/
│   ├── Auth/            # Authentication components
│   │   └── Login.jsx
│   ├── Dashboard/       # Admin & Employee dashboards
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Other/           # Misc components
│   │   ├── AllTask.jsx
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   └── TaskListNum.jsx
│   ├── TaskList/        # Task-related components
│   │   ├── AcceptTask.jsx
│   │   ├── CompleteTask.jsx
│   │   ├── FailedTask.jsx
│   │   ├── NewTask.jsx
│   │   └── TaskList.jsx
│   └── Context/
│       └── AuthProvider.jsx
│── Pages/               # Page-level components
│── Utils/               # Utility functions
│   └── localStorage.jsx
│── App.jsx              # Main app component
│── App.css              # App-specific styling
│── index.css            # Global styles
│── main.jsx             # Entry point
│
├── index.html           # Vite entry HTML
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint rules
├── package.json         # Dependencies & scripts
├── package-lock.json    # Lockfile
├── .gitignore           # Git ignored files
└── README.md            # Project documentation
```
---
