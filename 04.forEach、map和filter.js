/*
    forEach(),对数组进行遍历，没有返回值
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (item, index, arr) {
    console.log("item=" + item);
    console.log("index=" + index);
})
console.log("--------------------------------手写forEach()==>myForEach()-----------------------------------")
//手写forEach ==> myForEach()
/*
    1.forEach()需要传入一个回调函数,就自定义一个叫myForEachCallback的回调函数
    2.forEach()内部进行了循环，那么就写循环体
    3.forEach()回调函数接收三个参数item,index,arr,对应循环里面的arr[i],i,arr
*/
arr.__proto__.myForEach = function (myForEachCallback) {
    for (let i = 0; i < this.length; i++) {
        myForEachCallback(this[i], i, this)
    }
}
//调用自己写的myForEach()
arr.myForEach(function (item, index, arr) {
    console.log("item=" + item);
    console.log("index=" + index);
})
console.log("==============================================================================================")

/*
    map(),对每一项进行操作并返回，最终返回操作后的每一项组成的新数组
*/
var mapArr = arr.map(function (item, index, arr) {
    return item + "Map()";
})
console.log(mapArr);
console.log("----------------------------------------手写map()==>myMap()--------------------------------------------")
//手写map() ==> myMap()
/*
    1.map()需要传入一个回调函数,就自定义一个叫myMapCallback的回调函数
    2.map()内部进行了循环，那么就写循环体
    3.map()回调函数接收三个参数item,index,arr,对应循环里面的arr[i],i,arr
    4.map()返回由对调函数的返回值组成的新数组，定义一个newArray，将myMapCallback的反会值push进去，然后返回newArray
*/
arr.__proto__.myMap = function (myMapCallback) {
    let newMapArr = [];
    for (let i = 0; i < this.length; i++) {
        newMapArr.push(myMapCallback(this[i], i, this));
    }
    return newMapArr;
};
//调用myMap();
var myMapNewArr = arr.myMap(function (item, index, arr) {
    return item + "myMap()";
})
console.log(myMapNewArr);

console.log("==============================================================================================")
/* 
    filter(),过滤符合条件的每一项组成的新数组
*/
var filArr = arr.filter(function (item, index, arr) {
    return item > 5;
})
console.log(filArr);
console.log("----------------------------------------手写map()==>myMap()--------------------------------------------")
//手写filter() ==> myFilter()
/*
    1.filter()需要传入一个回调函数,就自定义一个叫myFilterCallback的回调函数
    2.filter()内部进行了循环，那么就写循环体
    3.filter()回调函数接收三个参数item,index,arr,对应循环里面的arr[i],i,arr
    4.filter()返回由对调函数的返回值组成的新数组，定义一个newArray
    5.如果将myFilterCallback的返回值为true，就将item,push进newArray，然后返回newArray
*/
arr.__proto__.myFilter = function (myFilterCallback) {
    let newFilArr = [];
    for (let i = 0; i < this.length; i++) {
        if (myFilterCallback(this[i], i, this)) {
            newFilArr.push(this[i]);
        }
    }
    return newFilArr;
};
//调用myFilter()
var newFilArr = arr.myFilter(function (item, index, arr) {
    return item > 3;
})
console.log(newFilArr);