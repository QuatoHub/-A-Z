const process = require('process');

console.log(process.execPath);   // node 위치
console.log(process.version);    // node 버젼
console.log(process.pid);        // process id
console.log(process.ppid);       // process 부모 id
console.log(process.platform);   // 플랫폼에 대한 정보
console.log(process.env);        // 컴퓨터에 저장된 모든 환경변수
console.log(process.uptime());   // 실행된 시간
console.log(process.cwd());      // 현재 node가 실행된 경로
console.log(process.cpuUsage()); // cpu 사용량

// task queue에 있는 모든 것이 실행되고 해당 시간이 지난 후 전달된다.
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// task queue에 무엇이 있든 제일 앞에 위치하게 해준다.
process.nextTick(() => {
    console.log('nextTick');
})

for (let i = 0; i < 100; i++) {
    console.log('for loop')
}