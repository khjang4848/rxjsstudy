const {scan} = require("rxjs/operators");
const {retryWhen} = require("rxjs/operators");
const {catchError} = require("rxjs/operators");
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
            retryWhen(errors => {
                return errors.pipe(
                    scan((acc, error) => {
                        return {
                            count : acc.count + 1,
                            error
                        };
                    }, {count: 0}),
                    tap(errorInfo => console.error(
                        `retryCount: ${errorInfo.count}, error message: ${errorInfo.error.message}`
                    ))
                )
            }),
            catchError(err => of(err.message))
        );})
).subscribe(x => console.log(x), err => console.error(err));