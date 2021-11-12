import type { Rates } from "./interfaces.js";

export const taxRates: Record<number, Rates> = {
  2021: {
    socialSecurityEmployer: { amount: 62, scale: 3 },
    socialSecurityEmployee: { amount: 62, scale: 3 },
    medicaidEmployer: { amount: 145, scale: 4 },
    medicaidEmployee: { amount: 145, scale: 4 },
  },
};
