import parse from "date-fns/parse";

export function parseDate(raw: string): Date {
  let date: Date;

  try {
    date = parse(raw.trim(), "yyyy/MM/dd", new Date());
  } catch (_error) {
    throw new Error(`Invalid date: ${raw.trim()}, use format yyyy/MM/dd`);
  }

  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${raw.trim()}, use format yyyy/MM/dd`);
  }

  return date;
}
