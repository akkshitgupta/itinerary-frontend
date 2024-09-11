import Cookies from "js-cookie";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { conf } from "../conf";

export default function Navbar() {
  const { isLoggedin, authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    setAuthUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-violet-800 text-white flex py-4 px-16 justify-between">
      {conf.companyName}
      <div>
        {authUser && <span>{authUser}</span>}
        {isLoggedin && (
          <a className="ml-16" onClick={handleLogout}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
}
