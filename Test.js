const r = document.querySelector(".byn");
r.addEventListener("click", () => {
  const p = document.querySelector("p");
  setInterval(() => {
    const cr = new Date();
    p.innerText = cr.toLocaleTimeString();
  }, 1000);
});
let count = 1;
const t = document.querySelector(".increment");
t.addEventListener("click", () => {
  const y = document.querySelector(".p");
  let c = count++;
  y.innerHTML = c;
});
const v = document.querySelector(".decrement");
v.addEventListener("click", () => {
  const u = document.querySelector(".p");
  if (count > 0) {
    let d = count--;
    u.innerHTML = d;
  }
});
const i = document.querySelector(".by");
i.addEventListener("click", () => {
  const h = document.querySelector(".p");
  h.style.fontSize = "25px";
  // write the js code for page refersh;
  location.reload();
});
function pizza() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
        console.log(num);
        if (num >= 5) {
          resolve(`Here Your Order no ${num}`);
        } else {
          reject(`Sorry You will take time ${num}`);
        }
      }, 2000);
    });
  }
  
  pizza().then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
  
function getdata(dataid){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Username",dataid);
      if (dataid === "Kanishk") {
        resolve("success");
      }
      else{
        reject("404 Error");
      }
    }, 2000);
  })
}
async function getalldata() {
  await getdata("Kanishk");
  await getdata("Ayush");
}

(async function () {
  await getdata("Kanishk");
  await getdata("Ayush");
})(); // USING IFFE

