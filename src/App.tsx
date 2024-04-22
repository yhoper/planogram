import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Login = lazy(() => import("./components/LoginComponent"));
const Layout = lazy(() => import("./components/Layout"));

interface RouteOptions {
  exact: boolean;
}

const App: React.FC = () => {
  const options: RouteOptions = {
    exact: true,
  };

  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router>
          <Routes>
            <Route path="/lg/" element={<Login />} {...options} />
            <Route path="/lg/dashboard" element={<Layout />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
