/**
 * 関数型の部分型関係
 */
type U = (arg: number) => number;
type B = (left: number, right: number) => number;

const double: U = (arg) => arg * 2;
const add: B = (left, right) => left + right;

/**
 * これはOK
 * 返り値は同じ型なので問題なく、
 * Bの引数はUの引数の部分型なので、UはBの部分型
 * binは引数を2つとるが、doubleはUなので２つ目の引数は無視される
 */
const bin: B = double;

/**
 * これはダメ
 * Uの引数がBの引数の部分型じゃないので、BはUの部分型とならない
 */
// const una: U = add;
