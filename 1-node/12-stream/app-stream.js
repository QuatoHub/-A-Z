const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
    highWaterMark: 8, // defualt: 64kbytes
    encoding: 'utf-8',
});

const data = [];

readStream.on('data', chunk => {
    data.push(chunk);
})

readStream.on('end', () => {
    console.log(data.join(''));
})

readStream.on('error', error => {
    console.log(error);
})