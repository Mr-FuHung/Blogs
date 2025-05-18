# xhr
```js{1,7}
fetch('https://baidu.com').then(resp=>{//默认get
  //resp身上有很多方法
 return resp.json()//返回响应体的promise，等待服务器数据完成
}).then(res=>{//服务器数据完成
  res//服务器数据 
})
fetch('https://baidu.com',{
  method:"POST",//方法
  headers:{},//请求头
  body:{}//请求体/入参
})
```
---
# 同源策略
<font color="red">源 = 协议 + 主机 + 端口；</font>三者必须一致，否则为跨域。
跨域是浏览器拦截了服务器响应结果，所以请求可以正常发出去，但是浏览器看不到响应结果
img、link、script一般允许跨越
AJAX通常不允许跨越

