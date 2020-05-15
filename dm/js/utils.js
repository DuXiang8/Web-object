// 定义一个js外部文件
// 存储各种要使用的函数
// 将来通过外部文件的形式,来加载js文件,执行js函数


// 设定cookie函数

function mySetCookie(key,value,time){
    // JavaScript中,时间单位默认是毫秒
    // 获取当前时间对象
    const nowTime = new Date();
    // 当前时间的时间戳和服务器时间,有8个小时的时差 -8小时的毫秒数
    // 设定cookie时效时间 + 时间的毫秒数
    let t = nowTime.getTime() - (8*60*60*1000) + time*1000;
    // 将新的时间戳,设定给 时间对象
    nowTime.setTime(t);
    // 通过三元运算符,给 expires 赋值 如果没有时间参数,赋值空字符串,有时间参数,赋值时间对象
    document.cookie = `${key}=${value};expires=${time === undefined ? '' : nowTime };path=/`;
}


// 获取cookie函数

function myGetCookie(cookieStr){
    const obj = {};
    const arr1 = cookieStr.split('; ');
    arr1.forEach((item)=>{
        const newArr = item.split('=');
        obj[newArr[0]] = newArr[1];
    })
    return obj;
}


// get方式,ajax请求

function getAjaxSend(url , cb ){
    // 1,创建ajax实例化对象
    const xhr = new XMLHttpRequest();

    // 2,设定ajax请求信息
    // 如果有参数,可以直接拼接,写在url中
    xhr.open('get' , url);

    // 3,发送请求
    xhr.send();

    // 4,接收相应
    xhr.onload = function(){
        // 调用参数函数,执行内容是响应体
        cb(xhr.response);
    }
}



// post方式,ajax请求

function postAjaxSend(url , cb , dataStr){
    // 1,创建ajax实例化对象
    const xhr = new XMLHttpRequest();

    // 2,设定ajax请求信息
    xhr.open('post' , url);

    // post方式,必须要设定请求头
    xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');

    // 3,发送请求
    xhr.send(dataStr);

    // 4,接收相应
    xhr.onload = function(){
        // 调用参数函数,执行内容是响应体
        cb(xhr.response);
    }
}