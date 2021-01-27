// 事件觸發器
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start',(num)=>{
    console.log('開始',num)
})

eventEmitter.emit('start',23)