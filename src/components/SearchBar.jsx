import React, { useState, useEffect } from "react";
import handleSearch from "../services/search";
import { conf } from "../conf";

const tags = [
  "Attractions",
  "Tourist places",
  "Hidden Gems",
  "Herritage",
  "Shopping",
  "Cultural ",
  "Landmarks ",
  "OutdoorsWine",
  "Adventure",
  "Arts",
  "Culture",
  "Architecture",
  "Photography Spots",
];

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [selectedTag, setSelectedTag] = useState([]);

  useEffect(() => {
    if (location.length > 2) {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const timer = setTimeout(async () => {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=${conf.geoapifyApiKey}`
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
  }, [location]);

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className="grid grid-cols-5 gap-6 mx-auto mt-8 w-4/5">
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        list="suggestions"
        placeholder="Search locations..."
        className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent col-span-5"
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option value={suggestion} key={index} />
        ))}
      </datalist>

      <div
        id="date-range-picker"
        className="flex items-center justify-center col-span-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-violet-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <label htmlFor="startDate" className="my-2 text-center">
            Start Date
          </label>
          <input
            id="datepicker-range-start"
            name="startDate"
            type="date"
            className="border border-violet-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-10 p-2.5"
          />
        </div>
        <span className="mx-4 text-gray-500 col-span-1">to</span>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-violet-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <label htmlFor="endDate" className="my-2 text-center">
            End Date
          </label>
          <input
            id="datepicker-range-end"
            name="endDate"
            type="date"
            className="border border-violet-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-10 p-2.5"
          />
        </div>
      </div>

      <div className="col-span-5 flex flex-wrap gap-3 text-center my-3">
        {tags.map((tag, index) => {
          return (
            <span key={index}>
              <label
                htmlFor={tag}
                className={
                  selectedTag.includes(tag)
                    ? `border-violet-400 ring-2 ring-violet-400 flex-grow`
                    : `px-4 py-2 rounded-full border border-black`
                }>
                {tag}
                <input
                  type="checkbox"
                  name={tag}
                  id={tag}
                  className="appearance-none"
                  onChange={(e) =>
                    setSelectedTag([...selectedTag, e.target.value])
                  }
                />
              </label>
            </span>
          );
        })}
      </div>

      <button
        type="submit"
        className="px-4 py-2 ml-2 bg-violet-900 text-white rounded-full hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 col-span-3">
        Search
      </button>
    </form>
  );
}
