//引入模块事件
var events=require('events');
//创建EventEmitter事件
var myEmitter=new events.EventEmitter();
//注册事件
myEmitter.on('someEvent',function (msg ) {
    console.log(msg)
    setImmediate(function () {//异步执行
        console.log(msg)
    })

})
//触发事件
myEmitter.emit('someEvent','实现事件并传递此参数到注册事件的毁掉函数中')

console.log('1')