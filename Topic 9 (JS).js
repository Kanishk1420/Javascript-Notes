//                                Topic 9:- Async Awaits Callbacks & Promises

// async await >> promise >> callback hell
// Synchronous Code:- The code execute in particular execute of instructions given in the program.
console.log("1", +1); // first it will execute
console.log("2" + 1); // then this
console.log(`...`); // then this

// Asynchronous Code :- Sometimes Imp Instructions got blocked due to some previous instructions which can cause delay Asynchronous code allow the next Instruction to execute immeditaely.
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(5);
}, 1000);
console.log(3);
console.log(4);

// Callbacks :- passing an argument to another function
function sum(a, b) {
  console.log(a + b);
}
function diff() {
  console.log("diff");
}
function calculate(a, b, sumcallback) {
  sumcallback(a, b);
}
calculate(4, 5, sum);
//or
calculate(6, 7, (a, b) => {
  console.log(a + b);
});
setTimeout(diff, 1500);

// Callback Hell:- Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)
function callback() {
  for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
      for (k = 0; k < 2; k++) {
        console.log(i, j, k);
      }
    }
  }
}
callback();
// ex:-
function getdata(dataid) {
  setTimeout(() => {
    console.log("Data", dataid);
  }, 2000);
}
getdata("Kanishk");
// another example
// data 1 first
// data 2 in 2 sec
// data 3 after data 2 in next  2 sec
function getdata(dataid, getnextdata) {
  //2s
  setTimeout(() => {
    console.log("Data", dataid);
    if (getnextdata) {
      getnextdata();
    }
  }, 1000);
}
// nested callback hell
getdata(1, () => {
  getdata(2, () => {
    getdata(3, () => {
      getdata(4);
    });
  });
});
// q1 using clear interval and set interval
function random(count) {
  let countdown = setInterval(() => {
    let nu = Math.floor(Math.random() * 900) + 100;
    console.log(nu);
    count++;
    if (count >= 5) {
      clearInterval(countdown);
      setTimeout(() => {
        console.log("Otps Expired");
      }, 1000);
    }
  }, 1000);
}
random(1);

// add the strings value randomized it
function rand(count) {
  const options = ["A", "B", "C", "D"];
  let rt = setInterval(() => {
    const rand = Math.floor(Math.random() * 4);
    console.log(options[rand]);
    count++;
    if (count >= 5) {
      clearInterval(rt);
      console.log("Times up");
    }
  }, 1000);
}
rand(0);
// Promises :- Promises is an object in JS which have three states Pending,Resolve,Rejected where Resolve and Reject are our handlers in promise object which are created by Js itself.
let promi = new Promise((resolve, reject) => {
  console.log("Pending");
  resolve("Resolved..");
  reject("Rejected");
});
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Resolved.."
// A Javascript Promise object can be:
// Pending :- the result is undefined
// Resolved :- the result is fulfilled
// Rejected :- the result is an error object
function getdata(dataid, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("Success");
      reject("error");
      if (getnextdata) {
        getnextdata();
      }
    }, 1000); // Closing the setTimeout function here
  });
}
let promise = getdata(1, () => console.log("Next data fetched"));

promise
  .then((res) => {
    console.log("Promise Fulfilled", res);
  })
  .catch((err) => {
    console.log("Promise Failed", err);
  });
// q1 Fetch Some data after 3 seconds through using promises
function async() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data");
      resolve("Success");
    }, 3000);
  });
}
console.log("Fetching Data ...");
let p1 = async();
p1.then((res) => {
  console.log(res);
});

// Promises Chaining if we want the data should came one after another then we should use Promises Chaining.
function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("Success");
    }, 3000);
  });
}
function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("Success");
    }, 3000);
  });
}
console.log("Fetching Data1 ...");
let p3 = async1();
p3.then((res) => {
  console.log(res);
  setTimeout(() => {
    console.log("Fetching Data2 ...");
  }, 1000);
  let p2 = async2();
  p2.then((res) => {
    console.log(res);
  });
});

//Q1 Solve the Callback hell problem with promises now
function getdata(dataid) {
  //2s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataid);
      resolve("success");
      reject("Error");
    }, 2000);
  });
}
console.log("Fetching Data...");
getdata(1).then((res) => {
  console.log(res);
});

//Q2 write the data of pizzas order randomized from 0-10 using promises
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

pizza()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Async function always return a promise
// async function myfunction()
// await pauses the execution of the surrouding async function until the promise is settled
function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Username", dataid);
      if (dataid === "Kanishk") {
        resolve("success");
      } else {
        reject("404 Error");
      }
    }, 2000);
  });
}
async function getalldata() {
  await getdata("Kanishk");
  await getdata("Ayush");
}

// Difference btw Callback hell vs Promises Async-Await
getdata(1, () => {
  console.log("Getting data 2...");
  getdata(2, () => {
    console.log("Getting data 3...");
    getdata(3, () => {
      console.log("Getting data 4...");
      getdata(4, () => {
      });
    });
  });
});

// Using Promises
getdata(1)
  .then((res) => {
    console.log("Getting data 1");
    console.log(res);
    return getdata(2);
  })
  .then((res) => {
    console.log("Getting Data 2");
    console.log(res);
    return getdata(3);
  })
  .then((res) => {
    console.log("Getting Data 3");
    console.log(res);
    return getdata(4);
  })
  .then((res) => {
    console.log("Getting Data 4");
    console.log(res);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

  // async-await 
  async function getalldata(){
    console.log("Getting data 1");
    await getdata(1);
    console.log("Getting data 2");
    await getdata(2);
    console.log("Getting data 3");
    await getdata(3);
    console.log("Getting data 4");
    await getdata(4);
  }

  // to automatically execute in async await code immediately which is called IFFE 
  (async function (){
    console.log("Getting data 1");
    await getdata(1);
    console.log("Getting data 2");
    await getdata(2);
    console.log("Getting data 3");
    await getdata(3);
    console.log("Getting data 4");
    await getdata(4);
  })(); 
