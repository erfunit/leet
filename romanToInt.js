const chars = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
  ['IV', 4],
  ['IX', 9],
  ['XL', 40],
  ['XC', 90],
  ['CD', 400],
  ['CM', 900],
]);

var romanToInt = function (s) {
  let result = 0;
  let i = 0;

  while (i < s.length) {
    const car = s[i];
    const nextCar = s[i + 1];
    const combinedChars = car + nextCar;

    if (chars.has(combinedChars)) {
      result += chars.get(combinedChars);
      i += 2;
    } else {
      result += chars.get(car);
      i++;
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
