import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "http://localhost/internshala/src/php",
});
export default axiosInstance;
