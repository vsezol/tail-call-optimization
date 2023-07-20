# Tail Call Optimization for TS

## From book "You Don't Know JS: ES6 and Beyond"

### Results

| File name                  | Result       | Time, ms           |
| -------------------------- | ------------ | ------------------ |
| no-optimization.ts         | Range Error  | -                  |
| es6-optimization.ts        | Range Error  | -                  |
| trampoline-optimization.ts | 3810376848.5 | 10.02674999833107  |
| unrolling-optimization.ts  | 3810376848.5 | 0.9018749892711639 |
| skip-error-optimization.ts | 3810376848.5 | 12.77012500166893  |
