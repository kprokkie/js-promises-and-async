const axios = require('axios');

const API = {
    POSTS: 'https://jsonplaceholder.typicode.com/posts', // 100
    TODOS: 'https://jsonplaceholder.typicode.com/todos', // 200
    USERS: 'https://jsonplaceholder.typicode.com/users'  // 10
}

async function parallelCalls() {
    await Promise.all([
        (async () => {
            const { data: posts } = await axios(API.POSTS);
            return posts;
        })(),
        (async () => {
            const { data } = await axios(API.TODOS);
            return data;
        })(),
        (async () => {
            const { data } = await axios(API.USERS);
            return data;
        })()
    ]).then(([posts, todos, users]) => {
        console.log('\n Posts: ', posts.length);
        console.log('\n Todos: ', todos.length);
        console.log('\n Users: ', users.length);
    });
}

parallelCalls();