import axios from "axios";

const api = axios.create({
  baseURL: /*"http://localhost:3333"*/"https://api-planner.herokuapp.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;