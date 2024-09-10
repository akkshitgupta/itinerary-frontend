import { conf } from "../conf";

export const formData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  return Object.fromEntries(formData);
};

class User {
  first_name;
  last_name;
  email;
  password;

  async LoginUser(event) {
    const data = formData(event);
    const userData = await fetch(conf.apiUrl + "/user/profile/", {
      method: "post",
      body: data,
    });
    if (!userData) return false;
    return false;
  }

  async registerUser(event) {
    const data = formData(event);
    console.log(data);

    const userData = await fetch(conf.apiUrl + "/user/register/", {
      method: "post",
      body: data,
    });
    if (!userData) throw new Error("Could not register the user at the moment");

    return userData;
  }
}

const user = new User();

export default user;
