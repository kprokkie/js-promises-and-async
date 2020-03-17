
let counter = 0;

// setTimeout
let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(++counter) }, 2000);
});

promise.then((data) => console.log(data))
    .catch((error) => console.log(error));

// setInterval
// let promise = new Promise((resolve, reject) => {
//     setInterval(() => { resolve(++counter) }, 2000);
// });

// promise.then((data) => console.log(data))
//     .catch((error) => console.log(error));