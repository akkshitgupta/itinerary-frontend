export const userLogin = (event) => {
    event.preventDefault();
    const userData = new FormData(event.currentTarget);
    const data = Object.fromEntries(userData);
    // make api request to validate user data

    

    // return boolean
    return true;
}