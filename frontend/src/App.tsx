import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AppRoutes from "./AppRouter";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
