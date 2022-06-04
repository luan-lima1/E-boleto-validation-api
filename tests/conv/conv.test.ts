import { conv } from "../../src/app/modules/local/conv/conv";
import { convLine, convMockData } from "../mock-data/conv-mock.test";

describe("conv Unit Test", () => {
  it("should call conv and return the correct data", async () => {
    const dataResult = await conv(convLine.line);
    expect(dataResult).toEqual(convMockData);
  });
});
