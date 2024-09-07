import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const {isLoggedin} = useAuth();
  if(!isLoggedin) return <LoginPage />;
  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
