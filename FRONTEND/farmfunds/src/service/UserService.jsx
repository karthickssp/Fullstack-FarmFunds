import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

// const auth_token = sessionStorage.getItem("token");

// const headers = {
//   'Authorization': `Bearer ${auth_token}`,
//   'Content-Type': 'application/json'
// };

export default class UserService {
  validateUser(credentials) {
    return axios.post(BASE_URL + "/auth/login", credentials);
  }
  registerUser(user) {
    return axios.post(BASE_URL + "/auth/register", user);
  }
  getUserByEmail(email) {
    const token = sessionStorage.getItem("token");
    return axios.get(BASE_URL + "/user/email/"+ email, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  updateUser(id, user) {
    const token = sessionStorage.getItem("token");
    return axios.put(BASE_URL + "/" + id, user, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteUser(email) {
    const token = sessionStorage.getItem("token");
    return axios.delete(BASE_URL + "/user/" + email, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
