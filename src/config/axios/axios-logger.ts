import * as AxiosLogger from "axios-logger";

export const AxiosLogs = async (request: any) =>
  AxiosLogger.requestLogger(request, {
    data: false,
    headers: false,
  });
