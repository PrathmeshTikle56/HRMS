import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/AdminDashBoard";
import Login from "./pages/LoginPage";
import EmployeeLayout from "./components/layout/EmployeeLayout";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import LeaveManagement from "./pages/LeaveManagement";
import PayrollManagement from "./pages/PayrollManagement";
import EmployeeManagement from "./pages/EmployeeManagement";
import SignupPage from "./pages/SignUpPage";
import UserCreationForm from "./components/Form/UserCreationForm";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeeManagement />} />
        <Route path="create-user" element={<UserCreationForm />} />
        <Route path="leave" element={<LeaveManagement />} />
        <Route path="payroll" element={<PayrollManagement />} />
      </Route>
      <Route path="/employee" element={<EmployeeLayout />}>
        <Route path="dashboard" element={<EmployeeDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
