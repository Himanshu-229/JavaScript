// Before time optimization

function find (index){
    let arr = [];
    for(let i =0;i<1000000;i++){
        arr[i] = i*i;
    }
    console.log(arr[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(50);
console.timeEnd("12");

// After time optimization

function find (){
    let arr = [];
    for(let i =0;i<1000000;i++){
        arr[i] = i*i;
    }
    return function(index){
        console.log(arr[index]);
    }
    
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(50);
console.timeEnd("12");


