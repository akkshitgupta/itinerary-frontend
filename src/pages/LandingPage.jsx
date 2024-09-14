import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../contexts/AuthContext";
import user from "../services/authentication";

export default function LandingPage() {
  const navigate = useNavigate();
  const { setAuthUser, setIsLoggedin } = useAuth();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) navigate("/login");

    user.getDetails(token).then((res) => {
      setAuthUser(res.first_name);
      setIsLoggedin(true);
    });
  }, []);

  return (
    <div className="w-full h-[80dvh]">
      <section className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl text-center font-900 py-12">
          Welcome to the my trip planner
        </h1>
        <SearchBar />
      </section>
    </div>
  );
}
