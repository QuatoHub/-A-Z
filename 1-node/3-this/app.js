function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('-----class-----')
        console.log(this);
        console.log(this === global);
    }
}
const a = new A(1);
a.memberFunction();


// 브라우저의 this는 global이고 node는 module에 있는 exports를 나타낸다.
console.log('----global scope----')
console.log(this);
console.log(this === module.exports);
