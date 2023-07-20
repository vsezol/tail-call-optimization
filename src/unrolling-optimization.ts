export const calc = (x: number): number => {
  let acc = 1;

  while (x > 1) {
    acc = x / 2 + acc;
    x = x - 1;
  }

  return acc;
};

const start = performance.now();

const result = calc(123456);

const end = performance.now();

console.log("result:", result, "time:", end - start);
