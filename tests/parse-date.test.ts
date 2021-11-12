import { parseDate } from "../src/parse/parse-date";

describe("parseDate", () => {
  it("should throw an error with an invalid argument", () => {
    expect(() => parseDate("11/11/2021")).toThrowError("Invalid date: 11/11/2021, use format yyyy/MM/dd");
  });

  it("should parse a valid date argument", () => {
    expect(parseDate("2021/12/12")).toEqual(new Date(2021, 11, 12));
  });
});
