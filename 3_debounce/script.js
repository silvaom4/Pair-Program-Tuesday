function debounce(func,t){
    let timer;
    returm func(args){
        clearTimeout(timer);
        timer=setTimeout(() =>{
            func(args);
        },t);

        };
    }
