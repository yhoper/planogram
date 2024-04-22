import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Login = lazy(() => import("./components/LoginComponent"));
const LayoutComponent = lazy(() => import("./components/LayoutComponent"));

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
            <Route {...options} path="/lg/" element={<Login />} />
            <Route
              {...options}
              path="/lg/dashboard"
              element={<LayoutComponent />}
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
