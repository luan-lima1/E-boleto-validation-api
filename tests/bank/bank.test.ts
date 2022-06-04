import { bank } from "../../src/app/modules/local/bank/bank";
import { bankLine, bankMockData } from "../mock-data/bank-mock.test";

describe("bank Unit Test", () => {
  it("should call bank and return the correct data", async () => {
    const resultData = await bank(bankLine.line);
    expect(resultData).toEqual(bankMockData);
  });
});
