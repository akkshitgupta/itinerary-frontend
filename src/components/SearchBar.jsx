const cities = [
  "Ahmedabad",
  "Agra",
  "Ajmer",
  "Alwar",
  "Bangalore",
  "Bharatpur",
  "Bhilwara",
  "Bhopal",
  "Bhubaneswar",
  "Bikaner",
  "Chennai",
  "Chittorgarh",
  "Coimbatore",
  "Darjeeling",
  "Dehradun",
  "Delhi",
  "Gangtok",
  "Gwalior",
  "Guwahati",
  "Haridwar",
  "Hyderabad",
  "Indore",
  "Jaipur",
  "Jhansi",
  "Jodhpur",
  "Kanpur",
  "Kota",
  "Kolkata",
  "Kullu",
  "Lucknow",
  "Ludhiana",
  "Manali",
  "Mathura",
  "Mumbai",
  "Mussoorie",
  "Nagpur",
  "Nainital",
  "Patna",
  "Pune",
  "Raipur",
  "Ranchi",
  "Rishikesh",
  "Shimla",
  "Srinagar",
  "Udaipur",
  "Vadodara",
  "Varanasi",
];

export default function SearchBar(){
    return (
        <div className="flex justify-center items-center mt-8 w-full">
          <input
            type="text"
            list="cities"
            placeholder="Search..."
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <datalist id="cities">
            {cities.map(city => <option value={city}>{city}</option>)}
          </datalist>
          <button
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>

      </div>
    )
}