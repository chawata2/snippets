/**
 * Generics
 */

function map<T, U>(arr: T[], callback: (arg: T) => U): U[] {
  const result: U[] = [];
  for (const elm of arr) {
    result.push(callback(elm));
  }
  return result;
}

const data = [1, 2, 3, 4, 5, 8, 13];
const result = map(data, (x) => {
  return x * 10;
});
console.log(result);
