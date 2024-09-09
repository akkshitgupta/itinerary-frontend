import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import { useAuth } from "./contexts/AuthContext";


function App() {
  const {isLoggedin} = useAuth();
  const navigate = useNavigate();
  
  if(!isLoggedin){
    navigate("/login");
  }
  return (
    <>
    <LandingPage />
    </>
  )
}

export default App
