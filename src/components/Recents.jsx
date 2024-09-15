import Card from "./Card";

const data = [
  {
    user: 14,
    start_date: "2024-09-14",
    end_date: "2024-09-18",
    total_days: 4,
    destination: "pune",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-o/14/3d/74/4f/img20180715130235-largejpg.jpg",
    name: "pune Itinerary for 4 days",
  },
  {
    user: 14,
    start_date: "2024-09-14",
    end_date: "2024-09-16",
    total_days: 2,
    destination: "pune",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-o/09/35/1d/e1/shaniwar-wada.jpg",
    name: "pune Itinerary for 2 days",
  },
  {
    user: 14,
    start_date: "2024-09-14",
    end_date: "2024-09-17",
    total_days: 3,
    destination: "pune",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-o/09/35/1d/e1/shaniwar-wada.jpg",
    name: "pune Itinerary for 3 days",
  },
  {
    user: 14,
    start_date: "2024-09-14",
    end_date: "2024-09-18",
    total_days: 4,
    destination: "pune",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-o/14/3d/74/4f/img20180715130235-largejpg.jpg",
    name: "pune Itinerary for 4 days",
  },
  {
    user: 14,
    start_date: "2024-09-14",
    end_date: "2024-09-18",
    total_days: 4,
    destination: "pune",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-o/14/3d/74/4f/img20180715130235-largejpg.jpg",
    name: "pune Itinerary for 4 days",
  },
];

export default function Recents() {
  return (
    <div className="mt-40 p-2 border-2  shadow-md">
      <h3 className="text-center font-medium text-2xl">Your recent dreams</h3>
      {data.map((itinerary, ind) => {
        return <Card key={ind} itinerary={itinerary} />;
      })}
    </div>
  );
}
