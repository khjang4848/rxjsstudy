const {of} = require("rxjs");
const {catchError} = require("rxjs/operators");
const {pluck} = require("rxjs/operators");
const {tap} = require("rxjs/operators");
const {map} = require("rxjs/operators");
const {from} = require("rxjs");
const integers = ['1', '2', '3', 'r', '5'];

from(integers).pipe(
    map((value, index) => ({value, index})),
    tap(valueIndex => {
        const {value} = valueIndex;
        const {index} = valueIndex;
        if(!Number.isInteger(parseInt(value, 10))) {
            const error = new TypeError(`${value}는 정수가 아닙니다`);
            error.index = index;
            error.integerCheckError = true;
            throw error;
        }
    }),
    pluck('value'),
    catchError(err => {
        if(err.name === 'TypeError' && err.integerCheckError) {
            const restArray = integers.slice(err.index, integers.length)
                .map(x => `에러 후 나머지 값 ${x}`);
            return from([err.message].concat(restArray));
        }
        return of(err.message);
    })
).subscribe(x => console.log(x), error => console.error(error));