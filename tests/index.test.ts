import { bankOrConv } from "../src/app/modules/local/bank-or-conv";
import { bankMockData } from "./mock-data/bank-mock.test";
import { convMockData } from "./mock-data/conv-mock.test";

const dataLine = {
  bankLine: "26091408099776913423632700000006190050000019446",
  convLine: "828900000008509100181711109222814012358741712157",
};
describe("bankOrConv Unit test", () => {
  it("should call the bankOrConv and return the especified Bank data", async () => {
    const dataResult = await bankOrConv(dataLine.bankLine);
    expect(dataResult).toEqual(bankMockData);
  });
  it("should call the bankOrConv and return the especified Conv data", async () => {
    const dataResult = await bankOrConv(dataLine.convLine);
    expect(dataResult).toEqual(convMockData);
  });
});
