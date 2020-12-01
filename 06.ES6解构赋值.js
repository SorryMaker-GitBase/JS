//ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值
//数组结构；
let numArray = [1, 2, 3, 4, 5, 6, 7, 8];
let [one, two, three, four, five, six, seven, eight] = numArray;
console.log(one); //1
console.log(eight); //9

//对象结构
const actorLiu = {
    name: "刘德华",
    age: "50",
    sing: function () {
        console.log("会唱歌")
    }
};
//注意，属性名需要和对象中的属性名相同,顺序无所谓
let {name,sing,age} = actorLiu;
console.log(name);
console.log(age);
console.log(sing);