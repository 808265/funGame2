// console.log("Welcome: Pranav Ausekar");
// alert("All power is within you; you can do anyting and everything.");
// console.log("Let's begin the javascript course!");



// ******************************* Variables in JS ********************************

// Null and undefined in JS:

// x = null;
// console.log(x);

// y = undefined;
// console.log(y);

// fullName = "Pranav Ausekar";
// console.log("Full Name: " + fullName);

// age = 24;
// console.log("Age: " + age);

// phoneNo = 8788083135;
// console.log("Phone No: " + phoneNo);

// isFollow = true;
// console.log(isFollow);

// isFollow = false;
// console.log(isFollow);


// *********************************** Data-types in JS *****************************

// var, let & const

// var data type
// var age = 15;
// var age = 50;
// var age = 25;

// console.log(age);

// let data type

// let age = 30;
// let age = 25;
// console.log(age);
//  it will give you error bcz in let datatype you cannot redeclare the variable.
// but you can update its value
// like this
// age = 50;
// console.log(age);

// const datatype
// in this you cannot re-declare nor update it
// const age = 40;
// console.log(age);


// let age;
// console.log(age);

// object datatype

// const student = {
//     name: "pranav ausekar",
//     age: 24,
//     cgpa: 8.45,
//     isPass: true,
// };

// console.log(student);
// console.log(student.age);

// student.age = student.age + 1;
// console.log(student);
// console.log(student.age);

// student.name = "saurav jumade";
// console.log(student);


// ************************************ Loops in JS *********************************

// for loop
// for (let i = 0; i < 10; i++) {
//     console.log("Welcome, Pranav Ausekar");
// }

// while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do-while loop

// let i = 10;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 20);

// for-of loop
// let fName = "pranav";

// for (let fChar of fName) {
//     console.log(fChar);
// }

// for-in loop

// const student = {
//     name: "pranav",
//     id: 123,
//     cgpa: 8.25,
//     dept: "CS",
// };

// for (let x in student) {
//     console.log("key: " + x, "values: " + student[x]);
// }

// homework: print all even numbers between 0 to 100 
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Q.2) Create a game where you start with any random game number. Ask the user to keep gussing the game number until the user enters correct value 

// console.log("Welcome");

// let gameNumber = 25;
// let enteredNumber = prompt("enter any number: ");

// while (enteredNumber != gameNumber) {
//     enteredNumber = prompt("You gussed wrong number, enter again: ");
// }
// console.log("Congratulations, you entered the right number");


console.log("Welcome");

let yourName = "pranav";
let enteredName = prompt("enter your name: ");

while (enteredName != yourName) {
    enteredName = prompt("You gussed wrong name, enter again: ");
}
console.log("Congratulations, you entered the right name");