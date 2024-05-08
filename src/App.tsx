import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

const Login = lazy(() => import("./components/LoginComponent"));
const LayoutComponent = lazy(() => import("./components/LayoutComponent"));

interface RouteOptions {
  exact: boolean;
}

const App: React.FC = () => {
  const options: RouteOptions = {
    exact: true,
  };

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    lng: "es", // Establecer el idioma predeterminado aquí
    interpolation: {
      escapeValue: false,
    },
  });

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
