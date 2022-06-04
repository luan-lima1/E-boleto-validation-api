import { conv } from "../../src/app/modules/local/conv/conv";

const convMockData = {
  barCode: "82890000000509100181711092228140135874171215",
  amount: "50,91",
  lineIsValid: true,
};

const convLine = {
  line: "828900000008509100181711109222814012358741712157",
};

describe("conv Unit Test", () => {
  it("should call conv and return the correct data", async () => {
    const dataResult = await conv(convLine.line);
    expect(dataResult).toEqual(convMockData);
  });
});

export { convMockData, convLine };
