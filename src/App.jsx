import LandingPage from "./components/LandingPage"
import { conf } from "./conf";
import LoginPage from "./components/LoginPage";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const {isLoggedin} = useAuth();
  if(!isLoggedin) return <LoginPage />;
  return (
    <>
      <nav className="bg-gray-800">
        <span className="pb-4 text-xl font-semibold underline">
              {conf.companyName}
        </span>
      </nav>
      <LandingPage />
    </>
  )
}

export default App
