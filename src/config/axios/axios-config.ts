import axios from "axios";
import { AxiosLogs } from "./axios-logger";

export default function instanceService(url: string) {
  const returnAxios = axios.create({
    baseURL: url,
    validateStatus: (status) => {
      return status <= 300;
    },
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });
  returnAxios.interceptors.request.use(AxiosLogs);
  return returnAxios;
}
