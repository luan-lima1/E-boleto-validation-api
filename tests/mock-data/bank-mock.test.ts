import { bank } from "../../src/app/modules/local/bank/bank";

const bankMockData = {
  barCode: "26091900500000194461408097769134233270000000",
  expirationDate: "03/06/2022",
  amount: "194,46",
  lineIsValid: true,
};

const bankLine = {
  line: "26091408099776913423632700000006190050000019446",
};

describe("bank Unit Test", () => {
  it("should call bank and return the correct data", async () => {
    const dataResult = await bank(bankLine.line);
    expect(dataResult).toEqual(bankMockData);
  });
});

export { bankMockData, bankLine };
