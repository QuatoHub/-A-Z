console.log('logging...');
console.clear();

// log level
console.log('log');      // 개발
console.info('info');    // 정보
console.warn('warn');    // 경보
console.error('error');  // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!'); // 참이 아닐 때만 출력
console.assert(2 === 2, 'same!');     // 참이면 출력되지 않음

// print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop'); // 동일한 레이블이 시작하고 끝나기까지 걸리는 시간을 보여준다.

// counting
function a() {
    console.count('a function'); // 해당 레이블이 몇번 호출되었는지 알 수 있다.
}
a();
console.countReset('a function'); // 해당 레이블 호출 리셋
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace(); // 어디서 함수를 호출하였는지 추적할 수 있다.
}
f1();