import { conf } from "../conf";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isLoggedin, authUser } = useAuth();
  return (
    <nav className="bg-violet-800 text-white flex py-4 px-6 justify-around">
      {conf.companyName}
      {isLoggedin && <button>Logout</button>}
      {authUser && <span>{authUser.first_name}</span>}
    </nav>
  );
}
