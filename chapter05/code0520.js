const { interval } = require("rxjs");
const { take, scan, pluck} = require("rxjs/operators");

const source$ = interval(500).pipe(
    take(7),
    scan((acc, curr) => {
        const tempA = acc.a;
        acc.a = acc.b;
        acc.b = tempA + acc.b;
        return acc;
    }, {a : 1, b : 0}),
    pluck('a')
);

source$.subscribe(result => console.log(`result1 ${result}`));

setTimeout(() => source$.subscribe(
    result => console.log(`result2 ${result}`)), 3100);
