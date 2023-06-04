// 对请求接口进行封装

// 引入封装好的axios实例
import requests
    from './axios.js';

// 通知管理 start
let notice = (currentPage = 1, size = 10) => {
    return requests.get(`/notice/page?currentPage=${currentPage}&size=${size}`)
}
let delnotice = (id) => {
    return requests.post('/notice/delete?nicId=' + id)
}
let addOrUpdate = (params = {}) => {
    return requests.post(`/notice/addOrUpdate`, params)
}

// 通知管理 end
// 登录start
// 登录end

// 成绩管理start
let Transcript = (page=1,size=10,text="")=>{
  return requests.get(`/course/studentTranscript?currentPage=${page}&size=${size}&itmId=${text}`)
}

// 成绩管理end
// 获取学生列表start
let page = (params={})=>{
  return requests.get('/page',params)
}
// 获取学生列表end
export {notice,Transcript,page}
// 登录start
let login = (params = {}) => {
    return requests.post('/login', params)
}
let adminInfo = (params = {}) => {
    return requests.get('/admin/info', params)
}
// 登录end

export {
    login,
    delnotice,
    addOrUpdate,
    adminInfo
}
