// map , filter

// what is map?

const nums = [1,2,3,4];

const multi = nums.map((num,i,arr)=>{
return num *3+i;
});

console.log(multi);

// what ids filter?
   const num2 = [1,2,3,4];
   const twogre =  num2.filter((num)=>{
      return num > 2;
   });
   console.log(twogre);

//    what is reduce?

const num3 = [1,2,3,4];
const sum = num3.reduce((acc,curr,i,arr)=>{
    return acc+curr;
},0)
console.log(sum);

// pollyfill of map()
//  to crate custom map function
Array.prototype.myMap = function(cb){  
   let temp = [];
   for(let i =0;i<this.length;i++){
       temp.push(cb(this[i],i,this))
   }
  return temp;
}
const num4 = [1,2,3,4];
const mul = num4.myMap((num,i,arr)=>{
return num *3+i;
});
console.log(mul);


