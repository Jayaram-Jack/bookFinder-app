import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { API_URL } from "../utils/constants";

// Creating an instance of Axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response; // Handle response data as needed
  },
  (error: AxiosError) => {
    console.error("API Error:", error);
    return Promise.reject(error); // Handle the error globally if needed
  }
);

export default axiosInstance;
