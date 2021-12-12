// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');
const buf = Buffer.from('Hi');
console.log(buf);             // <Buffer 48 69>
console.log(buf.length);      // 2
console.log(buf[0]);          // 72
console.log(buf[1]);          // 105
console.log(buf.toString());  // default 값이 utf-8

// create
const buf2 = Buffer.alloc(2);         // 빈메모리를 찾아 초기화
const buf3 = Buffer.allocUnsafe(2);   // alloc보다 빠르나, 초기화가 되지 않아 빈메모리가 없으면 다른 값이 나올 수 있다.
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString()); // Hi
console.log(buf3.toString()); // Hi

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString()); //HiHiHi
