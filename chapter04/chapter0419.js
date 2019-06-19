const {of} = require("rxjs");
const {distinct, map} = require("rxjs/operators");
of(
    {id : 1, value : "Sumin Lim1"},
    {id : 2, value : "Sumin Lim1"},
    {id : 3, value : "Sumin Lim1"}
).pipe(distinct(obj => obj.value), map(x => x.value)).subscribe(x => console.log(x));
