const {Observable}  = require('rxjs');
const {map, toArray} = require('rxjs/operators');

const observableCreated$ = Observable.create((observer) => {
    console.log('Observable Begin');
    const arr = [1, 2];
    for(let i =0 ; i < arr.length; i++)
    {
        console.log(`current array: arr[${i}]`);
        observer.next(arr[i]);
    }
    console.log('Before complete');
    observer.complete();
    console.log('Observable End');
});

const logAndGet = (original, value) => {
    console.log(`orignal : ${original}, map value: ${value}`);
    return value;
};

observableCreated$.pipe(
    map( value => logAndGet(value, value*2)),
    map( value => logAndGet(value, value+1)),
    map( value => logAndGet(value, value*3)),
    toArray()
).subscribe(arr => console.log(arr));