import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Wallet,
  Menu,
  X,
} from "lucide-react";

const AdminLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const adminLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      name: "Employees Management",
      icon: Users,
      path: "/admin/employees",
    },
    {
      name: "Leave Management",
      icon: CalendarCheck,
      path: "/admin/leave",
    },
    {
      name: "Payroll Management",
      icon: Wallet,
      path: "/admin/payroll",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-gray-100">
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow z-20">
        <h1 className="text-xl font-semibold">HR Portal</h1>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-72 z-30 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">Admin</h2>
          <nav className="mt-6 space-y-2">
            {adminLinks.map(({ name, icon: Icon, path }) => (
              <Link
                key={path}
                to={path}
                onClick={closeSidebar}
                className="flex items-center gap-3 py-2.5 px-4 rounded hover:bg-gray-200 transition"
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-4 md:p-6 overflow-auto z-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
