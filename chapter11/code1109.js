const {Subject} = require("rxjs");

const subject = new Subject();

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

subject.error('error');
subject.subscribe(observerA);
subject.subscribe(observerB);