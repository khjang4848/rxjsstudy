const {timer, range} = require("rxjs");
const {map, mergeMap} = require("rxjs/operators");

const request = [
    timer(Math.floor(Math.random() * 2000)).pipe(map(() => "req1")),
    timer(Math.floor(Math.random() * 1000)).pipe(map(() => "req2")),
    timer(Math.floor(Math.random() * 1500)).pipe(map(() => "req3")),
];
//Version #1
/*
range(0, 3).subscribe(x =>
    request[x].subscribe(req => console.log(`response from ${req}`))
);
 */

range(0, 3).pipe(
    mergeMap(x => request[x])
).subscribe(req => console.log(`response from ${req}`));