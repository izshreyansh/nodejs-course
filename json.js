const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

let dataBuffer = fs.readFileSync('1-json.json')

console.log(
    JSON.parse(
        dataBuffer.toString()
    )
)