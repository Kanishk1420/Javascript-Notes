//                                            Topic 5:- Functions & Methods
//block of code that performs a specific task,can be invoked whenever needed
function Name() {
  console.log("do some work bro function defination");
}
Name();
//function call; we can print multiple times we can use functions as reducancy means repeat
Name();
function nameless(msg, n) {
  //parameter --> input
  console.log(msg, n);
}
nameless("Dont you Dare Ring the Bell", 100); //argument

//m1
function sub(a) {
  console.log(a);
}
sub(10 - 15);

//m2
function sum(a, b) {
  //a,b is acts as local variables as block scope you cant performs as outside
  let s = a + b;
  return s;
}
console.log(sum(3, 4));

function store(a) {
  a;
  return a;
}
console.log(store([1, 2, 3, 4, 5]));

//fat arrow functions used in modern javascript.
const mul = (a, b) => {
  return a * b;
};
console.log(mul(12, 34));

//store an array.lenght using arrow functions
const array = (a) => {
  return a;
};
console.log(array([1, 2, 3, 6].length));

// print you died!
const printhello = () => {
  console.log("You Died!");
};
printhello();

//create a function using the "function" keyword that takes a String as an argunent & return the numbers of vowels in the string.
function fun(a) {
  a = "hello";
  count = 0;
  for (const it of a) {
    console.log(it);
    if (it === "a" || it === "e" || it === "i" || it === "o" || it == "u") {
      count++;
    } else {
      count = 0;
    }
    console.log(count);
  }
  return count;
}
fun();
// create an arrow function to perfrom the task again
const funn = (a) => {
  a = "India";
  let countt = 0;
  for (const itt of a) {
    console.log(itt);
    if (
      itt === "a" ||
      itt === "e" ||
      itt === "i" ||
      itt === "o" ||
      itt === "u" ||
      itt === "I"
    ) {
      countt++;
    } else {
      countt = 0;
    }
  }
  return countt;
};
funn();

// generate the random number around 0-10 and print in loop around 10 times with even and odd numbers using fat function
const num = () => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      let x = Math.floor(Math.random() * 10 + 1);
      if (x % 2 == 0) {
        console.log("Even Numbers", x);
      } else {
        console.log("Odd numbers", x);
      }
    }, 500 * i);
  }
};
num();
//for each loop :- arr.foreach(callback function)
// a callback is a function passed as argument to another function we will study this later
let arr = ["cat", "bat", "rat"];
arr.forEach(
  (printVal = (val) => {
    console.log(val.toUpperCase());
  })
);
//** Higher order Functions/methods are those functions/methods which either take higher parameters inside functions or they return function as output. so forEach is higher order functions.*/

//for a given array of numbers, print the square of each value using the foreach loop.

let arry = [1, 2, 3, 4];
arry.forEach(
  (printVal = (val) => {
    console.log("Normal array is:-", val, "& Square of array is:-", val * val);
  })
);
//Some More Array Methods
//1) Map :- Creates a new array with the results of some operation. the value its callback returns are used to form new array. similar to for each
arry.map(
  (printValue = (val, index, array) => {
    console.log("Value going to multiply is", val * 2, "& Its index is", index);
  })
);

//print 10 numbers using map function
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 1; i++) {
  d.map(
    (printval = (val) => {
      console.log(val++);
    })
  );
}
//2) Filter:- Creates a new array of elements that give true for conditional/filter.
//eg:- all even numbers
d.filter((val)=>{
    if (val%2==0) {
        console.log("Even",val);
    }
    else{
     console.log("Odd",val);
    }; 
})
//we are given array of marks of students. filter out of the marks of the student score that scored 90+
let mar = [10,90,92,87,80,34,20,56,99];
mar.filter((marks)=>{
  if(marks>=90){
    console.log(marks);
  }
})
// take a number n as input from user. create an array of numbers from user from 1 to n. use any method to calculate the sum of the array and product too
function createNumberArray(n) {
  const numberArray = [];
  for (let i = 1; i <= n; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

// Get input from the user
const userInput = prompt("Enter a positive integer (n):");
const n = parseInt(userInput, 10); // Parse the input as an integer

if (!isNaN(n) && n > 0) {
  const result = createNumberArray(n);
  console.log("Array of numbers:", result);
let sum = 0;
result.map((val)=>{
sum = sum+val;
  })
console.log("Sum of an Array",sum);

let prod = 1;
result.map((vall)=>{
  prod=prod*vall;
})
console.log("product and factorial of an Array is",prod);
} 
else {
  console.log("Invalid input. Please enter a positive integer.");
}
