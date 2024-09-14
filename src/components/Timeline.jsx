import { Chrono } from "react-chrono";

export default function Timeline({ activities }) {
  return (
    <>
      {Object.keys(activities).map((Day) => {
        return (
          <>
            <h1 style={{ textAlign: "center", fontWeight: 600, fontSize: 50 }}>
              Day {Day}
            </h1>
            <Chrono
              items={activities[Day].map((activity) => {
                return {
                  title: activity.time_of_day.toUpperCase(),
                  cardTitle: activity.name,
                  cardSubtitle: `${activity.place_details.city}, ${activity.place_details.state} - ${activity.duration}`,
                  cardDetailedText: activity.description,
                };
              })}
              mode="VERTICAL_ALTERNATING"
              focusActiveItemOnLoad
              highlightCardsOnHover
              disableToolbar
            />
          </>
        );
      })}
    </>
  );
}
