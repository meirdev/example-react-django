import axios from "axios";

import { postTokenRefresh } from "./client";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // process.env.API_BASE_URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await postTokenRefresh({
          refresh: localStorage.getItem("refreshToken")!,
        });
        const { access: token } = response.data;

        localStorage.setItem("accessToken", token);

        originalRequest.headers.Authorization = `Bearer ${token}`;

        return axios(originalRequest);
      } catch (error) {
        //
      }
    }

    return Promise.reject(error);
  }
);

export default api;
