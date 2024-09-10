import Card from "./Card";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import user from "../services/authentication";
import { useAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      navigate("/login");
    }

    user.getDetails(token).then((res) => {
      setAuthUser(res.first_name);
    });
  }, []);

  return (
    <div className="w-full">
      <section className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl text-center font-900 py-16">
          Welcome to the my trip planner
        </h1>
        <SearchBar />

        <section className="mx-auto mt-28 w-11/12 grid md:grid-cols-3 gap-4 xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </section>
    </div>
  );
}
