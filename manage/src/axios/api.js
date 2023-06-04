// 对请求接口进行封装

// 引入封装好的axios实例
import requests
    from './axios.js';

// 通知管理 start
let notice = (params = {}) => {
    return requests.get('/notice/page', params)
}

// 通知管理 end
// 登录start
let login = (params = {}) => {
    return requests.post('/login', params)
}
// 登录end
// 获取用户分页start（用户管理）
let page = (currentPage = 1, size = 10,text = '') => {
    return requests.get(`/page?currentPage=${currentPage}&size=${size}&text=${text}`)
}
//获取用户分页end
// 删除单个用户start（用户管理）
let deleteAdmin = (id) => {
    return requests.post(`/deleteAdmin?id=${id}`)
}
// 删除单个用户end
// 新增用户start(用户管理)
let addAdmin = (params = {}) => {
    return requests.post(`/addAdmin`, params)
}
//新增用户end
//批量删除用户start（用户管理）

let deleteAdmins= (params = {}) => {
    return requests.post('/deleteAdmins', params)
}
//批量擅长用户end
// 更新状态start（用户管理）
let adminInfo = (params = {}) => {
    return requests.post(`/admin-info`, params)
}
// 更新状态end（用户管理）
export {
    notice,
    login,
    page,
    deleteAdmin,
    addAdmin,
    deleteAdmins,
    adminInfo
}
