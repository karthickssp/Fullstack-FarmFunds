import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

export default class LoanService {
  getAllSchema() {
    return axios.get(BASE_URL + "/loanschema/allschema");
  }

  getSchemaById(id){
    return axios.get(BASE_URL+"/loanschema/loanid/"+id);
  }

  
  validateUser(credentials) {
    return axios.post(BASE_URL + "/auth/login", credentials);
  }
  registerUser(user) {
    return axios.post(BASE_URL + "/auth/register", user);
  }
  getUserByEmail(email) {
    const token = sessionStorage.getItem("token");
    return axios.get(BASE_URL + "/user/email/" + email, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
