let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// 1. xhr request ----------------------------------------------------------
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    } else if (xhr.status === 404) {
        console.log('Data not found.');
    } else {
        throw (Error(xhr.statusText));
    }
}

xhr.onerror = () => {
    throw (Error(xhr.statusText));
}

xhr.send();

// xhr call - parallel - race condition ---------------------------------------------------------------------

// xhr 1
// let postData;
// let xhr1 = new XMLHttpRequest();

// xhr1.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

// xhr1.onload = () => {
//     if (xhr1.status === 200) {
//         postData = JSON.parse(xhr1.responseText);
//         console.log('\n Post: ', postData);
//         console.log('\n User ID: ', postData.userId);
//     } else if (xhr1.status === 404) {
//         console.log('Data not found.');
//     } else {
//         throw (Error(xhr1.statusText));
//     }
// }

// xhr1.onerror = () => {
//     throw (Error(xhr1.statusText));
// }

// xhr1.send();

// // xhr 2
// let commentData;
// let xhr2 = new XMLHttpRequest();

// xhr2.open('GET', `https://jsonplaceholder.typicode.com/posts/${postData.userId}/comments`);

// xhr2.onload = () => {
//     if (xhr2.status === 200) {
//         commentData = JSON.parse(xhr2.responseText);
//         console.log('\n Comments: ', commentData);
//     } else if (xhr2.status === 404) {
//         console.log('Data not found.');
//     } else {
//         throw (Error(xhr2.statusText));
//     }
// }

// xhr2.onerror = () => {
//     throw (Error(xhr2.statusText));
// }

// xhr2.send();

// xhr call - nested - callback hell --------------------------------------------------------------------

// xhr 1
// let postData;
// let xhr1 = new XMLHttpRequest();

// xhr1.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

// xhr1.onload = () => {
//     if (xhr1.status === 200) {
//         postData = JSON.parse(xhr1.responseText);
//         console.log('\n Post: ', postData);
//         console.log('\n User ID: ', postData.userId);

//         // xhr 2 -- nested
//         let commentData;
//         let xhr2 = new XMLHttpRequest();

//         xhr2.open('GET', `https://jsonplaceholder.typicode.com/posts/${postData.userId}/comments`);

//         xhr2.onload = () => {
//             if (xhr2.status === 200) {
//                 commentData = JSON.parse(xhr2.responseText);
//                 console.log('\n Comments: ', commentData);
//             } else if (xhr2.status === 404) {
//                 console.log('Data not found.');
//             } else {
//                 throw (Error(xhr2.statusText));
//             }
//         }

//         xhr2.onerror = () => {
//             throw (Error(xhr2.statusText));
//         }

//         xhr2.send();


//     } else if (xhr1.status === 404) {
//         console.log('Data not found.');
//     } else {
//         throw (Error(xhr1.statusText));
//     }
// }

// xhr1.onerror = () => {
//     throw (Error(xhr1.statusText));
// }

// xhr1.send();
