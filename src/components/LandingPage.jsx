import SearchBar from "./SearchBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import user from "../services/authentication";
import { useAuth } from "../contexts/AuthContext";
import data from "../../a.json";
import Modal from "./Modal";

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
