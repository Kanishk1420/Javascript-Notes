//                                            Topic 2:- Operators and Conditional statements

// single line Comment
/* Multi line Comment*/

// my_name =  snakecase
// myname =   camelcase

//  OPERATORS IN JS
// 1) Airthmatic operators   +,*,/,%,
// 2) Comparision operators  ==,=!,===,!==, <, <=,>=
// 3) Unary operators =,+=,-=,/=,*=
// 4) Logical operators && ! ||
// 5) Bitwise operators ~, &, |, >>, <<,^, >>>(shift with zero)

// 1)
let a = 23;
let b = 45;
console.log(a + b, a - b, a * b, a % b);

//2)
let c = "45";
console.log(a == b, (a = b), a === b);
// assigning the value that b is assingining the value to a = :- assingment operator
// == :- comparision operator check data values to be same
// === :- comparsion operator check both data values and type also
console.log(a === c);

//3)
a = a + 1;
b = b * 1 + "11" + 2 * c;
//451190
console.log(a);
console.log(b);
c = c * 1 - "11";
console.log(c); //here the number will not convert to string.
console.log(a !== b);
console.log(a >= b);

//4)
console.log(a <= b && b >= c); //checks both then print
console.log(a <= b || b <= c); //check one of them

//conditional statements if,else,else if etc
let age = 14;
if (age >= 18) {
  console.log(true);
} else {
  console.log(false);
}
//
let color = "dark";
let colour = "white";
if (color == "dark") {
  console.log(color);
} else {
  console.log(colour);
}

//
if (age < 18) {
  console.log("Junior");
} else if (age > 60) {
  console.log("Senior-Citzen");
} else console.log("Senior");

//Switch-case

switch ((week = 3)) {
  case 1:
    1;
    console.log("Monday");
    break;
  case 2:
    2;
    console.log("Tuesday");
    break;
  case 3:
    3;
    console.log("Wednesday");
    break;
  default:
    if (week >= 4) {
      console.log("NO-DAY");
    }
    break;
}
// practice questions
// Question 1: Check if a number is a multiple of 5
let number = parseInt(prompt("Enter the number:"));
if (number % 5 == 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not a multiple of 5");
}

// Question 2: Grade calculation
let grade = parseInt(prompt("Enter your grade:"));
if (grade <= 100 && grade >= 80) {
  console.log("Grade A");
} else if (grade <= 89 && grade >= 70) {
  console.log("Grade B");
} else if (grade <= 69 && grade >= 60) {
  console.log("Grade C");
} else if (grade <= 59 && grade >= 50) {
  console.log("Grade D");
} else if (grade <= 49 && grade >= 0) {
  console.log("Grade F");
} else if (grade > 100) {
  console.log("Beyond");
}
