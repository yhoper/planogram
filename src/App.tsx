import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Login = lazy(() => import("./components/LoginComponent"));
const Layout = lazy(() => import("./components/Layout"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
