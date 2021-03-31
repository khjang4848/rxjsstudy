const {multicast} = require("rxjs/operators");
const {Subject} = require("rxjs");
const {interval} = require("rxjs");
const {take} = require("rxjs/operators");

const subject = new Subject();
const sourceObservable$ = interval(500).pipe(take(5));

const multi = sourceObservable$.pipe(multicast(subject));

const subscriberOne = multi.subscribe(val => console.log(` subscriberOne ${val}`));
const subscriberTwo = multi.subscribe(val => console.log(` subscriberTwo ${val}`));

subject.next(1);

