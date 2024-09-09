import { conf } from "../conf";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { isLoggedin, authUser } = useAuth();
    return (
         <nav className="bg-violet-200 flex py-4 px-6 justify-around">
      {conf.companyName}
      {isLoggedin && <button>Logout</button>}
      <span>{authUser || 'undefined'}</span>
    </nav>
    )
}