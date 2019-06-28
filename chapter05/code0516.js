const {timer, interval, range} = require("rxjs");
const {map, take, concatMap} = require("rxjs/operators");

const request = [
    timer(2000).pipe(map(() => 'req1')),
    timer(1000).pipe(map(() => 'req2')),
    timer(1500).pipe(map(() => 'req3'))
];

interval(1000).pipe(
    take(5)
).subscribe(x => console.log(`${x + 1} sec`));

range(0, 3).pipe(
    concatMap(x => request[x])
).subscribe(req => console.log(`response from ${req}`));