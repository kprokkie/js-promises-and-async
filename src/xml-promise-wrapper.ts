let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// promise wrapper
let promise = new Promise((resolve, reject) => {

    // xhr
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject(Error(xhr.statusText));
        }
    }

    xhr.onerror = () => {
        reject(Error(xhr.statusText));
    }

    xhr.send();
});

promise.then(
    (data) => console.log(data),
    (error) => console.log(error.message)
);

// promise.then((data) => console.log(data))
//     .catch((error) => console.log(error.message));