import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import LayoutComponent from "./components/Layout";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/dashboard" element={<LayoutComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
