import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://json-api.uz/api/project/create-user",
});
