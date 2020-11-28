/**
 * some(),判断数组中是否存在满足条件的元素，如果存在，返回true,否则返回false
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.some(function (item, index, arr) {
    return item > 0;
}))
console.log('----------------------手写some() ==> mySome()------------------------')
/**
 * 1.some()接收一个回调函数作为参数，自定义一个mySomeCallback的回调函数
 * 2.some()内部对数组进行了遍历，写出循环结构
 * 3.some()回调函数接受三个参数item,index,arr,对应循环中的arr[i],i,arr
 * 4.如果循环中存在回调函数的返回值为true,则最终返回true,否则返回false，
 *   定义默认返回值为false,如果出现回调函数的返回值为true,则返回true
 */
arr.__proto__.mySome = function(mySomeCallback){
    for(let i =0;i<this.length;i++){
        if(mySomeCallback(arr[i],i,arr)){
            return true;
        };
    }
    return false;
};
//调用mySome()
console.log(arr.mySome(function(item,index,arr){
    return item > 9;
}))
console.log("================================================================================================")
/*
    every()判断数组中是否所有的元素都符合条件，符合返回true,否则返回false   
*/
console.log(arr.every(function (item, index, arr) {
    return item > 0;
}))
console.log('----------------------手写every() ==> myEvery()------------------------')

/**
 * 1.every()接收一个回调函数作为参数，自定义一个myEveryCallback的回调函数
 * 2.every()内部对数组进行了遍历，写出循环结构
 * 3.every()回调函数接受三个参数item,index,arr,对应循环中的arr[i],i,arr
 * 4.如果循环中存在回调函数的返回值为true,则最终返回true,否则返回false，
 *   定义默认返回值为true,如果出现回调函数的返回值为false,则返回false
 */
arr.__proto__.myEvery = function(myEveryCallback){
    for(let i =0;i<this.length;i++){
        if(!myEveryCallback(arr[i],i,arr)){
            return false;
        };
    }
    return true;
};
//myEvery()
console.log(arr.myEvery(function(item,index,arr){
    return item >1;
}))