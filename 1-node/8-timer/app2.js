console.log('code1');
// console.time('timeout 0');
setTimeout(() => {
    // console.timeEnd('timeout 0'); // 0.673ms => 실제로는 0초보다 시간이 좀 더 걸린다.
    console.log('setTimout 0');
}, 0);

console.log('code2');
setImmediate(() => {
    console.log('setImmediate'); // setImmediate와 setTimeout은 큰 차이가 없다.
});

console.log('code3');
process.nextTick(() => {
    console.log('proccess.nextTick');
});

/* 실행 순서! 
1. code1
2. code2
3. code3
4. proccess.nextTick
5. setImmediate
6. setTimout 0
*/