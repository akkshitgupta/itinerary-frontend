import { Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Cookies from "js-cookie";

export default function PrivateRoutes() {
  const token = Cookies.get("access_token");
  return token ? <LandingPage /> : <Navigate to="/login" />;
}
