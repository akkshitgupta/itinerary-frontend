import { conf } from "../conf";
import { formData } from "./authentication";
import Cookies from "js-cookie";

export default async function handleSearch(event) {
  const token = Cookies.get("access_token");

  const data = formData(event);
  data["token"] = token;
  const res = await fetch(conf.apiUrl + "/itinerary/generate/", {
    method: "post",
    body: data,
  });

  return res;
}
