import { multiply } from "dinero.js";

import { dollars, format } from "./lib.js";
import { taxRates } from "./rates.js";

const value = dollars(675000);
const ss = multiply(value, taxRates[2021].socialSecurityEmployer);
console.log(format(ss));
