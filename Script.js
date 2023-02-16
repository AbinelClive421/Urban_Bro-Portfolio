// // var age= 16
// // if(age < 18) {
// //     console.log("not allowed to vote")
// // } 

// // Global Scope
// let globalvar = "I am global";

// function Functionscope() {
// // local scope

// let localvar = "I am Local";
// console.log(globalvar);
// console.log(localvar);
// }

// Functionscope()

// // let x = 5;//Globally Declared
// // let y = 12;//Globally Declared
// // let sum = x + y //Globally Declared

// // function myfunction() {
// //     let a = 90;
// //     let b = 10;

// //     let product =a * b;

// //     console.log("the sum is:", sum);
// //     console.log("The product is:", product);
// // }

// // myfunction()


// // function ret(x, y){
// //     return x * y;
// // }

// // console.log(ret(25, 50));

// let multiply = function(x, y){
//     return x * y;
// }

// console.log("This is an example of an anonymous function:", multiply(4, 8));

// let name = function(fname, lname){
//     return fname+" "+lname;
// }
// console.log("Hello world we are ", name("TheUrban", "Bro"));


// function factorial(n){
//     if (n === 1){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));


const test = document.getElementById("test")
test.innerHTML = "Hello world"

const getEl = document.querySelectorAll("p.intro")
document.getElementById("demo").innerHTML = `My first name is ${getEI[0].innerHTML} and my last name is ${getEl[1].innerHTML}`

const newItem = document.createElement("h1")

const headingOne = document.createTextNode("This is heading one")

newItem.appendChild(headingOne)

const printToDom = document.getElementById("newElement")
printToDom.appendChild(newItem)