export default function SearchBar(){
    return (
        <div className="flex-row flex justify-center items-center mt-8 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>

      </div>
    )
}