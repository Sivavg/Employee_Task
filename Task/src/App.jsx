import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/Employee/EmployeeList';
import EmployeeForm from './pages/Employee/EmployeeForm';
import EmployeeView from './pages/Employee/EmployeeView';
import Calendar from './pages/Calendar';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employee" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<EmployeeList />} />
          <Route path="employee/add" element={<EmployeeForm />} />
          <Route path="employee/edit/:id" element={<EmployeeForm />} />
          <Route path="employee/view/:id" element={<EmployeeView />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
