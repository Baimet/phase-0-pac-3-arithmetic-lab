function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

function subtract(a, b) {
  return a - b;
}
console.log(subtract(1, 2));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(1, 2));

function divide(a, b) {
  return a / b;
}
console.log(divide(1, 2));

function increment(n) {
  return n + 1;
}
console.log(increment(1));

function decrement(n) {
  return n - 1;
}
console.log(decrement(1));

function makeInt(n) {
  return parseInt(n, 10);
}
console.log(makeInt("9000"));
console.log(makeInt("0"));
console.log(makeInt("string"));

function preserveDecimal(n) {
  return parseFloat(n);
}

console.log(preserveDecimal("3.14"));
console.log(preserveDecimal("0.123"));
console.log(preserveDecimal("string")); // returns NaN (Not a Number)
