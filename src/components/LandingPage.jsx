import Card from "./Card";
import SearchBar from "./SearchBar";

export default function LandingPage() {
  return (
    <div className="w-full lg:h-screen">
      <section className="h-2/5 flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl text-center font-900 pb-16">
          Welcome to the my trip planner
        </h1>
        <SearchBar />
      </section>
      <section className="mx-auto mt-10 w-11/12 grid md:grid-cols-3 gap-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
