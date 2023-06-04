// 对请求接口进行封装

// 引入封装好的axios实例
import requests from './axios.js';

// 通知管理 start
let notice = (params={})=>{
  return requests.get('/notice/page',params)
}

// 通知管理 end
// 登录start
let login = (params={})=>{
  return requests.post('/login',params)
}

// 课程管理
// 登录start
let course = (currentPage=1,size=10)=>{
  return requests.get(`/course/page?currentPage=${currentPage}&size=${size}`)
}
// 添加课程
let add = (params={})=>{
  return requests.post('/course/add',params)
}
// 作业详情
let courseTaskPage  = (currentPage=1,size=10)=>{
  return requests.get(`/course/courseTaskPage?currentPage=${currentPage}&size=${size}`)
}
//
// 删除
let deletes = (params={})=>{
  return requests.post('/course/delete',params)
}




// 登录end

export {notice,login,course,add,deletes,courseTaskPage}

