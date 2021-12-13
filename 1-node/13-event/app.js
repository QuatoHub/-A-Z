const EventEmitter = require('events');
const emitter = new EventEmitter();

// 특정 이벤트를 제거하기 위해서는 콜백을 따로 빼줘야한다.
const callback1 = (args) => {
    console.log('first callback - ', args);
};

emitter.on('ellie', callback1)

emitter.on('ellie', (args) => {
    console.log('second callback - ', args);
})

emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.removeListener('ellie', callback1)
emitter.emit('ellie', { message: 3 });

/* result
    first callback -  { message: 1 }
    second callback -  { message: 1 }
    first callback -  { message: 2 }
    second callback -  { message: 2 }
    second callback -  { message: 3 }
*/