import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import Layout from "./Layout.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import LandingPage from "./components/LandingPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<LandingPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
