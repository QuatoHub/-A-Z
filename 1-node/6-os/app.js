const os = require('os');

console.log(os.EOL === '\n');   // mac 줄바꿈
console.log(os.EOL === '\r\n'); // window 줄바꿈

console.log(os.totalmem());    // 총 메모리
console.log(os.freemem());     // 사용가능한 메모리
console.log(os.type());        // 운영체제 타입
console.log(os.userInfo());    // 사용자 정보
console.log(os.cpus());        // 컴퓨터의 제어 장치 
console.log(os.homedir());     // 홈 디렉토리 
console.log(os.hostname());    // 호스트 이름