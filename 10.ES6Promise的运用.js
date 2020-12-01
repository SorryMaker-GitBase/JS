//promise封装Ajax
const ajaxPromise = (type,url) => {
    return new Promise((resolve, reject) => {
        //1.创建xhr对象
        const xhr = XMLHttpRequest();
        //2.xhr初始化，设定参数
        xhr.open(type, url);
        //3.发送
        xhr.send();
        //4.监听状态变化,绑定事件，处理结果
        xhr.onreadystatechange = function () {
            //判断状态
            if (xhr.readState === 4) {
                //判断响应状态码
                if (xhr.staus >= 200 && xhr.status < 300) {
                    //成功
                    resolve(xhr.response);
                } else {
                    reject(xhr.staus)
                }
            }
        }
    });
}


ajaxPromise("GET",".......").then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
})