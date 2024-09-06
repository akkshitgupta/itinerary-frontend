import SearchBar from "./SearchBar";

export default function LandingPage(){
    return(
        <div className="w-full min-h-screen">
            <h1 className="text-xl font-900 mt-10">Welcome to the my trip planner</h1>
            <SearchBar />
        </div>
    )
}