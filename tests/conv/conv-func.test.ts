import {
  convBarCode,
  getValue,
  validateLine,
} from "../../src/app/modules/local/conv/function/validate-conv";
import { convMockData, convLine } from "../mock-data/conv-mock.test";

describe("convBarCode Unit Test Function", () => {
  it("should call convBarCode and return the correct barCode data", async () => {
    const dataResult = await convBarCode(convLine.line);
    expect(dataResult).toEqual(convMockData.barCode);
  });

  it("should call getValue Function and return the correct amount data", async () => {
    const dataResult = await getValue(convLine.line);
    expect(dataResult).toEqual(convMockData.amount);
  });

  it("should call validateLine and return the correct expirationDate data", async () => {
    const dataResult = await validateLine(convLine.line);
    expect(dataResult).toEqual(convMockData);
  });
});
