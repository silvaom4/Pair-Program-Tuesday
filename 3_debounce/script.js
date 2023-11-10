




function debounce(function,t){
    let timer;

    return function(args){
        clearTimeout(timer);
        timer=setTimeout(() =>{
            function (args);
        },t);

        };
    }
