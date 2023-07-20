export const calc = (x: number): number => {
  let acc = 1;

  const _calc = (): void => {
    if (x <= 1) {
      return;
    }

    acc = acc + x / 2;
    x = x - 1;

    return _calc();
  };

  while (x > 1) {
    try {
      _calc();
    } catch {}
  }

  return acc;
};

const start = performance.now();

const result = calc(123456);

const end = performance.now();

console.log("result:", result, "time:", end - start);
