//                                Topic 10:- Fetching Api

// Application Programming Interface
//  a software intermediary that allows two applications to communicate to each other
 const URL = "https://dog.ceo/api/breeds/image/random";
 const ty = "https://dogapi.dog/api/v2/breeds";
 const genshin = "https://api.jikan.moe/v4/anime?q=genshin impact&sfw";
 const para = document.querySelector("#fact");
 const rt = document.querySelector("#btn");
 const imy = document.querySelector("#im");
 const gen = document.querySelector("#cli")
 //To retrieve data from a URL, we use the Fetch API.”
 // it uses request and response objects
 // The fetch() method is use to fetch a data (lena data lena fetch)
 // promise got return during fetch of api

//  let promise = fetch(URL[options])
// 200 - success

const getfacts = async () => {
    console.log("Getting Data ...");
    let response = await fetch(URL); // this is asynchrornous work so it will took time to fetch data so lets make them await.
    console.log(response);  // after this execution it will execute to log statment.
    let data = await response.json();
    console.log(data); 
}
getfacts();
// data got return from data or any api is called GET request 

//                            UNDERSTANDING TERMS
// AJAX (Asynchronous JavaScript and XML): In the past, when we made requests to APIs, the data we received was often in XML format. However, nowadays, JSON (JavaScript Object Notation) has become more popular for data exchange due to its simplicity and compatibility with JavaScript.
// JSON :- Javascript Object Notation 

// console.log(response);  // JSON FORMAT (AJAJ:- Asynchronous Javascript And Json)

// 1) Response (Json) --> conver to --> Js object through json();

const Getting = async() => {
console.log("Getting Data...");
let res = await fetch(ty);
console.log(res);
let da = await res.json(); // JSON format but not readable
// priniting the fetched api data into html 
para.innerHTML = da.data[0].attributes.description
}

rt.addEventListener("click",Getting);

// Using Promises 
function Get(){
fetch(URL)
.then((res) => {
    return res.json();
}).then((data) =>{
 console.log(data.message);
})
}
Get();

//                   REQUEST AND RESPONSE

//                         HTTP VERBS 
// GET :- Reterive some Data
// POST :- Send some Data
// DELETE :- Delete some Data
// PATCH :- Changes in Data

//                      STATUS CODE

// Informational responses (100-199)  :- are used to indicate that the server has received the initial part of the request and is continuing to process it.
// Successful responses (200-299) :- successful responses we received during fetch 
// Redirection messages (300-399) :- These codes indicate that the requested resource has moved to a different location
// Client-error responses (400-499) :- These codes indicate that there was an issue with the client’s request, and the server couldn’t process it successfully. 
// Server error responses (500-599) :- These codes indicate that there was an issue on the server side

// Headers :- Headers contain additional information inside the database 


// Q1 Generate the Image through Api
const impact = async () => {
    console.log("Getting Data...");
    const response = await fetch(genshin);
    const data = await response.json();
    const imageUrl = data.data[1].images.jpg.large_image_url; // Correct property path
    imy.src = imageUrl;
}
gen.addEventListener("click", impact);

// Q2 Generate data 3 through using Promises 

function Gen(){
fetch(genshin)
.then((res)=>{
return res.json();
}).then((data)=>{
    console.log("Score",data.data[2].score);
})
}
Gen();
