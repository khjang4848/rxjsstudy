const {from} = require('rxjs');

const test1 = from(new Promise((resolve, reject) => {
    console.log('promise1 function begin');
    setTimeout(() => resolve('promise resolve'),1);
    console.log('promise1 function end');
}))

from(new Promise((resolve, reject) => {
    console.log('promise2 function begin');
    setTimeout(() => reject(new Error('promise2 reject')),12);
    console.log('promise2 function end');
}))
.subscribe(
        x => console.log(`[2] next : ${x}`),
        err => console.error(`[2] error.message : ${err.message}`),
        () => console.log('[2] completed')
);

test1.subscribe(
    x => console.log(`[1] next : ${x}`),
    err => console.error(`[1] error.message : ${err.message}`),
    () => console.log('[1] completed')
);