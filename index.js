const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        fs.writeFile('./result/posts.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log('File Created')
        });
    });