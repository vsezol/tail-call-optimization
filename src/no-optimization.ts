export const calc = (x: number): number => {
  if (x <= 1) {
    return 1;
  }

  return x / 2 + calc(x - 1);
};

const start = performance.now();

const result = calc(123456);

const end = performance.now();

console.log("result:", result, "time:", end - start);
