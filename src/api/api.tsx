import axios from "axios";

const api = axios.create({
  baseURL: "https://apibts.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
