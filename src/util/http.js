/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-19 21:28:54
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-25 17:07:21
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\util\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//对于数据请求的封装封装
import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
    baseURL:'https://m.maizuo.com', //以后拿数据都从该地址拿
    timeout:10000, //超过10s就算超时
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16626290001751809785856001","bc":"110100"}' 
        //这个请求头是固定的，而X-Host则不是固定的
    }
})
http.interceptors.request.use(function(config){
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:0
      });
    return config
}),function(error){
    return Promise.reject(error)
}

http.interceptors.response.use(function(response){
    Toast.clear()
	//比如响应一些报错信息
    return response
}),function(error){
    Toast.clear()
    return Promise.reject(error)
}


export default http