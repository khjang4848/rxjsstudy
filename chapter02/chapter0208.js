const {Subject} = require('rxjs');

const subject = new Subject();

subject.subscribe({
   next: (value) => console.log('Observer A' + value)
});

subject.subscribe({
    next: (value) => console.log('Observer B' + value)
});

subject.next(1);
subject.next(2);