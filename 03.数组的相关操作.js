/*
    push 从数组末尾添加一个数据
    pop 从数组末尾删除一个数据
    unshift 从数组开头添加一个数据
    shiift 从数组开头删除一个数据
*/
var arrColor = ["red", "yellow", "green"];
console.log(arrColor.push("black"));     // 4 返回添加后的arr长度
console.log(arrColor);                   //[ 'red', 'yellow', 'green', 'black' ]
console.log(arrColor.pop());             //black 返回删除掉的元素
console.log(arrColor);                   //[ 'red', 'yellow', 'green' ]
console.log(arrColor.unshift("pink"));   // 4 返回添加后的arr长度
console.log(arrColor);                   //[ 'pink', 'red', 'yellow', 'green' ]
console.log(arrColor.shift());           //pink 返回删除掉的元素
console.log(arrColor);                   //[ 'red', 'yellow', 'green' ]

/*
    slice() 提取指定一个或多个元素，返回一个新的数组，不改变原来的数组
    slice[起始位置，（结束位置）)
    只有一个参数表示从起始位置到末尾，
    两个参数表示从起始位置到结束位置，不包含结束位置的元素
*/
var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sliceArr01 = arrNum.slice(3);
console.log(sliceArr01);  //[3, 4, 5, 6, 7, 8, 9, 10]
var sliceArr02 = arrNum.slice(2, 7);
console.log(sliceArr02);  //[ 2, 3, 4, 5, 6 ]
//原数组没发生变化
console.log(arrNum);  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    splice(),会改变原数组
    参数：
    splice(起始位置，需要删除的数据个数，添加的新数据1，添加的新数据2,添加的新数据3....)
*/
var arrNumCHN = ['一', '二', '三', '猪', '狗', '五', '六', '七', '猴', '九'];
//不添加新数据就是删除
console.log(arrNumCHN.splice(3, 2));     //[ '猪', '狗' ] 返回删除的数据组成的数组
console.log(arrNumCHN);                  //['一', '二', '三', '五', '六', '七', '猴', '九']
//添加新数据，删除数量为0，即增加数据
console.log(arrNumCHN.splice(3, 0, '四')); //[] 返回删除的数据组成的数组,没有删除所以为空
console.log(arrNumCHN);                  ////['一', '二', '三', '四', '五', '六', '七', '猴', '九']
//删除一个，添加一个，即为更改
console.log(arrNumCHN.splice(7, 1, '八')); //['猴'] 返回删除的数据组成的数组
console.log(arrNumCHN);                  //['一', '二', '三', '四', '五', '六', '七', '八', '九']

/*
    concat() 合并数组
*/
var concatArr01 = [1, 2, 3];
var concarArr02 = [4, 5, 6];
console.log(concatArr01.concat(concarArr02)); //[ 1, 2, 3, 4, 5, 6 ]

/*
    reverse()反转数组，会改变原数组
*/
var revArr = [9, 33, 8, 4, 5, 2, 67, 45, 1];
console.log(revArr.reverse());      //[1, 45, 67, 2, 5, 4, 8, 33, 9] 和数据大小没有关系

/*
    sort()排序
*/
var sorArr = [2, 3, 55, 36, 77, 8, 9, 19];
console.log(sorArr.sort());     //[19, 2, 3, 36, 55, 77, 8, 9] 不带参数是按照Unicode编码排序，不符合实际一般需求

//设定回调函数作为参数
var srotMath = function (a, b) {
    if (a > b) {
        return 1;
    } else { 
        return -1 
    }
}
console.log(sorArr.sort(srotMath));     //[2,  3,  8,  9, 19, 36, 55, 77] 从小到大排序