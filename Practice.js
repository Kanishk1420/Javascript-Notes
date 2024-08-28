//                         IMPORTANT JS PROGRAMS

// Write a Js program to print all natural numbers in reverse (from 10 to 1). – using any loop
let n = 10;
while (n >= !0) {
  console.log("Using While loop", n);
  n--;
}
for (let i = 10; i >= !0; i--) {
  console.log("Using For loop", i);
}
//Write a JS program to count number of digits in a number.
const m = "1235";
console.log(m.length, `The string is ${m}`);
// Write a JS program to find first and last digit of a number.
console.log(m.slice(0, 1).concat(m.slice(3, 4)).length);
const firstDigit = parseInt(m[0]);
const lastDigit = parseInt(m[m.length - 1]);
// accesses the last character (digit) of the string.
console.log(`First digit: ${firstDigit}`);
console.log(`Last digit: ${lastDigit}`);
// Write a JS program to find sum of first and last digit of a number.
console.log("Sum of first and last digit are", `${firstDigit + lastDigit}`);
// Write a JS program to calculate the sum of an digits of the number.
const secondDigit = parseInt(m[1]);
const threeDigit = parseInt(m[2]);
console.log(
  "Sum of all digits are",
  `${firstDigit + secondDigit + threeDigit + lastDigit}`
);
//or

let d = 1235;
console.log(d);
// let arry = Array.from(String(d),Number);
let arry = Array.from(d);
console.log(arry.push(1, 2, 3, 5));
console.log(arry);
let sum = 0;
arry.map((val) => {
  sum = sum + val;
});
console.log(sum);

//or

let de = "1234";
const arra = Array.from(de, Number);
console.log(arra);
console.log(arra[0], arra[3]);
console.log(arra[0] + arra[3]);

// Write a JS program to find power of a number using for loop.
let pow = [1, 2, 3, 4, 5, 6];
pow.forEach((val) => {
  let p = val * val;
  console.log(p);
});

//Write a JS program to print all negative elements in an array.
let arri = [];
for (let i = -1; i >= -10; i--) {
  arri.push(i);
}
console.log(arri);
//do it for postive numbers
let eerie = [];
for (let i = 0; i <= 10; i++) {
  eerie.push(i);
}
console.log(eerie);
//Write a JS program to delete an element from an array at specified position.
console.log(pow.pop(5));
console.log(pow);
// Write a JS program to merge two array to third array.
console.log(eerie.concat(pow));
// Write a JS program to put even and odd elements of array in two separate array.
const evenarray = [];
const oddarray = [];
pow.map((val) => {
  if (val % 2 == 0) {
    console.log(evenarray.push(val));
  } else {
    console.log(oddarray.push(val));
  }
});
console.log(evenarray);
console.log(oddarray);
// Write a JS program to sort array elements in ascending or descending order.
const myArray = [5, 2, 8, 1, 3];
myArray.sort((a, b) => a - b);
myArray.sort((a, b) => b - a);
console.log("Ascending order:", myArray);
console.log("Descending order", myArray);

//create some random numbers upto 10 by using for loops and store in an array and  seprate as even and odd numbers upto use filter command
let createNumberArray = [];
for (let i = 0; i <= 10; i++) {
  let num = Math.floor(Math.random() * 10);
  createNumberArray.push(num);
}
console.log("Array Formed is", createNumberArray.sort());
const evennumbers = createNumberArray.filter((val) => val % 2 == 0);
const oddnumbers = createNumberArray.filter((val) => val % 2 !== 0);
console.log("Even number is ", evennumbers);
console.log("Odd Numbers is ", oddnumbers);

//                                      DOM Practice

//1) set the background color as geenish-orange linear gradient through javascript;
document.body.style.background =
  "linear-gradient(90deg, rgba(8,4,82,1) 4%, rgba(62,208,8,1) 37%, rgba(255,171,0,1) 83%)";
//2) make a button & anchor tag through js with using dom and design it.
let b = document.createElement("button");
b.innerText = "Click me!";
let r = document.querySelector("div");
r.append(b);
(b.style.color = "white"),
  (b.style.backgroundColor = "black"),
  (b.style.fontSize = "20px");
