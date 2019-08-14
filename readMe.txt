MVVM实现的原理：

1.通过Observer（观察者）对data做监听，并且提供订阅某个数据项变化的能力。

2.把template编译成一段document fragment(dom片段),然后解析其中的
Directive(指令),得到每一个Directive所依赖的数据项和update方法。

3.通过Watcher把上述两部分结合起来，即把Directive中的数据依赖通过
Watcher订阅在对应数据的Oberver的Dep上,。当数据变化时，就会触发 
Observer 的 Dep 上的 notify 方法通知对应的 Watcher 的 update，
进而触发 Directive 的 update 方法来更新 DOM 视图，
最后达到模型和视图关联起来。

Directive: {
    this.data = '',
    this.update = fucntion() {
        //更新dom
    }
}

Observer: {
    this.Dep: {
        this.data = '',
        this.notify = function() {
            //通知watcher的update方法
        }
    }
}

Watcher： {
    this.update = function() {

    }
}


var Event = function() {
    this.obj = {}
}

Event.prototype.on = function(eventType,fn) {
    if(!this.obj[eventType]) {
        this.obj[eventType] = []
    }
    this.obj[eventType].push(fn)   //订阅
}

 

Event.prototype.emit = function() {
    // 取第一个参数，作为eventType
    var eventType = Array.prototype.shift.call(arguments);
    //  获取事件数组
    var arr = this.obj[eventType];
    var len = arr.length;
    // 循环数组，一次执行其中的函数
    for(var i=0;i<len;i++) {
        // 直接调用arr[i]，其this指向为undefined（严格模式下）
        // 因此用apply将this指向arr[i]
        // 数组shift函数取出第一个参数，将剩下的参数传入函数中
        arr[i].apply(arr[i],arguments)
    }
}


var ev = new Event()
ev.on('click',function(a) {  // 订阅
    console.log(a)
})

ev.emit('click',1)   // 发布




