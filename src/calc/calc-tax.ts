import type { Dinero } from "dinero.js";
import { multiply, trimScale } from "dinero.js";

import type { Tax } from "../interfaces.js";

export function calcTax(value: Dinero<number>, tax: Tax, trim?: boolean): Dinero<number> {
  const calculated = multiply(value, tax);
  return trim ? trimScale(calculated) : calculated;
}
