//构造函数
function Teacher(name,age,likeStuf){
    this.name = name;
    this.age = age;
    this.like=function(){
        console.log(this.name+"老师喜欢"+likeStuf);
    }
}
//由于相同方法功能类似，可以将相同的方法抽象到原型对象里面
var teacherProto = {
    teach:function(){
        console.log(this.name+"会讲课");
    }
}
//prototype是每一个函数都具有的属性
Teacher.prototype = teacherProto;

var teacher01 = new Teacher("张三",35,"足球");
var teacher02 = new Teacher("李四",35,"篮球");

//每一个方法也都是一个对象，所以在每次实例化的时候，每个teacherXX中都会创建一个新的like方法
//like方法是每个实例独有的
teacher01.like();
teacher02.like();
console.log(teacher01.like==teacher02.like); //false

//teach方法存在与实例的__proto__属性中，指向相同的Teacher.prototype
teacher01.teach();
teacher02.teach();
console.log(teacher01.teach==teacher02.teach) //true
//实例的__proto__和构造函数.prototype都是指原型对象
console.log(teacher01.__proto__ == Teacher.prototype) //true

//判断一个实例是否是一个构造函数构造出来的
console.log(teacher01 instanceof Teacher); //true

