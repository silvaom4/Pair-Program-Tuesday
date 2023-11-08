//Given an integer array arr and a mapping function fn, 
//return a new array with a transformation applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).


//array and function
//the fucntion is loop
//apply a transformation to each index and put the results in a new arry

let arr=[5,10,15,20,25]
let newArray = [];



    function changeArray(){
    for(i=0; i < arr.length; i++){
        newArray.push(arr[i] + 5);
    }
    return newArray;
}




changeArray();
console.log(newArray);