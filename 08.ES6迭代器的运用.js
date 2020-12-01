//迭代器：
//对象内部，提供一个按指定方式for..of..来遍历对象属性的一个方法
let myClass = {
    className: "高中一班",
    classMates: ['小明', '小张', '小李', '小王', '小曾'],
    //1.创建一个iterator
    [Symbol.iterator]() {
        //定义一个索引下标
        let index = 0;
        //需要返回一个对象
        return {
            //返回的对象里面有一个next方法
            next: () => {
                //next方法的返回值是一个包含value和done属性的对象
                //并通过索引下表判断是否遍历啊完成
                if (index < this.classMates.length) {
                    const result =  {
                        value: this.classMates[index],
                        done: false,
                    }
                    //下标自增
                    index++;
                    return result;
                }else{
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        };
    }
}
//需求是去遍历myClass.classMates
//1.直接运行会报错，myClass is not iterable
for (let i of myClass) {
    console.log(i)
};