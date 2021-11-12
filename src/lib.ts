import type { Dinero, Transformer } from "dinero.js";
import { add, dinero, multiply, subtract, toFormat } from "dinero.js";
import currencies from "@dinero.js/currencies";

const { USD } = currencies;

export const dollars = (amount: number) => dinero({ amount, currency: USD });

export const format = createFormatter(({ amount, currency }) => `${currency.code} ${amount.toFixed(2)}`);

export const negate = (value: Dinero<number>) => multiply(value, { amount: -1 });

export const addMany = (addends: Array<Dinero<number>>) => addends.reduce(add);

export const subtractMany = (subtrahends: Array<Dinero<number>>) => subtrahends.reduce(subtract);

// This function lets you pass a transformer and rounding options.
// It returns a function that takes a Dinero object and applies
// the closured transformer.
// https://v2.dinerojs.com/docs/core-concepts/formatting
function createFormatter(transformer: Transformer<number>) {
  return function formatter(dineroObject: Dinero<number>) {
    return toFormat(dineroObject, transformer);
  };
}
