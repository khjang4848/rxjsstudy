const {catchError} = require("rxjs/operators");
const {retry} = require("rxjs/operators");
const {tap} = require("rxjs/operators");
const {of} = require("rxjs");
const {mergeMap} = require("rxjs/operators");
const {take} = require("rxjs/operators");
const {interval} = require("rxjs");

interval(100).pipe(
    take(30),
    mergeMap(x => {
       return of(x).pipe(tap(value => {
           if(Math.random() <= 0.3) {
               throw new Error(`RANDOM ERROR ${value}`)
           }
       }),
       retry(10),
       catchError(err => of(err.message))
       );})
).subscribe(x => console.log(x), err => console.error(err));