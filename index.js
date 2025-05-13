function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  n = BigInt(n)
  let result = BigInt(1);
  for(let i = n; i >= 1; i--) {
    result *= i;
  }
  return result.toString();
}

module.exports = factorial;