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
    console.log(data);

    const resp = await fetch(conf.apiUrl + "/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log({ resp });

    if (!resp.ok) throw new Error({ message: "check your credentials" });

    Cookies.set("access_token", resp.access, { expires: 7, secure: true });

    return resp;
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
    const resp = await fetch(conf.apiUrl + "/user/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error({ message: "cannot fetch details as of now" });

    return resp;
  }
}

const user = new User();

export default user;
