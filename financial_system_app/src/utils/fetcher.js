
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {AuthActions} from "@/utils/auth/utils";
import {BASE_URL} from "@/hooks/api";

// Extract necessary functions from the AuthActions utility.
const { handleJWTRefresh, storeToken, getToken } = AuthActions();

// Create an Axios instance with the base URL.
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken("access")}`,
  },
});

// Add a response interceptor to handle 401 errors.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const { data } = await handleJWTRefresh();
        const { access } = data.access;

        storeToken(access, "access");

        if (error.config) {
          error.config.headers["Authorization"] = `Bearer ${access}`;
          return api.request(error.config);
        }
      } catch (err) {
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);

export const fetcher = (url, args) => {
  return api.get(url, args).then((response) => response.data);
};