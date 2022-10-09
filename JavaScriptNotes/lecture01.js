
// scope determines the accesibility (visibolty) of variable

// Block Scope 
{
   let x = 2;
  console.log(x);
}
// x can not use out of  this block.in var us can use anywhere

// Global Scope
// let x =2;



//  Variable shadowing
// function test(){
//    let a = "hello";
//    if(true){
//     let a = "hi";
//     console.log(a);
//    }
//    console.log(a);
   
// }
// test();


// shadowing a variable it should not cross the boundary of scope that is we can shadow var variable 
// by using "let" variable but cannot use oppositly if we do then is known as illegal 

function test(){
    let a = 4;
    var b = 3;
    if(true){
       // var a = 7;  // it illegall let cannot change into var
        let b = 9;
        console.log(a);
        console.log(b);
    }
}
test();



// Hoisting for var 
    var count;
    console.log(count);
    var count = 100;
// Hoisting for let or const
   console.log(clet);
   let clet =10;
//  let or const show they not declare but they also declare in temporal deadzone
// temporal deadzone is the time b/w the declaration and the initialization of let and const

   
 

