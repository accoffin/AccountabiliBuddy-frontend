import axios from "axios";

// create a new instance of axios for which all the routes are pointing to the baseURL
// withCredentials allows us to convey cookie information from and to the server
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const service = {
  signup: async (userCredentials) =>
    await axiosInstance.post("/auth/signup", userCredentials),
  login: async (userCredentials) =>
    await axiosInstance.post("/auth/login", userCredentials),
  logout: async () => await axiosInstance.get("/auth/logout"),
  isAuthenticated: async () => await axiosInstance.get("/auth/isAuthenticated"),
  // getDashboardRoot: async () => await axiosInstance.get("/dashboard"),
  getGoals: async () => await axiosInstance.get("/goals"),
};

export default service;
