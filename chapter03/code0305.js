const {of, asapScheduler} = require('rxjs');

console.log("Before Call subscribe");

of('임수민1',  '임수민2', '임수민3', '임수민4', asapScheduler).subscribe(
    x => console.log(`next ${x}`),
    err => console.log(err.message),
    () => console.log('completed')
);

console.log('After Call subscribe()');
