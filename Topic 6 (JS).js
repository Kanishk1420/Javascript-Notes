/*                          Topic 6:- Document Object Model


 Html provides Strucutre, Css provides you Styling and Js provides you logic */
alert("Hello!");
//    Starter Code <style> tag connects HTML with CSS meanwhile <script> tag connects HTML with js.
// Advantages :- Code readability, modular, browser caching.

// Window object:- its an browser object created by browser not javascript. its a global object with lots of properties & methods & function. like alert is an part of window object.


//                               DOM(Document Object Model)

// When an web page loaded, the browser creates a Document Object Model (DOM) of the page. To accessing HTML in Js
// window --> document --> html-->head & body
console.log(window.document);
console.dir(window.document);
//or
console.log(document);
//or
console.log(document.body);
console.log(document.body.childNodes[1]); 
document.body.style.backgroundColor ="brown";
//dom used to chnage the webpage as dynamic manupilation
//dom objects or elements cannot be accessable if you put before body tag it will show null thats why we should put at end the script tag


//  DOM Manupilation

//1.  Selecting with Id
let heading = document.getElementById("Heading").style.color ="White";
//it will return id which is unique


//2. Selecting with ClassName
let Heading = document.getElementsByClassName("Heading");
//it will return HTML Collections similar to Array.
console.dir(heading);
console.dir(Heading);

//3. Selecting with Tag names
const lengh = document.getElementsByTagName("h2").length;
console.dir(lengh);

//4. Query Selector
//in query selector you can select trio all
const Firstelement = document.querySelector("h2");
console.dir(Firstelement); //return 1st elements

const Allelement = document.querySelectorAll("h2");
console.dir(Allelement); //return a nodelist 

// nodelist are those the nodes present used to make a dom tree like window,document,object etc.

const clas =document.querySelector(".Heading");
console.dir(clas); //by class
const clasy = document.querySelector("#Heading");
console.dir(clasy); //by id

//               Properties of Dom

//1)     tagName:- returns tag for element nodes
Firstelement.tagName; //h2
//body tag has only first and last child which is div tag and first child is img and last child is h1 tag
console.dir(document.body.firstChild);
//output text because dom includes text nodes,comments and elements as text nodes are first child counted 
console.dir(document.body.lastChild);
console.dir(document.body.childNodes);
console.dir(document.body.children[2]); // it will select all childnodes subparts like h2,h1,p etc

// In the Document Object Model (DOM), we have different types of nodes that represent various aspects of an HTML document:

// Element Nodes: These correspond to HTML tags like <h1>, <p>, and <div>. 
// Each element node has properties (such as its tag name, class, and ID) and content (the text or other elements it contains).
// Text Nodes: These contain the text inside elements. For example, the text within a paragraph or a heading is stored as a text node. example:- hello world 
// Attribute Nodes: Associated with attributes of elements. Attributes provide additional information about an element, such as href in an anchor (<a>) tag.
// Comment Nodes: These contain comments within your HTML. Although comments won’t be displayed on the page, JavaScript can read them from the DOM.

// 2) innerText:- so innertext bacially print all the elements including the class,tag,or id which meantioned in selector along its child nodes too ex:- and returns the text content only.
let di = document.querySelector("div");
console.dir(di); 
di.innerText; 
//it will print all li tags
//3) innerHtml :- So it returns the plain text along with html contents in the elements. 
di.innerHTML; 
//4) textContent :- returns textual content even for hidden elements. works same like innerHtml.


// Practice questions 
// Create a h2 heading element with text - "Hello Javascript". Append from Kanishk to this text using Js. 
let fi = document.querySelector("h3");
console.log(fi);
fi.innerText = fi.innerText+"\nKanishk";

// Create 3 div with common class name - "box". Access them & add some unique text to each of them.
let g = document.querySelectorAll(".box");
console.log(g);
g[1].innerText ="Sulvahyn";
'Sulvahyn'
g[2].innerText = "Rellana";
'Rellana'
g[0].innerText="Bayle";
'Bayle'
// do with using for loop as by using for loop we can change the innertext in loop and id instead changing in manyy lines.
let id = 1
for (const itt of g) {
    console.dir(itt);
    itt.innerText=`unique value is ${id}`;
    id++; 
}
//Attributes we can access the class name,tag, and id through it through it
let div = document.querySelector("h3");
console.log(div);
let idi = div.getAttribute("class")
console.log(idi);
let f = document.querySelector("ul");
console.log(f.getAttribute("class"));
//Set Attribute we can change the classname through set attribute.
console.log(f.setAttribute("class","uwu"));
let gh = console.log(document.querySelector("ul"));
console.log(gh);
//As you can see here the classname of ul tag got changed.

//styles in node mentioned the node which you want to give the style in inline css through js.
let r = document.querySelector("a");
console.log(r);
r.style.color = "black";
r.style.textDecoration = "none";
r.style.fontSize = "20px"

//More Dom properties.
let newbtr = document.createElement("button");
newbtr.innerText="Click me!"
console.log(newbtr);
//Adding direction to where
div.after(newbtr);
newbtr.style.backgroundColor="black"
newbtr.style.color="white"
newbtr.style.border="1px solid white"
newbtr.style.padding="6px 16px 6px 16px"
newbtr.style.marginBottom="12px"
newbtr.style.cursor="pointer";

// so there are many types to add or insert buttons or html elements by using dom :- 
// 1) first create element 
// 2)   node.append(el), node.after(el), node.before(el), node.prepend(el);

//create the new heading of the page using js only
let newheading = document.createElement("h1");
newheading.innerHTML="This is new Heading";

document.querySelector("body").prepend(newheading);
//delete the node first select the node which you want to delete then remove it.
document.querySelector("h1").remove();

//append child and remove child 
let gui = document.createElement("p");
console.log(gui);
gui.innerText="append child"
//append child :- The appendChild() method adds a new child element to an existing parent element.
document.querySelector(".box").appendChild(gui);
//remove child :-he removeChild() method removes an existing child element from its parent.
document.querySelector(".box").removeChild(gui);

// Practice questions
// Create a new button element.give a text click me, background color of red & text color of white insert the button as the first element inside the all box class.
let rt = document.querySelectorAll(".box")
rt.forEach(element => {
    let button = document.createElement("Button");
    button.innerText="Click me!"
    
    button.style.color="white";
    button.style.backgroundColor="darkred";
    button.style.border="1px solid white"
    button.style.padding="6px 6px 6px 6px"
    button.style.marginRight="24px"
    button.style.marginLeft="7px"
    button.style.cursor="pointer";

    element.append(button);
});
//Create a <p> tag in html give it a class & styling. now create a new class in css and try to append this class to the <p> element.
let para = document.querySelector("p");
let rtt = para.getAttribute("class");
console.log("Class name",rtt);
para.setAttribute("class","sif");
console.log("New Class name",para);
//we can add new classes too like
para.classList.add("Champion");
console.log("Both two new classes",para.classList);
//we can remove it too
para.classList.remove("sif");
console.log("Removed class",para.classList);
