import Timeline from "../components/Timeline";
import { useItinerary } from "../contexts/ItineraryContext";

export default function TimelinePage() {
  const { itinerary } = useItinerary();

  return (
    <section>
      <div className="p-6 flex justify-around items-center sticky top-0 backdrop-blur-md z-20 border-2 border-slate-400 rounded-b-full">
        <div>
          <p>Start {itinerary?.start_date}</p>
          <p>End {itinerary?.end_date}</p>
        </div>
        <span className="text-4xl capitalize">{itinerary?.destination}</span>
      </div>
      <Timeline activities={itinerary.activities} />
    </section>
  );
}
