
function test(himanshu){
    console.log("hello");
}
test();

// anonymous function

let anonymous = function (){
    console.log("anonympus");
}
anonymous();

// IIFE function
  (function fn(nums){
    console.log("I am IIFE");
  }());
 

// //  Arrow function
//  const nums = [1,2,3,4];
// let func =(nums)=>{
//      return nums*nums
// }();
for(let i =0;i<5;i++){
   setTimeout(function(){
    console.log(i);
   },i *1000);
}
