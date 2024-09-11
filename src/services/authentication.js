import { conf } from "../conf";
import Cookies from "js-cookie";

export const formData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  return Object.fromEntries(formData);
};

class User {
  async LoginUser(event) {
    const data = formData(event);

    const resp = await fetch(conf.apiUrl + "/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!resp.ok) throw new Error({ message: "check your credentials" });

    const respData = await resp.json();

    Cookies.set("access_token", respData.access, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });

    return respData;
  }

  async registerUser(event) {
    const data = formData(event);

    const res = await fetch(conf.apiUrl + "/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok)
      throw new Error({ message: "could not register at the moment" });

    return res;
  }

  async getDetails() {
    const token = Cookies.get("access_token");
    try {
      const resp = await fetch(conf.apiUrl + "/user/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Parse the response data
      const respData = await resp.json();

      // Check if the response was not OK (status code 200-299)
      if (!resp.ok) {
        throw new Error("Cannot fetch details at the moment");
      }

      // Log and return the fetched data
      console.log(respData);
      return respData;
    } catch (error) {
      console.error("Error during fetching details:", error.message);
      throw error; // Re-throw the error for further handling
    }
  }
}

const user = new User();

export default user;
