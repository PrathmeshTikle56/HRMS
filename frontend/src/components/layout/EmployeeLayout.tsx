import React, { use, useState } from "react";
import { Menu, X, Bell, Mail, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar container */}
        <div className="flex items-center justify-center h-20">
          {/* Left: Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Nav Links (desktop only) */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Right: Icon Buttons */}
          <div className="hidden md:flex items-center space-x-4 text-gray-700">
            <button className="hover:text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-amber-300">
              <Settings size={20} />
            </button>
            <button className="hover:text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-amber-300">
              <Bell size={20} />
            </button>
            <button className="hover:text-blue-600 w-10 h-10 flex items-center justify-center rounded-full bg-amber-300">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 pt-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className="flex justify-end space-x-4 mt-4">
            <Settings size={20} className="text-gray-700 hover:text-blue-600" />
            <Bell size={20} className="text-gray-700 hover:text-blue-600" />
            <Mail size={20} className="text-gray-700 hover:text-blue-600" />
          </div>
        </div>
      )}
    </header>
  );
};

export default EmployeeLayout;
