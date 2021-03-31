const {map} = require("rxjs/operators");
const {take} = require("rxjs/operators");
const {interval} = require("rxjs");
const {BehaviorSubject} = require("rxjs");

const behaviorSubject = new BehaviorSubject('초기값');

const observerA = {
    next: x => console.log(`observerA ${x}`),
    error: e => console.error(`observerA ${e}`),
    complete: () => console.log(`observerA complete`)
}

const observerB = {
    next: x => console.log(`observerB ${x}`),
    error: e => console.error(`observerB ${e}`),
    complete: () => console.log(`observerB complete`)
}

const incrementInterval$ = interval(1000).pipe(
    take(5),
    map(x => behaviorSubject.value + 1)
);

incrementInterval$.subscribe(behaviorSubject);

behaviorSubject.subscribe(observerA);

setTimeout(() => behaviorSubject.subscribe(observerB), 3200);