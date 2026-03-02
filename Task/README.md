# RadicalStart

Hey there! This is a simple React project I built for an Employee Management System. It's set up using Vite and styled with Tailwind CSS. 

### What I've built so far:

- **Routing:** I've set up React Router for navigating around. The app uses a main layout with a persistent sidebar and header. If you hit the root URL, it just redirects you straight to the employee page.
- **Employee Core Features:** This is the main focus of the app right now.
  - You can view a complete list of employees (`/employee`).
  - There's a form to add a new employee (`/employee/add`).
  - You can select and edit an existing employee's details (`/employee/edit/:id`).
  - There's also a detailed view page for individual employees (`/employee/view/:id`).
- **State Management:** To keep things clean, I used the React Context API (`EmployeeContext`). This handles all the employee data globally, so I didn't have to deal with messy prop-drilling across the app.
- **Placeholders:** I've also set up a few basic pages for a Dashboard, Calendar, and Messages to show how the layout works. They're just simple views right now.

### Tech Stuff I Used:
- React 18
- Vite
- Tailwind CSS
- React Router v7
- Lucide-React for the icons

### How to run it locally:
Just standard stuff. First, install the packages:

```bash
npm install
```

Then start the dev server:

```bash
npm run dev
```
