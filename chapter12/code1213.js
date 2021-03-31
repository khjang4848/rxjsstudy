const {refCount} = require("rxjs/operators");
const {publish} = require("rxjs/operators");
const {tap} = require("rxjs/operators");
const {take} = require("rxjs/operators");
const {interval} = require("rxjs");

const testSource$ = interval(500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`)),
    publish(),
    refCount()
);

testSource$.subscribe(x => console.log(`a : ${x}`));
testSource$.subscribe(x => console.log(`b : ${x}`));

setTimeout(() => {
    console.log('timeout');
    testSource$.subscribe(x => console.log(`c : ${x}`));
}, 3000);
