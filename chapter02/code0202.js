const { Observable} = require('rxjs');

const obserableCreated$ = Observable.create(function(observer){
    for(let i= 1 ; i <= 10;  i++){
        setTimeout(function(){
            observer.next(i);
            if(i === 10){
                observer.complete()
            }
        }, 300 * i);
    }
});

obserableCreated$.subscribe(
    function next(item){
        console.log(`observerA: ${item}`);
    },
    function error(err){
        console.log(`observerA: ${err}`);
    },
    function complete(){
        console.log('obserbverA complete');
    }
);

setTimeout(function(){
    obserableCreated$.subscribe(
        function next(item){
            console.log(`observerB: ${item}`);
        },
        function error(err){
            console.log(`observerB: ${err}`);
        },
        function complete(){
            console.log('obserbverB complete');
        }
    );
}, 1350);

