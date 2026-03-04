# Employee Management System

![React JSX](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern, responsive, and easy-to-use **Employee Management System** built with React, Vite, and Tailwind CSS. This system allows you to manage employee records seamlessly with a clean user interface.

## ✨ Features

- **Dashboard & Layout:** Persistent sidebar and header navigation across the application.
- **Employee Management:**
  - **View all employees:** A comprehensive list of the employee directory (`/employee`).
  - **Add new employee:** A dedicated form to onboard employees (`/employee/add`).
  - **Edit employee records:** Update existing information effortlessly (`/employee/edit/:id`).
  - **Detailed view:** Dedicated profile viewing page for each individual employee (`/employee/view/:id`).
- **Global State Management:** Powered by React's Context API (`EmployeeContext`) for seamless data flow without prop-drilling.
- **Responsive Design:** Completely responsive layout styled with Utility-first Tailwind CSS.
- **Routing:** Handled with the latest React Router (v7).

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Icons:** [Lucide-React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── assets/        # Static assets (images, logos)
├── components/    # Reusable UI components (Header, Sidebar, Layout)
├── context/       # Global State (EmployeeContext)
├── pages/         # Application Routes
│   ├── Employee/  # Employee related pages (Add, Edit, List, View)
│   ├── Dashboard  # Placeholder Dashboard page
│   ├── Calendar   # Placeholder Calendar page
│   └── Messages   # Placeholder Messages page
├── App.jsx        # Main Application & Router Config
└── main.jsx       # Entry Point
```

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd Task
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local server address (usually `http://localhost:5173`).

---

*Initially built as a simple React project, the application showcases core front-end skills including Context API management, Router configuration, and modern UI design using Tailwind CSS.*
