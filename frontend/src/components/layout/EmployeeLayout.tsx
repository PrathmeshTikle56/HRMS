import React, { useState } from "react";
import { Menu, X, Bell, Mail, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const EmployeeLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Dashboard", "Profile", "Leaves", "Payroll", "Attendance"];

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo or Brand */}
            <div className="text-xl font-semibold text-blue-600">
              <Link to="/">Startappss Portal</Link>
            </div>

            {/* Center: Nav Links (desktop & tablet) */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={`/employee/${link.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Right: Icons & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              {/* Desktop/Tablet: Icons */}
              <div className="hidden md:flex space-x-4 text-gray-600">
                <Bell className="hover:text-blue-600 cursor-pointer" />
                <Mail className="hover:text-blue-600 cursor-pointer" />
                <Settings className="hover:text-blue-600 cursor-pointer" />
              </div>

              {/* Mobile: Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 focus:outline-none"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pb-4 pt-2 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link}
              </Link>
            ))}
            <hr />
            <div className="flex justify-evenly text-gray-600 pt-2">
              <Bell className="hover:text-blue-600 cursor-pointer" />
              <Mail className="hover:text-blue-600 cursor-pointer" />
              <Settings className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        )}
      </header>
      <main className="mt-24 p-4">
        <Outlet />
      </main>
    </>
  );
};

export default EmployeeLayout;
