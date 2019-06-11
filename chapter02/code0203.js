const {Observable} = require('rxjs');

const obserableCreated$ = Observable.create((observer) => {
    console.log('Begin Observable');
    observer.next(1);
    observer.next(2);
    observer.complete();
    console.log('END Observable');
});

obserableCreated$.subscribe(
    next = (item) => console.log(item),
    error = () => {},
    complete = () => console.log('complete')
);