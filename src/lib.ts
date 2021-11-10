import type { Dinero, Transformer } from "dinero.js";
import { dinero, toFormat } from "dinero.js";
import { USD } from "@dinero.js/currencies";

export const dollars = (amount: number) => dinero({ amount, currency: USD });

export const transformer: Transformer<number> = ({ amount, currency }) =>
  `${currency.code} ${amount}`;

export const format = (value: Dinero<number>) => toFormat(value, transformer);
