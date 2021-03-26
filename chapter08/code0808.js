const {tap} = require("rxjs/operators");
const {take} = require("rxjs/operators");
const {interval} = require("rxjs");

interval(100).pipe(
    take(10),
    tap(x => console.log(`interval tap ${x}`))
).toPromise().then(
    value => console.log(`Promise 결과 ${value}`),
    reason => console.error(`Promise Error ${reason}`)
);