import { parseDollar } from "../src/parse/parse-dollar";

describe("parseDollar", () => {
  it("should throw an error with an invalid argument", () => {
    expect(() => parseDollar("0")).toThrowError("Invalid dollar amount: 0");
    expect(() => parseDollar(".0")).toThrowError("Invalid dollar amount: .0");
    expect(() => parseDollar(".00")).toThrowError("Invalid dollar amount: .00");
    expect(() => parseDollar("0.0")).toThrowError("Invalid dollar amount: 0.0");
  });

  it("should parse a valid dollar argument", () => {
    expect(parseDollar("0.00")).toEqual(0);
    expect(parseDollar("1.00")).toEqual(100);
  });
});
