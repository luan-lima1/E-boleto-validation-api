import {
  bankToBarCode,
  exDate,
  getValue,
} from "../../src/app/modules/local/bank/function/validate-bank";

import { bankLine, bankMockData } from "../mock-data/bank-mock.test";

describe("validate-bank functions Unit Test", () => {
  it("should call bankToBarCode and return the correct barCode data", async () => {
    const dataResult = await bankToBarCode(bankLine.line);
    expect(dataResult).toEqual(bankMockData.barCode);
  });

  it("should call getValue and return the correct amount data", async () => {
    const dataResult = await getValue(bankLine.line);
    expect(dataResult).toEqual(bankMockData.amount);
  });

  it("should call exDate and return the correct date", async () => {
    const dataResult = await exDate(bankLine.line);
    expect(dataResult).toEqual(bankMockData.expirationDate);
  });
});
