//生成器函数
//解决异步回调问题,
//直接调用不会执行函数体内容，还需通过使用iterator.next()调用执行
//第n次调用iterator.next()掉用传入的参数，将成为第(n-1)个yield返回的结果
//模拟情景
//获取用户信息-->获取用户订单-->获取商品信息
let getUserData = function(){
    setTimeout(function(){
        let data = "用户信息";
        console.log("获取到用户信息");
        //(2)第一次调用iterator.next()；
        iterator.next(data);
    },1000);
}
let getOrderData = function(){
    setTimeout(function(){
        let data = "订单信息";
        console.log("获取到订单信息")
        //(3)第一次调用iterator.next()；
        iterator.next(data);
    },1000);
}
let getGootsData = function(){
    setTimeout(function(){
        let data = "商品信息";
        console.log("获取到商品信息")
        //(4)第一次调用iterator.next()；
        iterator.next(data);
    },1000);
}

//使用一个生成器函数
function * getData(){
    let userData = yield getUserData();
    let orderData =  yield getOrderData();
    let goodsData =  yield getGootsData();
    console.log(userData);
    console.log(orderData);
    console.log(goodsData);
}

//生成器函数需要iterator.next()调用才能按步执行
let iterator = getData();
//(1)第一次调用iterator.next()；
iterator.next();