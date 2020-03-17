const axios = require('axios');

// axios call
axios.get('https://jsonplaceholdere.typicode.com/posts/1')
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error));


// axios chaining
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(({ data }) => {
//             console.log('\n Post: ', data);
//             // console.log('\n User ID: ', data.userId);
//             return data.userId;
//         })
//     .then((id) => {
//         console.log('\n User ID: ', id);
//     })
//     .catch((error) => console.log(error));

// axios nested call
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(({ data }) => {
//             console.log('\n Post: ', data);
//             console.log('\n User ID: ', data.userId);
//             return axios.get(`https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`);
//         })
//     .then(({ data }) => {
//         console.log('\n Comments: ', data);
//     })
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Finished!'));
