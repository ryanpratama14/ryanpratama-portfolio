export const getRussianAgeCounter = (age: number) => {
  let counter = "";
  let count = age % 100;

  if (count >= 5 && count <= 20) {
    counter = "лет";
  } else {
    count = age % 10;
    if (count === 1) {
      counter = "год";
    } else if (count >= 2 && count <= 4) {
      counter = "года";
    } else {
      counter = "лет";
    }
  }

  return counter;
};
