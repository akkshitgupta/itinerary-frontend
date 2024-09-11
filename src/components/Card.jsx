export default function Card({ activity }) {
  const image = activity?.place_images[0].medium;
  const validJsonString = image.replace(/'/g, '"');
  const img = JSON.parse(validJsonString);

  return (
    <div className="relative flex flex-col bg-white shadow-md border border-slate-200 rounded-lg w-full">
      <div className="relative max-h-fit m-2.5 overflow-hidden text-white rounded-md">
        <img src={img.url} alt="card-image" className="w-full h-40" />
      </div>
      <div className="p-4">
        <div className="flex items-start mb-2">
          <div>
            <h6 className="text-slate-800 text-base font-semibold">
              {activity.place_details.name},
            </h6>
            <h6 className="text-sm font-semibold text-slate-800">
              {activity.place_details.city}
            </h6>
          </div>
          <div className="flex items-center text-xs gap-0 5 ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-500">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"></path>
            </svg>
            <span className="text-slate-600 ml-1">
              {activity.place_details.rating}
            </span>
          </div>
        </div>

        <p className="text-slate-600 mt-4 leading-normal font-light truncate">
          {activity?.description}
        </p>
      </div>

      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="w-full rounded-md bg-violet-800 py-2 px-4 text-center text-sm text-white shadow-md hover:shadow-lg hover:bg-slate-700"
          type="button">
          Explore
        </button>
      </div>
    </div>
  );
}
