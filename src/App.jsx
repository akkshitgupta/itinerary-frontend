import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";

function App() {
  const { isLoggedin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin]);
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
