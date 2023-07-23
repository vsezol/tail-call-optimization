// works only in safari with 'use strict' :(

export const calc: (x: number) => number = (() => {
  const _calc = (acc: number, x: number): number => {
    if (x <= 1) {
      return acc;
    }

    return _calc(x / 2 + acc, x - 1);
  };

  return (x: number) => _calc(1, x);
})();

const start = performance.now();

const result = calc(123456);

const end = performance.now();

console.log("result:", result, "time:", end - start);
