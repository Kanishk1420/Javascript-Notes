//                                            Topic 1:- Introduction to Javascript & Data types

/* Javascript is a programming Language we use it to give instructions.
console.log is used to print the message to console and log means print.*/
console.log("Hello JS");
fullname = "Kanishk";
age = 24;
price = 99.9;
radius = 14;
x = null;
y = undefined;
console.log(fullname,age,price,radius,x,y);
// javascript is dynamically typed meand you can store let,var into numbers,bigint,strings etc
// you cant declare or make the variable as console because console is not a function. 
// for decelaring variable camel case is used like isFollow.
/*let,const,var
var: Variable can be re-declared & updated. A global scope variable. use anywhere
let: Variable cannot be re-declared but can be updated. block scope too. use in a block
const: Variable cannot be re-declared or updated. A block scope variable too*/
let a = 34;
a = 56;
var b = 45;
var b = 56;
b = 90;
console.log(a,b);
// block scope
{
    let a = 45;
    console.log("block a", a);
}
{
    let a = 56;
    console.log("Another block a", b);
}
// Data types in JS
// data types in JavaScript
//     primitive    and non-primitive
//     in primitive there are 8 types of data types. fixed data types
//     1) string any kind of word ex:- "Aman" you can write double quote inside double quote
//     2) Number:- 1,2,3,4 etc
//     3) Big int => 123456.567890 etc 
//     4) Boolean => true/false
//     5) Undefined => didnt give or declare the value to variable like let x.
//     6) Null => declared variable but didn't defined value
//     7) Symbol => 

    /* non-primitive 
    1) Objects:- collection of values like an object will make as student which contain values of name,class,rollno etc.*/
    const corp = {
        name: "Zenitsu",
        rank: "Tsuchinoe",
        breathing: "Thunder",
        age: 16,
        exp: 3,
    };
    console.log(corp);
    console.log(corp.age);
    console.log(corp["exp"]);

    //practice questions 
// 1) create an object called product and the details and store the information
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
console.log(product);
console.log(product.discount,`${product.how}`);
console.log(typeof product.rating);

// 2) convert the following string to number
console.log("123"+ 12);  //123 got convert to string 12 added onto string.
console.log(1+23+"123"); // 124 convert to string and converted to 123 string.

// 2) show  undefined and null object
let v ;
console.log(typeof v);

let n = null;
console.log(typeof n);

//ES6 VERSION OF JAVASCRIPT => 2015 version

