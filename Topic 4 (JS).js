//                                            Topic 4:- Arrays & Methods
// Array is a Collections of items like
let f = [1,2,3,4,5];
console.log("Array is an ",typeof f,"\n","Lenght of Array is",f.length);
// We can use Arrays when we want to use several collection of items in a single variable like one student marks data of several subjects.
console.log("Array indicies is",f[0]); //0,1,2,3,4,5.... index value of an array
//we can update the value the array indicies value through console to main
// console.log(f[3]=6);
// console.log(f[5]=4);
// generally strings are immutable so they cant change or update like numbers in arrays which are muttable
  
//looping over an array
for(i=0; i<f.length; i++){
    const e = f[i];
    console.log("Using For loop",e);
}
console.log("\n");
for (const it of f) {
    console.log("Using for of loop",it);
}
console.log("\n");

for (const key in f) {
        const element = f[key];
        console.log("Using For in loop",element);
}
const g = ["Messer", "Bayle", "Dancing Lion", "Rellna"];
for (const el of g) {
    console.log(el.toUpperCase());
}

//practice questions
//q1 for a given array with marks of students [85,97,44,37,76,60] find average marks of the entire class
const marks = [85,97,44,37,76,60];
let sum=0;
for (const itt of marks) {
    sum= sum+itt;
}
let avg = sum/marks.length;
console.log(`${avg}`);

//q2 given array with price of 5 items [250,645,300,900,50] All items have an offer of 10% off on them.
// change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
for (let price of items) {
    let discount = price * 10 / 100;
    console.log(price-discount);
}
//q3 q1 array but increase all of marks to +5 except 97 one and print the final marks.

console.log(marks[1]=92);
console.log(marks);
for (let mark of marks) {
    let ormarks = mark+5;
    console.log(ormarks);
}
//q4 find the highest marks and sort the marks in order from higher to lower in array of q1
console.log(marks.sort());
//q5 in q2 apply %30 more discount to all items.
for (const price of items) {
    let discount = price*40/100
    console.log(price-discount);
}

//Arrays Methods in Js
//push()    :- add to end
//pop()     :- delete from end & return
//toString() :- converts an array to string

let fooditems = ["potato","apple","litchi","tomato"];
fooditems.push("chips","burger","panner");
console.log(fooditems);
fooditems.pop("chips");
console.log(fooditems);
//it chnaged to existing array too
console.log(fooditems.toString());
//concat
console.log("Concat items",fooditems.concat(f).length);
//unshift :- it will add the item of an array in starting 
console.log(fooditems.unshift("cambage"));
console.log("Unshift items",fooditems);
//shift:- it will delete the first item of an array in index
console.log(fooditems.shift("cambage"));
console.log("Shift items",fooditems);
//slice method in array it doesnt change the orginal array
console.log("Slice items",fooditems.slice(2,4));
//splice method in array add delete and replace 
console.log(items.splice(3,3,101,102,103));
console.log(items);
console.log(items.splice(3));

//practice questions set-2
const company = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
for (const inn of company) {
    console.log(inn);
}
//remove the first element of company in an array
console.log(company.shift("Bloomberg"));
console.log(company);
//Remove Uber & Add Ola in its space
console.log(company.pop("Uber"));
console.log(company.push("Ola"));
console.log(company);
//Add Amazon at the end
console.log(company.push("Amazon"));
console.log(company);
console.log(company.push("Netflix"));
console.log(company);   