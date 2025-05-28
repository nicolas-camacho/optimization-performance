const numbers = Array.from({ length: 10_000 }, () =>
  Math.floor(Math.random() * 10000),
);

function PerformFunctional(data) {
  const result = data
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
  return result;
}

function PerformImperative(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result += data[i];
    }
  }
  return result;
}

Deno.bench({
  name: "Functional",
  fn: () => PerformFunctional(numbers),
});

Deno.bench({
  name: "Imperative",
  baseline: true,
  fn: () => PerformImperative(numbers),
});

export { PerformFunctional, PerformImperative };
