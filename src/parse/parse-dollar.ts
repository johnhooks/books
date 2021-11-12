const twoDecimalPlaceNumberRegex = /(\d+).\d{2}/;

export function parseDollar(raw: string): number {
  const match = twoDecimalPlaceNumberRegex.exec(raw);

  if (!match) {
    throw new Error(`Invalid dollar amount: ${raw.trim()}`);
  }

  const [, rawDollars, rawCents] = match;
  const dollars = parseInt(rawDollars);
  const cents = parseInt(rawCents);

  if (isNaN(dollars) || isNaN(cents)) {
    throw new Error(`Invalid dollar amount: ${raw.trim()}`);
  }

  return dollars * 100 + cents;
}
