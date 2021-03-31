const {multicast} = require("rxjs/operators");
const {Subject} = require("rxjs");
const {interval} = require("rxjs");
const {take} = require("rxjs/operators");

const sourceObservable$ = interval(500).pipe(take(5));
const multi = sourceObservable$.pipe(multicast(() => new Subject()));

const subscriberOne = multi.subscribe(val => console.log(` subscriberOne ${val}`));
const subscriberTwo = multi.subscribe(val => console.log(` subscriberTwo ${val}`));

multi.connect();