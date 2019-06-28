const { range } = require("rxjs");
const { scan } = require("rxjs/operators");

range(0, 3).pipe(
    scan((acc, curr) => {
        console.log(`accumulation ${acc}, currentValue ${curr}`);
        return acc + curr
    }
)).subscribe(result => console.log(`result ${result}`));
