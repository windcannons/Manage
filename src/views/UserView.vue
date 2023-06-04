<template>
<!--用户管理-->
<!--  <h1>用户管理</h1>-->
  <div class="box">
<!--头部搜索和功能大盒子-->
    <div class="top">
<!--      头部左边搜索盒子-->
      <div class="topLeft">
        <input type="text" placeholder="请输入学生姓名，登录账号，地址">
        <button class="btn">
          <img
              src="../../public/UserView/fdj.png"
              alt=""> 搜索</button>
      </div>
<!--      头部右边按钮盒子-->
      <div class="topRight">
        <button class="btnRight">
          <img
              src="../../public/UserView/jia.png"
              alt=""> 添加</button>
        <button class="btnRight" style="background-color: #e6a23c">
          <img
              src="../../public/UserView/mb.png"
              alt=""> 模板</button>
        <button class="btnRight" style="background-color: #67c23a">
          <img
              src="../../public/UserView/dr.png"
              alt=""> 导入</button>
        <button class="btnBig" style="background-color:#909399">
          <img
              src="../../public/UserView/cwjl.png"
              alt=""> 错误记录</button>
        <button class="btnBig" style="background-color: #fab6b6" @click="batchRemove">
          <img
              src="../../public/UserView/plsc.png"
              alt=""> 批量删除</button>
      </div>
    </div>
<!--中间表格盒子-->
    <div class="center">
      <table class="table">
<!--        表头-->
        <thead>
        <tr>
          <th class="col-checkbox">
            <input type="checkbox" v-model="allChecked" @change="checkAll"/>
          </th>
          <th class="col-no">编号</th>
          <th class="col-avatar" style="text-align: center">头像</th>
          <th class="col-name">学生姓名</th>
          <th class="col-account">登录账号</th>
          <th class="col-role">角色</th>
          <th class="col-phone">电话</th>
          <th class="col-address">地址</th>
          <th class="col-status">状态</th>
          <th class="col-password">密码</th>
          <th class="col-operation">操作</th>
        </tr>
        </thead>
<!--        表身-->
        <tbody>
        <tr v-for="(item, index) in data" :class="{active: item.checked}" :key="index">
          <td class="col-checkbox"><input type="checkbox" v-model="item.checked" @change="checkItem"/></td>
          <td class="col-no">{{ item.id }}</td>
          <td class="col-avatar" style="text-align: center"><img :src="item.avatar" alt="头像"></td>
          <td class="col-name">{{ item.name }}</td>
<!--          账号-->
          <td class="col-account">{{ item.account }}</td>
<!--          角色-->
          <td class="col-role">{{ item.role }}</td>
          <td class="col-phone">{{ item.phone }}</td>
<!--          地址-->
          <td class="col-address">
           {{item.address}}
          </td>
<!--          状态-->
          <td class="col-status">
            <el-switch
              v-model="item.status"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          /></td>
          <td class="col-password">{{ item.password }}</td>
          <td class="col-operation">
            <button class="edit" @click="edit(index)" style="color: #909399">编辑</button>
            <button class="delete" @click="remove(index)" style="color: white ;background-color: #f56c6c">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
<!--尾部分页盒子-->
    <div class="bottom">

      <div>共： 条</div>
      <el-pagination background layout="prev, pager, next" :total="100" />
      <div class="inputBox">
        <input
            type="text"
            placeholder="10条/页"
        >
      </div>

      <div>当前： 页</div>
    </div>
  </div>
</template>


<script>
import { reactive, toRefs , ref} from 'vue'
export default {
  name: "UserView",
  setup() {
    let value = ref(false)
    // 初始化表格数据
    let state = reactive({
      data: [
        {
          id: 1,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 2,
          avatar: 'https://via.placeholder.com/50x50',
          name: '李四',
          account: 'lisi',
          role: '教师',
          phone: '138****',
          address: '北京市朝阳区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 3,
          avatar: 'https://via.placeholder.com/50x50',
          name: '王五',
          account: 'wangwu',
          role: '管理员',
          phone: '138****',
          address: '北京市东城区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 4,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 5,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 6,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 7,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 8,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 9,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },
        {
          id: 10,
          avatar: 'https://via.placeholder.com/50x50',
          name: '张三',
          account: 'zhangsan',
          role: '学生',
          phone: '138****',
          address: '北京市海淀区*****',
          status: 'false',
          password: '******',
          checked: false,
        },

      ],
      // 全选状态
      allChecked: false,
    })
    // 全选/取消全选
    const checkAll = (event) => {
      state.data.forEach(item => {
        item.checked = event.target.checked
      })
    }

    // 单选/取消单选
    const checkItem = () => {
      let allChecked = true
      state.data.forEach(item => {
        if (!item.checked) {
          allChecked = false
        }
      })
      state.allChecked = allChecked
    }

    // 编辑行数据
    const edit = (index) => {
      console.log(index)
    }

    // 删除行数据
    const remove = (index) => {
      state.data.splice(index, 1)
    }
    // 批量删除
    const batchRemove = () => {
      state.data = state.data.filter(item => !item.checked)
      state.allChecked = false
    }
    return {
      ...toRefs(state),
      checkAll,
      checkItem,
      edit,
      remove,
      batchRemove,
      value
    }
  }
}
</script>

<style
    scoped lang="less">
.box{
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 15px;
}
.top{
  width: 100%;
  height: 5vh;
  /*background-color: #4e8cee;*/
  display: flex;
  justify-content: space-between
}
.topLeft{
  width: 30%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  justify-content: flex-start
}
input{
  width: 65%;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 10px;
  margin-right: 15px;
  border: 1px solid #e0e2e9;
}
.btn{
  width: 25%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
}
img{
  width: 15px;
}

.topRight{
  width: 45%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  justify-content: space-between;
}
.btnRight{
  width: 15%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
  margin-left: 15px;
}
.btnBig{
  width: 22%;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: #4e8cee;
  color: white;
  margin-left: 15px;
}
/*中间*/
.center{
  width: 100%;
  height: auto;
  /*background-color: #4e8cee;*/
  margin-top: 15px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eceff6;
}
.table th,
.table td {
  border: 1px solid #eceff6;
  padding: 8px;
  text-align: left;
}
.active {
  background-color: #eee;
}
.col-checkbox {
  width: 8%;
}
.col-no {
  width: 5%;
}
.col-avatar{
  width: 10%;
}
.col-avatar>img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.col-name {
  width: 10%;
}
.col-account {
  width: 10%;
}
.col-role {
  width: 8%
}
.col-status{
  width: 8%
}
.col-address{
  width: 10%;
}
.col-phone{
  width: 10%;
}
.col-operation>button{
  width: 50px;
  height: 25px;
  text-align: center;
  margin-left: 10px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e5e7ed;
  font-size: 10px;
}
/*尾部*/
.bottom{
  width: 100%;
  height: 5vh;
  /*background-color: #4e8cee;*/
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  input{
    width: 100px;
    margin-left: 15px;
  }
  div{
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 5vh;
  }
  .inputBox{
    margin-left: 20px;
  }
}

</style>
