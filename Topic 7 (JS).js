//                                Topic 7:- Events Handling 


/* The change in the state of an object is known as Event 
like window resizing an pop-up box and css transtions and animations are all part of events.*/

//⭐ Mouse events :- (click,double click etc)
//⭐ Keyboards events :- (keypress,keyup,keydown,w,a,s,d etc)
//⭐ Form events :- (submit etc)
//⭐ Print events & many more 

//onclick:- its a function techincally used in buttons to print javascript
//ondbclick :- double click to print js function
//onmouseover :- hovering the div will print js function.

/* This is called inline event handeling this is not good practice because it will make the html code more heavier.
So we use event handling withhin Js*/
Node.event = () =>{
//handle here
}
let id = document.getElementById("id");
id.onclick=()=>{
    console.log("button is clicked");
    let a = 25;
    a++;
    console.log(a);
}
let ui = document.getElementById("i");
ui.onmouseover=()=>{
   console.log("button is hovered");
}
// Event Object 
// It is a special object has details about the event 
let uy = document.getElementById("ie")
uy.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log("Positions",e.clientX,e.clientY);
}

// there are two types of events handling
// 1) Inline Handling
// 2) Js Handling

// 3) Event Listeners
// Node.addEventListeners(event, callback) the callback is a function which is used to pass an argument to another fucntion and callback here role as function as well as event handler too.
let r = document.getElementById("uix");
r.addEventListener("click",(e)=>{
    console.log("Hovered");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
})
// We can remove the EventListeners too like the callback should be same ex:-
const rr = ()=>{
    console.log("Hovered");
}
r.addEventListener("click",rr);
r.removeEventListener("click",rr);   

// Practice questions
// Create a toggle button that changes the screen to dark-mode when clicked then it will chnaged to light-mode when clicked again.
let isDark = 0;
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (isDark=!isDark)// Toggle the mode 
    {
        // Switch to light mode
        document.body.style.backgroundColor = "white";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.innerText="Dark-mode!"
        document.body.style.transition="1s,fade-in"
        document.querySelector("h3").style.color="black";
        document.querySelector("h3").style.transition="1s fade-in"
    } else {
        // Switch to dark mode
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.innerText="Light-mode!"
        document.body.style.transition="1s,fade-in"
        document.querySelector("h3").style.color="white";
        document.querySelector("h3").style.transition="1s fade-in"
    }
});
    //Create an hamburger menu with transtion it includes home,about,contact,
    const menuButton = document.querySelector(".fa-bars");

let isOpen = false;

menuButton.addEventListener("click", () => {
    isOpen = !isOpen;
    const menuContainer = document.querySelector(".di");

    if (isOpen) {
        menuContainer.style.transform = "translateX(0px)";
        menuContainer.style.transition="1.5s"
    } else {
        menuContainer.style.transform = "translateX(-173px)";
        menuContainer.style.transition="1.5s"
    }
});
// Make a Running Digital Clock.
const rq = document.querySelector(".byn");
rq.addEventListener("click",()=>{
    const p = document.querySelector("p");
    setInterval(() => {
    const cr =  new Date();
p.innerText= cr.toLocaleTimeString();
    }, 1000);
})