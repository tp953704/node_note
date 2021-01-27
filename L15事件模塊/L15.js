const EventEmitter = require('events')
const door = new EventEmitter();

/*
當監聽器被添加時返回newListener。
當監聽器被移除時返回removeListener。
*/

// emitter.addListener()
// emitter.on() 的別名。
door.on('start',(num)=>{
    console.log('觸發 start1 事件',num)
})
door.on('start',(num)=>{
    console.log('觸發 start1 事件',num)
})
door.on('end',(num)=>{
    console.log('觸發 start 事件',num)
})


// emitter.emit() 觸發事件 按照事件被註冊的順序同步地調用每個事件監聽器
door.emit("start",23)

// emitter.eventNames()
// /返回字符串（表示在當前EventEmitter對像上註冊的事件）數組：
door.eventNames()
console.log(door.eventNames())

// emitter.getMaxListeners()
// 獲取可以添加到EventEmitter對象的監聽器的最大數量，可以使用setMaxListeners()進行增加或減，
console.log(door.getMaxListeners())

// emitter.listenerCount()
// 獲取作為參數傳入的事件監聽器的計數
door.listenerCount('open')
console.log(door.listenerCount('start'))

// emtter.listeners()
// 獲取作為參數傳入的事件監聽器的數組：
console.log(door.listeners('start')[0](123))

// emitter.off()
// emitter.removeListener() 的別名，新增於Node.js 10。
const f1 = () => {
    console.log('f1 被觸發');
}
door.on('some-event', f1);
door.removeListener('some-event', f1);
console.log(door.listenerCount('some-event'))

// emitter.once()
// 添加當事件在註冊之後首次被觸發時調
door.once('onceEvent',()=>{
    // 指調用一次
})

//emitter.prependListener()
// 當使用on或addListener添加監聽器時，監聽器會被添加到監聽器隊列中的最後一個，並且最後一個被調用。使用prependListener則可以在其他監聽器之前添加並調用。

// emitter.prependOnceListener()
// 當使用once添加監聽器時，監聽器會被添加到監聽器隊列中的最後一個，並且最後一個被調用。使用prependOnceListener則可以在其他監聽器之前添加並調用。

// emitter.setMaxListeners()
// 設置可以添加到EventEmitter對象的監聽器的最大數量（默認為10，但可以增加或減少）。
door.setMaxListeners(50)