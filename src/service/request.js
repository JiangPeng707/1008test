import axios from "axios";
const request = axios.create({
  baseURL: "https://gitee.com",
  timeout: 5000,
});
export default request;
