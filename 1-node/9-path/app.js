const path = require('path');

// POSIX (Unix : Max, Linux): 'Users/temp/myfile.html'
// Window: 'C:\\ temp\\myfile.html'

console.log(__dirname);     // 폴더 경로 '/users/temp'
console.log(__filename);    // 파일 경로

console.log(path.sep);          // 경로 구분자
console.log(path.delimiter);    // 환경 변수 구분자

// basename
console.log(path.basename(__filename));         // app.js
console.log(path.basename(__filename, '.js'));  // app


// dirname
console.log(path.dirname(__filename));  // 폴더 경로 '/users/temp'

// extension
console.log(path.extname(__filename));  // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);
/*
{
  root: '/',
  dir: '/Users/temp',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/
const str = path.format(parsed);
console.log(str);  // /Users/temp/app.js

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));   // true
console.log('isAbsolute?', path.isAbsolute('../'));       // false

// normalize
console.log(path.normalize('./folder///sub'));   // folder/sub

// join
console.log(__dirname + '/' + 'image');   // 운영체제에 따라 오류가 발생할 수 있다.
console.log(__dirname + path.sep + 'image'); // /Users/temp/image
console.log(path.join(__dirname, 'image'));  // /Users/temp/image