console.log('hello');

// 본인이 만든 scripts 실행어를 사용할 때에는 run을 추가해준다.
// ex) npm run gogo

const _ = require('underscore');

// 💩
const array = [1, 2];
_.forEach(array, (num) => console.log(num));

array.forEach(num => {
    console.log(num);
})

// 필요없는 npm을 삭제할때는 'npm un(install) 패키지명'
// 업데이트가 필요할때는 'npm outdated'로 업데이트가 필요한 패키지 확인
// 'npm update 패키지명'로 업데이트 가능

// nodemon은 개발할때만 필요하므로 'npm i nodemon --save-dev'을 이용하여 설치!