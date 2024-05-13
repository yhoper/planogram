import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import esTranslation from "./shared/i18n/translations/es.json";
import enTranslation from "./shared/i18n/translations/en.json";
import koTranslation from "./shared/i18n/translations/ko.json";

const Login = lazy(() => import("./components/LoginComponent"));
const Dashboard = lazy(() => import("./pages/Dashboard/"));

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
      ko: { translation: koTranslation },
    },
    lng: "es",
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
            <Route {...options} path="/lg/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
