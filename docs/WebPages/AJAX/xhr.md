---
# editLink: true
---
# Fetch
```js
var xhr = new XMLHttpRequest()//创建xhr对象// [!code highlight]
xhr.onreadystatechange=function(){//请求状态改变触发的函数// [!code highlight]
  xhr.readystate//0-4，判断请求状态
  //0、刚创建好对象，未调用open方法
  //1、open方法已被调用
  //2、send方法已被调用
  //3、正在接受服务器响应体消息
  //4、服务器响应的内容接受完毕
  xhr.responseText //服务器响应内容
  xhr.getResponseHeader("Content-Type") //获取响应头
}
xhr.serRequestHeader("Content-Type","application/json")//设置请求头// [!code highlight]
xhr.open("get","https://baidu.com",false)//配置请求,false异步，true同步// [!code highlight]
xhr.send('请求体参数')//发送，可以为null// [!code highlight]
```
---

# 同源策略
<font color="red">源 = 协议 + 主机 + 端口；</font>三者必须一致，否则为跨域。
跨域是浏览器拦截了服务器响应结果，所以请求可以正常发出去，但是浏览器看不到响应结果
img、link、script一般允许跨越
AJAX通常不允许跨越
