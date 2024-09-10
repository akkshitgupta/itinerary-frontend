import { Navigate, Outlet } from "react-router-dom";
import LandingPage from "./LandingPage";
export default function PrivateRoutes() {
  let auth = { token: true };
  return auth.token ? <LandingPage /> : <Navigate to="/login" />;
}
