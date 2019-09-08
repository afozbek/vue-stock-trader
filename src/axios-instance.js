import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://vuejs-http-a586d.firebaseio.com"
});

export default axiosInstance;
