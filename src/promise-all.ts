const axios = require('axios');

const API = {
    POSTS: 'https://jsonplaceholder.typicode.com/posts', // 100
    TODOS: 'https://jsonplaceholder.typicode.com/todos', // 200
    USERS: 'https://jsonplaceholder.typicode.com/users'  // 10
}

let posts = axios(API.POSTS);
let todos = axios(API.TODOS);
let users = axios(API.USERS);

// check current status
// console.log(posts);

// Promise All
Promise.all([posts, todos, users])
    .then(([p, t, u]) => {
        console.log('\n Posts: ', p.data.length);
        console.log('\n Todos: ', t.data.length);
        console.log('\n Users: ', u.data.length);
    }).catch((error) => {
        let msg = `Error: ${error.response.status} - ${error.response.statusText}` +
            ` in API Call: ${error.response.config.url}`;
        console.log(msg)
    });

// Promise All Settled
// Promise.allSettled([posts, todos, users])
//     .then((results) => {
//         results.forEach(result => {
//             if (result.status === 'fulfilled') {
//                 console.log(`Request ${result.status}. Data : ${result.value.data.length}`);
//             } else {
//                 console.log(`Request ${result.status} due to ${result.reason}.`);
//             }
//         });
//     });


// Promise Race
// Promise.race([users, todos])
//     .then((result) => {
//         console.log('\n Data: ', result.data.length);
//     }).catch((error) => {
//         console.log(error)
//     });