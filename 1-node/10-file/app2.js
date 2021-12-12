const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') // 덮어쓰기
    .catch(console.error);

fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ')  // 추가
    .catch(console.error);

// copy -> 비동기로 작동하기 때문에 appendFile에서 .then을 이용해야 정상적으로 복사가 가능하다.
fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);

// folder
fs.mkdir('sub-folder')
    .catch(console.error);

// 경로에 있는 모든 파일이름을 나타낸다.
fs.readdir('./')
    .then(console.log)
    .catch(console.error);