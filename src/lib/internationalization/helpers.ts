export const getRussianAgeCounter = (age: number) => {
  let txt = "";
  let count = age % 100;

  if (count >= 5 && count <= 20) {
    txt = "лет";
  } else {
    count = age % 10;
    if (count === 1) {
      txt = "год";
    } else if (count >= 2 && count <= 4) {
      txt = "года";
    } else {
      txt = "лет";
    }
  }

  return txt;
};
