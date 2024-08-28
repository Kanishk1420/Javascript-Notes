//                                Topic 8:- Classes & Objects

//Prototping of Object in Js
const student = {
fullName: "Kanishk",
class: 15,
printClass: function (){
    console.log(this.printClass);
},  
}

// In Javascript object is an enitity having state and Behaviour (properties and methods)
// Protype is also an object ( object kei andhar object which contains specials methods and objects)
// if we created an object as array then by default it contain prototype.

// Defining a function into object like :- 
const employee = {
   calctax() {
     console.log("Tax rate of 10% is");
    }
} 
const rt ={
    tax: 40000,
}
rt.__proto__=employee; 
// we can access the rt into calculate tax through prototyping.

const rt1 = {
    tax:50000
}
rt1.__proto__=rt
/* {tax: 50000}
tax: 50000
[[Prototype]]: Object
tax: 40000
[[Prototype]]: Object
calctax: ƒ calctax()
[[Prototype]]: Object */

// Classes:- used to create multiple objects. ex:- 
class car{
    start(){
      let count = 0;
      let countdown = setInterval(() => {
        count+=10;
        const rt = document.getElementById("h");
        rt.innerText=`Progress ${count}%`;
        rt.style.color="Green";

        if (count>=100) {
            clearInterval(countdown);
            rt.innerText="Progress Completed";
            rt.style.color="Red";
        } 
    },900);
        }
    }
let object = new car(); // initiliaze the default constructor to make object 
object.start();
// Constructor :- initilaize object 
class fruits{
    constructor2(){
        console.log("Apple");
    }
    constructor1(){
        console.log("Banana");
    }
}
let obj = new fruits();
obj.constructor1(); // invoke the constructor which made 
obj.constructor2();

// Add two Variables by using Parameterised Constructor
class add{
    sum(a,b){
     console.log(a+b);
    }
}
let obi = new add();
obi.sum(40,50);

// Inheritance :- Passing down properties & methods from parent class to new child.
class Parent{
    hello(){
        console.log("Hello");
    }
}
class child extends Parent{
    hello(){   // methods overring  
        console.log("Hi");
        
    }
}
let ui = new child();
ui.hello();
// super keyword is used to call the constructor of its parent class to access the parents properties and methods
class Person{
    eat(){
        console.log("Eat");
    }
}
class Eng extends Person{
    sleep(){
        super.eat(); // accessing eat() function too
        console.log("Sleep");
        console.log("Code");
    }
}
let v = new Eng();
v.sleep();
// a)  You are Creating a website for your college. Create a class User with 2 properties, name & email. it has a method called viewData() that allows user to view website data.

// b)  Create a new Class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website Data.
class User{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log("Your name is",this.name);
        console.log("Your Email is",this.email);
    }
}
class Admin extends User{
    editData(){
        super.viewData();
    }
}
let yu = new User("Kanishk","Kanishkgupta2003@outlook.com");
yu.viewData();

// Try-Catch Block in error Handling try will use for where theres are higher chances of getting error and catch will catch the type of error it will going to get.
let a = [0,2,4,6,7];
let b = [10,3,4,5,6];
try {
    c*a;
} catch (error) {
    console.log(error);
}
