import { conf } from "../conf";
import { formData } from "./authentication";

export default async function handleSearch(event) {
  const data = formData(event);
  const res = await fetch(conf.apiUrl + "/itinerary/generate/", {
    method: "post",
    body: data,
  });

  return res;
}
