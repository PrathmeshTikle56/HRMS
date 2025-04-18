import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AppRoutes from "./AppRouter";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
