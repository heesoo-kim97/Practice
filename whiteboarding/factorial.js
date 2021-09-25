function factorial(integer) {
  let total = 1;
  for (let i = 1; i <= integer; i++) {
    total = i * total;
  }
  return total;
}
