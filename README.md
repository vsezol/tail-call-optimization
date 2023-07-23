# Tail Call Optimization for TS

## From book "You Don't Know JS: ES6 and Beyond"

### Results

| File name                  | Result       | Av. Time, ms | Engine |
| -------------------------- | ------------ | ------------ | ------ |
| no-optimization.ts         | Range Error  | -            | any    |
| webkit-optimization.ts     | 3810376848.5 | 5.4          | WebKit |
| trampoline-optimization.ts | 3810376848.5 | 12.8         | any    |
| unrolling-optimization.ts  | 3810376848.5 | 2.8          | any    |
| skip-error-optimization.ts | 3810376848.5 | 7.6          | any    |

The execution time is unstable:
webkit-optimization.ts, skip-error-optimization.ts

The execution time is predictable and stable:
trampoline-optimization.ts, unrolling-optimization.ts
