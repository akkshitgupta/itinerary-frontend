import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { conf } from "../conf";
import { useItinerary } from "../contexts/ItineraryContext";
import handleSearch from "../services/search";

const tags = [
  "Attractions",
  "Tourist places",
  "Hidden Gems",
  "Herritage",
  "Shopping",
  "Cultural",
  "Landmarks",
  "OutdoorsWine",
  "Adventure",
  "Arts",
  "Culture",
  "Architecture",
  "Photography Spots",
];

export default function SearchBar() {
  const { setItinerary } = useItinerary();
  const navigate = useNavigate();
  const [destination, setdestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [selectedTag, setSelectedTag] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (destination.length > 2) {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const timer = setTimeout(async () => {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${destination}&apiKey=${conf.geoapifyApiKey}`
          );
          const data = await response.json();

          if (data.features && Array.isArray(data.features)) {
            const newSuggestions = data.features.map(
              (feature) => feature.properties.formatted
            );
            setSuggestions(newSuggestions);
          } else {
            console.log("No results found");
            setSuggestions([]);
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
      }, 150);

      setDebounceTimer(timer);
    } else {
      setSuggestions([]);
    }
  }, [destination]);

  const submitHandler = (e) => {
    setLoader(true);
    handleSearch(e, selectedTag)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setItinerary(data.data);
        setLoader(false);
        navigate("/timeline");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return loader ? (
    <div> Loading.....</div>
  ) : (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="grid grid-cols-5 gap-6 mx-auto mt-8 w-4/5">
      <input
        type="text"
        name="destination"
        value={destination}
        onChange={(e) => setdestination(e.target.value)}
        list="suggestions"
        required
        placeholder="Search destinations..."
        className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent col-span-5"
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option value={suggestion} key={index} />
        ))}
      </datalist>

      <div
        id="date-range-picker"
        className="flex flex-col md:flex-row items-center justify-center gap-3 col-span-5">
        <div className="relative w-full">
          <label htmlFor="startDate" className="my-2 text-center">
            Start Date
            <div className="absolute inset-y-11 start-0 flex items-center justify-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              required
              id="datepicker-range-start"
              name="start_date"
              type="date"
              className="border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5"
            />
          </label>
        </div>
        <div className="relative w-full">
          <label htmlFor="endDate" className="my-2 text-center">
            End Date
            <div className="absolute inset-y-11 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              required
              id="datepicker-range-end"
              name="end_date"
              type="date"
              className="border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-10 p-2.5"
            />
          </label>
        </div>
      </div>

      <div className="col-span-5 flex flex-wrap gap-3 text-center my-3">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className={`px-4 py-2 rounded-full border ${
                selectedTag.includes(tag)
                  ? "ring-1 ring-green-400"
                  : "ring-black"
              }`}>
              <label htmlFor={tag}>
                {tag}
                <input
                  type="checkbox"
                  name={tag}
                  id={tag}
                  className="appearance-none"
                  onChange={(e) =>
                    setSelectedTag(
                      e.target.checked
                        ? [...selectedTag, e.target.name]
                        : selectedTag.filter((t) => t !== e.target.name)
                    )
                  }
                />
              </label>
            </span>
          );
        })}
      </div>

      <button
        type="submit"
        className="px-4 py-2 ml-2 bg-green-900 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 col-span-3">
        Search
      </button>
    </form>
  );
}
