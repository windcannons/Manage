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
let login = (params = {}) => {
    return requests.post('/login', params)
}
let adminInfo = (params = {}) => {
    return requests.get('/admin/info', params)
}
// 登录end

export {
    notice,
    login,
    delnotice,
    addOrUpdate,
    adminInfo
}
