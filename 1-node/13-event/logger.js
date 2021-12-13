const EventEmitter = require('events');

// EventEmitter는 한번 객체를 만들면 객체 내에서 발생하는 이벤트에 한해서 들릴 수 있다.
class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started...');
        callback();
        this.emit('log', 'ended!');
    }
}

module.exports.Logger = Logger;