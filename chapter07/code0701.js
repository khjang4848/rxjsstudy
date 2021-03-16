const {range} = require("rxjs");
const {reduce} = require("rxjs/operators");

range(1, 4).pipe(reduce((acc, value) => acc + value, 1))
    .subscribe(x => console.log(x));
