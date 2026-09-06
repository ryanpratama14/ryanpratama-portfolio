export const pluralizeRu = (count: number, one: string, few: string, many: string) => {
  if (!Number.isInteger(count)) return many;

  const absolute = Math.abs(count);
  const mod100 = absolute % 100;
  const mod10 = absolute % 10;

  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
};
