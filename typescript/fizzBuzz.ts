function main1(input: number) {
  let result: string = "";
  for (let i = 1; i <= input; i++) {
    if (i > 1) result += " ";
    result += fizzBuzz(i);
  }
  console.log(result);
}

function main2(input: number) {
  const result = [...range(1, 100)].map((i) => fizzBuzz(i));
  console.log(result.join(" "));
}

function* range(start: number, num: number) {
  for (let i = start; i < start + num; i++) {
    yield i;
  }
}

function fizzBuzz(input: number): string {
  const fizz = "Fizz";
  const buzz = "Buzz";
  const fizzNum = 3;
  const buzzNum = 5;

  const isFizz = !(input % fizzNum);
  const isBuzz = !(input % buzzNum);

  if (isFizz && isBuzz) return `${fizz}${buzz}`;
  else if (isFizz) return fizz;
  else if (isBuzz) return buzz;
  return input.toString();
}

let input: number = 100;
main2(input);
