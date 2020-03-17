const axios = require('axios');

async function fetchData() {
    let promise = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(promise);
    promise.then(({ data }) => console.log(data));
}

// async function fetchData() {
//     // await return response not promise
//     let promise = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(promise);
//     promise.then(({ data }) => console.log(data));
// }

// async function fetchData() {
//     let { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log('\n Post: ', posts);
//     let { data: comments } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${posts.userId}/comments`);
//     console.log('\n Comments: ', comments);
// }

// handle error
// async function fetchData() {
//     try {
//         let { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log('\n Post: ', posts);
//         let { data: comments } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${posts.userId}/comments`);
//         console.log('\n Comments: ', comments);
//     } catch (error) {
//         console.log('Error.', error);
//     } finally {
//         console.log('Finished.');
//     }
// }

function checkData() {
    console.log('Check Data.');
}

fetchData();
checkData(); // this will execute, it will not wait for 


