import { conf } from "../conf";
import { formData } from "./authentication";
import Cookies from "js-cookie";

export default async function handleSearch(event) {
  const token = Cookies.get("access_token");
  const data = formData(event);
  console.log(data);

  const res = await fetch(conf.apiUrl + "/itinerary/generate/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  const respData = await res.json();

  console.log(respData);

  if (!respData.ok)
    throw new Error({ message: "Cannot proceed with the query. try again" });

  return respData;
}
