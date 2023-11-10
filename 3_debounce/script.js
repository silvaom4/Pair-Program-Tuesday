




function debounce(function,t){
    let timer;

    return function(args){
        clearTimeout(timer);
        timer=setTimeout(() =>{
            function (args);
        },t);}

function debounce(func, t){
    let timer;

    return function(args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(args);
        } , t);
        };}
    }



calls = [
    {'t':50, inputs: [1]},
    {'t': 75, inputs: [2]}
]


function sampleArray(arr) {
    console.log('Array output:', arr)
}

const newArray = debounce(sampleArray, 2000); // output will take 1 second to load




newArray(calls)

