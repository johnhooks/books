import type { Dinero } from "dinero.js";

import type { PayrollTaxes, Rates } from "../interfaces.js";
import { calcTax } from "./calc-tax.js";

export function calcPayrollTaxes(wage: Dinero<number>, rates: Rates): PayrollTaxes<Dinero<number>> {
  const socialSecurityEmployer = calcTax(wage, rates.socialSecurityEmployer);
  const socialSecurityEmployee = calcTax(wage, rates.socialSecurityEmployee);
  const medicaidEmployer = calcTax(wage, rates.medicaidEmployer);
  const medicaidEmployee = calcTax(wage, rates.medicaidEmployee);

  return {
    socialSecurityEmployer,
    socialSecurityEmployee,
    medicaidEmployer,
    medicaidEmployee,
  };
}
