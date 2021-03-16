const {max} = require("rxjs/operators");
const {range} = require("rxjs");

range(1, 10).pipe(max())
    .subscribe(x => console.log(x));