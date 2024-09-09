import { useAuth } from "../contexts/AuthContext";
import SearchBar from "./SearchBar";

export default function LandingPage() {
    const {authUser} = useAuth();
    return (
        <div className="w-full min-h-screen bg-slate-200">
            <span>{authUser}</span>
            <h1 className="text-xl font-900 pt-10">Welcome to the my trip planner</h1>
            <SearchBar />
        </div>
    )
}