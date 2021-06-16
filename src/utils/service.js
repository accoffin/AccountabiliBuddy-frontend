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
  getGoals: async () => await axiosInstance.get("/goals"),
  getGoalDetails: async () => await axiosInstance.get("/goals/:goalId"),
  createGoal: async (form) => await axiosInstance.post("/goals/new", form),
  updateGoal: async ({ form, goalId }) =>
    await axiosInstance.post("/goals/update", { form: form, goalId: goalId }),
  removeGoal: async (goalId) =>
    await axiosInstance.post("/goals/remove", goalId),
  getActivitiesAPI: async (form) =>
    await axiosInstance.get("/activities/api", form),
  saveSelectedActivityFromApi: async (selectedActivity) =>
    await axiosInstance.post("/activities/save", selectedActivity),
  getSavedActivitiesFromAPI: async () => await axiosInstance.get("/activities"),
  completeGoal: async (goalId) =>
    await axiosInstance.post("/goals/completed", goalId),
  removeActivityFromUserActivities: async (activity) =>
    await axiosInstance.post("/activities/remove", activity),
};

export default service;
