export const getRussianYearCounter = (age: number): string => {
  const count = age % 100;
  if (count >= 5 && count <= 20) return "лет";

  switch (age % 10) {
    case 1:
      return "год";
    case 2:
    case 3:
    case 4:
      return "года";
    default:
      return "лет";
  }
};
