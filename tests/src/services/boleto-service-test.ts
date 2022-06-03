/* eslint-disable no-undef */
import axios from "axios";
import BoletoService from "../../../src/app/modules/boleto/services/boleto-service";

jest.mock("pino");

jest.mock("../../../src/config/load", () => () => ({
  logger: {
    enabled: "true",
    loggerInfo: 0,
  },
  lambda: {
    url: "url-mock",
  },
}));

describe("BoletoService", () => {
  const getLine = new BoletoService();

  it("should return success", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ bank: {} });

    const response = await getLine.serv(
      "828900000008509100181711109222814012358741712157"
    );
    expect(response).toEqual({ bank: {} });
  });
});
