export const checkTailCallOptimizationEnabled = (): boolean => {
  const test = (x: number): number => (x < 5e5 ? test(x + 1) : x);

  try {
    test(1);

    return true;
  } catch {
    return false;
  }
};
