const fs = require('fs');

// 3가지 방법
// try { renameSync(....) } catch(e) {}   -> 동기
// rename(..., callback(error, data))     -> 비동기
// promises.rename().then().catch(0)      -> 비동기

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
})

console.log('hello')

fs.promises
    .rename('./text2.txt', './text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);