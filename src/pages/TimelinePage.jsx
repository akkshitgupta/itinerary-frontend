import Timeline from "../components/Timeline";
import { useItinerary } from "../contexts/ItineraryContext";
import { formatDate } from "../services/dateFormat";

export default function TimelinePage() {
  const { itinerary } = useItinerary();

  return (
    <section>
      <div className="p-6 text-center shadow-lg shadow-teal-100 z-20 border-2 border-teal-400 rounded-b-full">
        <div>
          <p>Start {formatDate(itinerary?.start_date)}</p>
          <p>End {formatDate(itinerary?.end_date)}</p>
        </div>
        <span className="text-4xl capitalize">{itinerary?.destination}</span>
      </div>
      <Timeline activities={itinerary?.activities} />
    </section>
  );
}
