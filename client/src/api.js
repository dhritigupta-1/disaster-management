import axios from "axios";

const api = axios.create({
  baseURL: "https://disaster-management-1-gt70.onrender.com", // Ensure port matches your backend
});

// 🔹 AUTOMATICALLY ATTACH TOKEN TO EVERY REQUEST
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach it
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function logout() {
  localStorage.removeItem("token");
}


export default api;
