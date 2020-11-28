//call和apply 用来改变函数调用时，this的指向
//bind在申明的时候绑定this指向
var teacher = {
    name: "王老师"
}
var students = {
    name: "小明",
    play: function () {
        console.log(this)
        console.log(this.name + '喜欢打篮球');
    },
    eat:function(){
        for (const i in arguments) {
            console.log(this.name+"喜欢吃"+arguments[i]);
        }
    },
    //bind
    teach:function(){
        console.log(this.name+"会讲课")
    }.bind(teacher)
}

students.play();
//this --> students
//小明喜欢打篮球

var playFun = students.play;
playFun();
//this --> window
//undefine喜欢打篮球

students.play.call(teacher);
students.play.apply(teacher)
playFun.call(teacher);
playFun.apply(teacher);
//this --> teacher
//王老师喜欢打篮球

/*
bind
*/
students.teach();
//王老师会讲课

/*
    call和apply的区别：在方法需要传入参数时体现
    call 参数在重定向的对象后面依次传入
    apply 参数在重定向的对象后面,以一个数组的形式传入
*/
students.eat('火锅',"烧烤","麻辣烫");
//小明喜欢吃火锅
//小明喜欢吃烧烤
//小明喜欢吃麻辣烫

students.eat.call(teacher,"火锅","烧烤","麻辣烫");
// 王老师喜欢吃火锅
// 王老师喜欢吃烧烤
// 王老师喜欢吃麻辣烫
students.eat.apply(teacher,["火锅","烧烤","麻辣烫"]);
// 王老师喜欢吃火锅
// 王老师喜欢吃烧烤
// 王老师喜欢吃麻辣烫