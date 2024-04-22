import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/LoginComponent"));
const Layout = lazy(() => import("./components/Layout"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Layout />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