b.style.border = "2px solid white";
b.style.padding = "12px 12px 12px 12px";
b.style.cursor = "pointer";
b.style.borderRadius = "22px";
r.style.textAlign = "center";
r.style.margin = "22px";
let c = document.createElement("a");
c.innerText = "Foolishness";
let y = document.querySelector("section");
y.append(c);
(c.style.color = "white"),
  (c.style.backgroundColor = "red"),
  (c.style.fontSize = "20px");
c.style.border = "2px solid white";
c.style.padding = "12px 12px 12px 12px";
c.style.cursor = "none";
c.style.borderRadius = "22px";
y.style.margin = "22px";
r.addEventListener("click", () => {
  setTimeout(() => {
    aud.play();
  }, 4000);
  // Create a new Audio object with the path to your audio file
  // Play the audio
  audio.play();
});
const audio = new Audio(
  "./Audios/Dark Souls - Male Undead Damage Voice Fx.mp3"
);
const aud = new Audio("./Audios/Dark Souls ' You Died ' Sound Effect.mp3");
//3) create three boxes with a paragraph tag using html and design through js without helping css the three boxes must have same class change the class name and add the new class name.
let bo = document.querySelectorAll(".p");
bo.forEach((element) => {
  element.style.backgroundColor = "cyan";
  element.style.display = "inline-block";
  element.style.fontSize = "20px";
  element.style.border = "2px solid black";
  element.style.padding = "12px 22px 12px 22px";
  element.style.borderRadius = "22px";
});
//I) we cant able to give style to classes through queryselector all
let nm = document.querySelectorAll(".boxes");
nm.forEach((el) => {
  el.setAttribute("class", "box");
});
console.log(nm);
//II) use query selector to give the style to box through class.
const box = document.querySelectorAll(".box");
box.forEach((el) => {
  el.classList.add("my-box");
});
// III) add 1 to 4 count to the boxes.
let cot = 1;
let as = document.querySelectorAll("li");
as.forEach((el, i) => {
  setTimeout(() => {
    el.innerText = `${cot}`;
    el.style.backgroundColor = "blue";
    el.style.display = "inline-block";
    el.style.fontSize = "20px";
    el.style.border = "2px solid black";
    el.style.padding = "12px 22px 12px 22px";
    el.style.borderRadius = "22px";
    el.style.listStyle = "none";
    cot++;
  }, 1000 * i);
});
//IV) how many classes does div box tag have add one more class and remove it.
console.log(box);
box.forEach((el) => {
  el.classList.add("boc");
  el.classList.remove("boc");
});

//4) search the first child and last child of li,ul and div tag
let q = document.querySelector("ul").childNodes;
console.log(q);
let w = document.querySelector("div").childNodes;
console.log(w);

//5) select the childnodes index no [2] and search the lastchild and firstchild of ul tag
const km = document.querySelector("ul").children[2];
console.log(km);
let fe = document.querySelector("ul").firstChild;
console.log(fe);
//it included both first child and last child

//                     PRACTICAL QUESTIONS

// By clicking this button a random 3 digit number will generate but in input lable tag it will generate.
const ui = document.querySelector(".button-62");
ui.addEventListener("click", () => {
  let nu = Math.floor(Math.random() * 900) + 100;
  document.getElementById("hname").value = nu;
});
// By clicking this button a random 4 digit otp will generate in input label tag  by 1.5 sec it will generate till 6 times. after 6 it will shown "Times up".
//b) the text will remove after 2.5 seconds
const yu = document.querySelector(".button-56");
yu.addEventListener("click", () => {
  let count = 0;
  let countdown = setInterval(() => {
    let num = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById("fname").value = num;
    // console.log(num);
    count++;
    if (count >= 10) {
      clearInterval(countdown);
      document.getElementById("fname").value = "Times Up";
      setTimeout(() => {
        document.getElementById("fname").value = "";
      }, 2000);
    }
  }, 1000);
});
// Create an Dynamic Progress Bar
const progressBar = document.getElementById("progress");
const o = document.getElementById("increase");
const x = document.getElementById("decrease");
const z = document.getElementById("reset");
let progress = 0;
o.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    progressBar.style.width = progress + "%";
  }
});
z.addEventListener("click", () => {
  progress = 0;
  progressBar.style.width = progress + "%";
});
x.addEventListener("click", () => {
  if (progress < 200 && progress > 0) {
    progress -= 10;
    progressBar.style.width = progress + "%";
    // So, if progress is 50, the line progressBar.style.width = progress + '%'; sets the width of the progress bar to 50%, visually updating the progress bar to reflect 50% completion.
  }
});






