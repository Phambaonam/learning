

function Person() {
    // 构造函数 Person() 定义的 `this` 就是新实例对象自己
    this.age = 0;
    console.log(`%c this`,`color: green`, this);
    let that = this;
    console.log(`%c that`,`color: green`, that);
    setTimeout(function growUp() {
        // 在非严格模式下，growUp() 函数定义了其内部的 `this`为全局对象, 
        // 不同于构造函数Person() 的定义的 `this`
        console.log(`%c this`,`color: red`, this);
        console.log(this.age);
        console.log(`%c that`,`color: green`, that);
        console.log(that.age);
        this.age++;
        that.age++;
    }, 1000);
}

var p = new Person();




function Person() {
    // 构造函数 Person() 定义的 `this` 就是新实例对象自己
    this.age = 0;
    setInterval(function growUp() {
        // 在非严格模式下，growUp() 函数定义了其内部的 `this`为全局对象, 
        // 不同于构造函数Person()的定义的 `this`
        this.age++;
    }, 3000);
}

var p = new Person();

// 在 ECMAScript 3/5 中，这个问题通过把this的值赋给变量，然后将该变量放到闭包中来解决。

function Person() {
    var self = this; 
    // 也有人选择使用 `that` 而非 `self`, 只要保证一致就好.
    self.age = 0;
    setInterval(function growUp() {
        // 回调里面的 `self` 变量就指向了期望的那个对象了
        self.age++;
    }, 3000);
}

var p = new Person();























function Person() {  
    this.age = 0;  
    setInterval(() => {
        // 回调里面的 `this` 变量就指向了期望的那个对象了
        this.age++;
    }, 3000);
}

var p = new Person();


function Person() {  
    this.age = 0;  
    setInterval( _ => {
        // 回调里面的 `this` 变量就指向了期望的那个对象了
        this.age++;
    }, 3000);
}

var p = new Person();


function Person() {  
    this.age = 0;  
    setInterval(growUp = () => {
        // 回调里面的 `this` 变量就指向了期望的那个对象了
        this.age++;
    }, 3000);
}

var p = new Person();














