# Statistics.ts

Statistics is a typescript module for calculating statistics on a list of numbers.

## Installation

```bash
npm i statistics.ts
```

## Examples

```js
import { average, median, mode, range } from 'statistics.ts';

// generate an array of random numbers between 0 and 100.
const arr = [
  64, 19, 31, 40, 16, 59,
  23, 16, 64, 74, 45, 56,
  79, 65, 38
];

average(arr); // 45.93333333333333
median(arr);  // 45
mode(arr);    // [ 16, 64 ]
range(arr);   // 63
```
