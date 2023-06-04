<template>
    <div class="HomeView">
        <div class="leBox">
            <div class="swiperBox">
                <el-carousel height="100%" :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h2 class="swpTitle">通知栏</h2>
                        <ul class="swpMsg">
                            <li>
                                <el-button type="primary">通知时间:</el-button>
                                <p>2020.12.12.12</p></li>
                            <li>
                                <el-button type="primary">通知人员:</el-button>
                                <p>2020.12.12.12</p></li>
                            <li>
                                <el-button type="primary">通知内容:</el-button>
                                <p>2020.12.12.12</p></li>
                        </ul>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="fot">
                <div class="fotLe">
                    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
                    <div class="fotTitle">作业占比</div>
                    <div ref="myleChart" id="leChart"></div>
                </div>
                <div class="fotRi">
                    <div class="fotRiTitle">成绩TOP5</div>
                    <div ref="myriChart" id="riChart"></div>
                </div>
            </div>
        </div>
        <div class="riBox">
            <div class="ri">
                <div class="riTitle">学生信息列表</div>
                <div class="riMsg">
                    <div>id</div>
                    <div>头像</div>
                    <div>姓名</div>
                    <div>状态</div>
                </div>
                <ul class="riul">
                    <li class="rili">
                        <div>id</div>
                        <div><img src="../../public/Grade/applogo.jpg" alt=""></div>
                        <div>老王</div>
                        <div>
                            <el-button type="primary">已启动</el-button>
                        </div>
                    </li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>
                    <li class="rili"></li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import {onMounted, getCurrentInstance} from "vue";

onMounted(() => {
    //右侧echarts
    let myEchartsRi = echarts.init(<HTMLElement>getCurrentInstance().proxy.$refs.myriChart)
    myEchartsRi.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    });
    // 左侧echarts
    let myEcharts = echarts.init(<HTMLElement>getCurrentInstance().proxy.$refs.myleChart)
    const data = genData(50);
    myEcharts.setOption({
        title: {
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
        },
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data: data.seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
})

function genData(count) {
    // prettier-ignore

    const seriesData = [{name: "text1", value: "1"}, {name: "text2", value: "1"}];
    return {
        seriesData: seriesData
    };

}


const tableData = [
    {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }, {
        ID: '1',
        usrPic: '',
        name: 'Tom',
        address: 'N',
    }
]

</script>

<style
    scoped lang="less">
.HomeView {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  //左侧盒子
  .leBox {
    flex: 1;
    height: 100%;
    //background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .swiperBox {
      width: 100%;
      height: 50%;
      background-color: #fff;
      border-radius: 15px;
        .el-carousel__button{
            background-color: #000;
            width: 100px;
            height: 200px;
        }
      //轮播图样式
      .el-carousel--horizontal {
        height: 100%;
        border-radius: 15px;



        .el-carousel__container {
          height: 100%;
          border-radius: 15px;

          .swpTitle {
            text-align: center;
            margin-top: 10px;
          }

          .swpMsg {
            justify-content: center;
            align-items: center;
          }

          .swpMsg > li {
            //text-align: center;
            margin-top: 15px;
            margin-left: 70px;
            display: flex;
            align-items: center;

            p {
              padding-left: 20px;
            }
          }

          .el-carousel__item h3 {
            color: #475669;
            opacity: 0.75;
            line-height: 300px;
            margin: 0;
            text-align: center;
          }

          .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
          }

          .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
          }
        }

      }

    }

    .fot {
      width: 100%;
      height: 45%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .fotLe, .fotRi {
        width: 55%;
        height: 100%;
        border-radius: 15px;
        background-color: #fff;

        .fotTitle {
          height: 10%;
          padding-left: 20px;
          font-size: 16px;
          font-weight: 800;
        }

        #leChart {
          //margin: 0;
          width: 100%;
          height: 90%;

          div {
            width: 100%;
            height: 100%;

            canvas {
              width: 100%;
              height: 100%;
            }
          }

          //display: flex;
          //padding-left: 20px;
          //justify-content: center;
          //align-items: center;
        }

        .fotRiTitle {
          height: 10%;
          padding-left: 20px;
          font-size: 16px;
          font-weight: 800;
        }

        #riChart {
          width: 100%;
          height: 90%;

          div {
            width: 100%;
            height: 100%;

            canvas {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .fotRi {
        width: 40%;
      }
    }
  }

  //右侧盒子
  .riBox {
    width: 330px;
    padding-left: 50px;
    height: 100%;

    .ri {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 25px;

      .riMsg {
        width: 100%;
        display: flex;
        justify-content: space-around;

        div {
          width: 25%;
          text-align: center;

        }
      }

      .riTitle {
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
      }

      .riul {
        width: 100%;
        height: 70%;
        //display: flex;
        //flex-direction: column;
        //align-items: center;
        overflow-x: hidden;
          &::-webkit-scrollbar{
              display: none;
          }

        .rili {
          width: 100%;
          height: 35px;
          margin-top: 10px;
          background-color: #cdd6e5;
          display: flex;
          justify-content: space-around;
          align-items: center;
          overflow: hidden;

          div {
            width: 25%;
            height: 100%;
            text-align: center;
            line-height: 250%;

            img {
              width: 35px;
              //text-align: center;
              height: 35px;
              border-radius: 35px;
            }
          }
        }
      }
    }
  }
}
</style>
