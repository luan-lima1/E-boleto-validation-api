import config from "../../../../config/load";
import instanceService from "../../../../config/axios/axios-config";
import { IBoletoService, BoletoResponse } from "../interfaces/interface";

const configuration = config();

const { url } = configuration.lambda;

export default class BoletoService implements IBoletoService {
  async serv(line: string): Promise<BoletoResponse> {
    const axiosInstance = instanceService(url);

    try {
      const { data } = await axiosInstance.get(`/banco/?line=${line}`);
      return data;
    } catch (err) {
      throw err;
    }
  }
}
