import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

http.interceptors.request.use(
  (config) => {
    const token = "YOUR_AUTH_TOKEN";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("Javobda xato:", error);
    return Promise.reject(error);
  }
);
export default http;
