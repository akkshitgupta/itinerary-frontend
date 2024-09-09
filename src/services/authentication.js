import { conf } from "../conf";

export const userLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    // make api request to validate user data
    const userData = await fetch(`${conf.apiUrl/user/login}`, data);
   
    if(!userData) return false;

    // return boolean
    return true;
}