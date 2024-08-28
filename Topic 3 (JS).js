//                                            Topic 3:- Loops and Strings

/* Loops in Js is used to repeat a piece of code again and again*/
//FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log("Hello");
} 
console.log("Loop Ended");

//calculate sum 1 to 5
let sum = 1
for (let i = 0; i < 6; i++) {
    sum = sum+i; 
    //1+0 = 1
    //1+1 = 2
    //2+2=  4
    //4+3=  7
    //7+4=  11
    //11+5 = 16
    // sum = 16
}
console.log("sum is:", sum);

// 1 to n
let numt = parseInt(prompt("Enter your num"));
let summ = 0;
for (let i = 0; i < numt; i++) {
       summ = summ+i;
}
console.log(summ);

//calculate sum 1 to 100
for (let i = 0; i < 101; i++) {
    sum= sum+i;
}
console.log("sum is:",sum);

//Show the iterations
for (let i = 0; i < 6; i++) {
  console.log("i=",i);
}

/*print multiplication table of a given number 6.*/
let mul=6;
let mull;
for (let i = 1; i < 11; i++) {
    mull= mul*i 
    console.log("6 *",i,"=", mull);
}

/* print the program in reverse order*/
for (let i = 43; i >= 1; i--) {
    console.log(i);
}
/*print multiplication table of a given number 7. in reverse order*/
let muly=7;
let mully;
for (let i = 10; i >=1 ; i--) {
    mully= muly*i 
    console.log("7 *",i,"=", mully);
}

//while loop
/* print the program in reverse order using while loop*/
let num=43
while (num>=0) {
    console.log(num);
    --num;
}
/* calculate the factorial of a given number using for loop and while loop*/
let factorial=1
for (let i = 1; i <=10 ; i++){
    factorial= factorial*i
}
console.log(factorial);

let fac = 1;
m=1;
while (m<=10) {
    fac = fac*m;
    m++;
}
console.log(fac);
//Do While Loop
let i = 2;
do{
    console.log("Kanishk");
    i++;
}while (i<=10)

//FOR OF :- the special loop which is used in string and arrays.
// for (let val of strval) {
//      let variable of string/arrays variable
// }
let str ="Kanishk";
let size = 0
for (let i of str) { //iterator
    size++;
    console.log(i);
}
console.log(size);  //m1
console.log(str.length); //m2

//FOR IN :- The special loop which is used in arrays and objects.
const product ={
    name: "parker jotter Standard CT Ball Pen",
    color: "black",
    rating: "⭐⭐⭐⭐",
    reviews: 7002,
    Deal:true,
    price: 270,
    discount: true, 
    how: "5%",
};
for (const key in product) {
    const element = product[key];
    console.log(element);
}

//                                                   Practice Questions

// print all even numbers from 0 to 100
let even = 0;
for (let i = 0; i <= 100; i+=2) {
    let evenn = even+i;
    console.log(evenn);
}

//create a game where you start with any random number. ask the user to keep guessing the game number until the user enetrs the correct value
let numm = Math.floor(Math.random() * 10);
let count = 0; 

while (true) {
  let num = parseInt(prompt("Enter your Number (0-9):"));
  count++; // Increment the attempt count

  if (num === numm) {
    console.log("Congratulations, you won! The correct number was",numm);
    console.log("Attempts:", count);
    break;
  } else {
    console.log("Try again!");
  }
}
//prompt will only return string. not in numbers

//                  STRINGS 
//Strings is a sequence of charcaters used to represent text

let stri ="Nameless King";
console.log("length",stri.length);
console.log("indicies", stri[1]);
console.log(`${product.reviews}`); //templete literals creating the string with ` and ${} is called String interpolation.
//reviews got convert into string. due to string interpolation and templete.

//escape charcaters
let z = "Dancer of Boreal Valley";
console.log("Dancer of \n Boreal Valley");
let y = "Vordt of \t Boreal Valley"; // there 3 characters btw 3 of Boreal 
console.log(y.length);

//String Methods
// These are built-in functions to manupilate String

console.log("UpperCase", stri.toUpperCase());
console.log("LowerCase", `${stri}`.toLowerCase());
let x = "\t Ocelot \t"
console.log(x.trim()); //removes both start and end spaces from both
console.log(stri.slice(0,9)); // slice method will take that part or index which you need the last index wont count.
console.log(stri.slice(9,14).concat(z.slice(6,25))); //concat joins both string.
console.log(str+"\t"+stri); //another way to concat
let o = "hello";
//both ways to find character at string.
console.log(o.replace("h","y"));
console.log(stri.replace("Nameless", "Boreal Valley")); //replace 
console.log(o.charAt(2));  
// or 
console.log(o[2]);
// using at(any) same as charat
let text ="Aldrich Saint"
const at = text.at(3);
console.log(at);
/*Strings are immutable in js they will not change as they will create new string*/
//diff btw substring and slice
const substring = text.substring(0,9)
console.log(substring);
console.log(substring.slice(0,9));

//          Practice Questions-2
// prompt the user to enter their full name. generate a username with @ followed by their ending with the fullname length
// eg:- username:- x so 
//output:- @x1
let username = prompt("Enter Your fullname:");
let first = "@"
let user = first.concat(username).concat(username.length);
console.log(user);

// Write a JavaScript function to check whether an 'input' is a string or not.
let input = "input";
console.log(typeof(input));

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
let email ="@kanishkgupta2003";
let asterisk = "*".repeat(email.length);
console.log(asterisk);

// Write a JavaScript function to capitalize the first letter of a string.
let nam = "kanishk";
let replace = nam.slice(0,1);
let full = replace.toUpperCase();
let ful = full.concat(nam.slice(1,7))
console.log(ful);

//or

let rep = nam.charAt(0).toUpperCase();
let repp = rep.concat(nam.slice(1,7));
console.log(repp);

console.log(typeof NaN); //number
console.log(typeof undefined); //undefined