type Input<T> = () => Input<T> | T;

const isInput = <T>(value: T | Input<T>): value is Input<T> =>
  typeof value === "function";

function trampoline<T>(input: T | Input<T>): T {
  let output: T | Input<T> = isInput(input) ? input() : input;

  while (isInput(output)) {
    output = output();
  }

  return output;
}

export const calc: (x: number) => number = (() => {
  const _calc = (acc: number, x: number) => {
    if (x <= 1) {
      return acc;
    }

    return () => _calc(x / 2 + acc, x - 1);
  };

  return (x: number): number => trampoline<number>(_calc(1, x));
})();

const start = performance.now();

const result = calc(123456);

const end = performance.now();

console.log("result:", result, "time:", end - start);
