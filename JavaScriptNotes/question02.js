//  Question 1 : Return only names of student in capital 


let student = [
    {name:"himanshu",rollnumber: 15,marks:85},
    {name:"lokesh",rollnumber: 21,marks:95},
    {name:"archit",rollnumber: 11,marks:15},
    {name:"satyam",rollnumber: 81,marks:45},
];

const names = student.map((stu)=>stu.name.toUpperCase());

console.log(names);

//  Question 2 : Return only details of those who scored more then 60 marks;

const details = student.filter((stu)=>stu.marks>60);
console.log(details);

// Question 3 : More than 60 marks and roll number greater than 15;

const details2 = student.filter((stu)=>stu.marks>60 && stu.rollnumber>15);
console.log(details2);

// Question 4 : Total sum of marks 

const sum = student.reduce((acc,curr)=>acc+curr.marks,0);

console.log(sum);

// Question 5 : Return those student name who marks more than 60;

const details3 = student.filter((stu)=>stu.marks>60).map((stu)=>stu.name.toUpperCase());
console.log(details3);

//  Question 6 : Return total marks for student with greater than 60 after 20 marks marks have been 
//               added those who scored less than 60;

const total = student.map((stu)=>{
    if(stu.marks < 60){
        stu.marks += 20;
        return stu;
    }
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0);

console.log(total);



