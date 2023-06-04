<template>
  <!--通知管理-->
    <div class="InformView">
        <div class="top">
            <el-button
                    text
                    @click="open">
                <button>
                    <img src="../../public/InforView/add.png"
                         alt="">
                    <span>发布</span>
                </button>
            </el-button>
        </div>
        <div class="main">
            <table>
                <tr>
                    <th>
                        编号
                    </th>
                    <th>
                        通知内容
                    </th>
                    <th>
                        发布时间
                    </th>
                    <th>
                        发布人
                    </th>
                    <th>
                        发布状态
                    </th>
                    <th>
                        操作
                    </th>
                </tr>
                <tr v-for="(item,index) in 8"
                    :key="index">
                    <td>
                        12
                    </td>
                    <td>
                        adwadaw
                    </td>
                    <td>
                        2002-6-18
                        23:15:22
                    </td>
                    <td>
                        辅导员
                    </td>
                    <td>
                        <div>
                            <el-switch
                                    v-model="value"
                                    class="ml-2"
                                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                            />
                            <span>发布</span>
                        </div>
                    </td>
                    <td>
                        <el-button
                                round>
                            编辑
                        </el-button>
                        <el-button
                                type="danger"
                                round>
                            删除
                        </el-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script
    setup>
//element组件
import {
    ElMessageBox
} from 'element-plus'
import {
    ref,
    reactive,
    onMounted,
    getCurrentInstance
} from 'vue'
// 发布按钮弹窗
const open = () => {
    ElMessageBox.alert(
        '<strong>发布菜单</strong>',
        'HTML String',
        {
            dangerouslyUseHTMLString: true,
        }
    )
}
// 表单展示
const value = ref(true)

// 获取通知分页
import {
    notice
} from "@/axios/api"

onMounted(() => {
    notice().then(res => {
        console.log(res)
    })
})

</script>

<style
    scoped
    lang="less">
.InformView {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  //头部发布按钮
  .top {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    button {
      width: 100px;
      height: 40px;
      background-color: #67c23a;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }

      span {
        font-size: 16px;
        color: #fff;

      }
    }
  }

  //    表单
  .main {
    width: 100%;
    flex: 1;

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;

      tr {
        height: 50px;

        &:hover {
          background-color: #f5f7fa;
        }

        td, th {
          border: 1px solid #ccc;

          &:nth-child(1) {
            width: 4%;
          }

          &:nth-child(2) {
            width: 17%;
          }

          &:nth-child(3) {
            width: 20%;
          }

          &:nth-child(4) {
            width: 20%;
          }

          &:nth-child(5) {
            width: 20%;
          }

          &:nth-child(6) {
            width: 19%;
          }
        }

        th {
          color: #a89d99;
          font-size: 15px;
        }

        td {
          font-size: 14px;
          color: #787a7d;
          padding-left: 15px;

          div {
            height: 100%;
            display: flex;
            align-items: center;

            .ml-2 {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
