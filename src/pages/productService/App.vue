<script setup>
import $ from "jquery";
import { ref } from "vue";
const params = new URLSearchParams(window.location.search);
const id = ref(params.get("id"));
</script>
<template>
  <div class="productService">
    <TopPages />
    <div>
      <div :class="{ prodSafety: true, prodSafety_1: id == 1 }" v-if="id == 1">
        <div class="security">
          <div class="banner">
            <img src="@/assets/img1/banner_prod1.jpg" width="100%" />
            <div class="text">
              <p>
                产线智能制造 <br />
                守护每一颗“芯”
              </p>
            </div>
          </div>
          <div class="security_one">
            <div class="title">
              <h5>热安全仿真与建模</h5>
              <p>
                以热安全为主线，揭示电池滥用、失效和蔓延的机理，
                服务主动安全和被动安全
              </p>
            </div>

            <img src="@/assets/img1/hot1.png" width="100%" />
          </div>
          <div class="security_two">
            <div class="title">
              <h5>热失控机理</h5>
              <p>高比能、高安全等多条电池路线的尽头均含安全问题。</p>
              <p>
                我们提供从热失控触发方案设计、实验测试、机理分析等的一站式服务。深度分析机械滥用、电滥用、热滥用等模式导致的电池热失控，从微观机理到宏观现象，探明关键机理与副反应，在化学反应层面量化热失控，奠定热失控建模、调控等的基础。
              </p>
            </div>

            <div class="img">
              <div class="left_img">
                <img src="@/assets/img1/hot2.png" width="100%" />
              </div>
              <div class="right_img">
                <img src="@/assets/img1/hot3.png" width="100%" />
              </div>
            </div>
          </div>
          <div class="security_three">
            <h5>热蔓延仿真</h5>
            <div class="runaway">
              <div class="wayLeft">
                <p>
                  电池系统包含“热-气-电-燃烧”等多条路径，单体出发热失控后会蔓延到模组及电池包。
                </p>
                <p>
                  我们建立电池单体的三维热失控机理模型、系统热-气全耦合的热失控蔓延模型，并基于
                  模型精准预测电池系统失效的“失效热溢-气体流动-耦合换热”过程，精准解析热失控
                  与蔓延的能流，并进行能流解析与调控方案研究。
                </p>
                <span>点击查看</span>
              </div>
              <div class="wayRight">
                <img src="@/assets/img1/hot4.png" width="100%" />
                <img src="@/assets/img1/hot5.png" width="100%" />
              </div>
            </div>
          </div>
          <div class="security_four">
            <div class="title">
              <h5>安全预警辅助素材</h5>
              <p>安全是电池资产要坚守的底线，安全预警一直是行业难题。</p>
              <p>
                我们从第一性原理出发，进行缺陷电池数字孪生模拟，整理电池失效数据库，热电耦合失效机理模型结合AI模型，融合核心算法，提升检出率，降低误报率，增加提前预警时间，预警准确率>93%，广泛用于电动汽车和储能领域。
              </p>
            </div>
            <div class="img">
              <h5>机理-模型-数据三位一体的电池主动安全管理体系</h5>
              <img src="@/assets/img1/hot6.png" width="100%" />
            </div>
          </div>
          <div class="security_five">
            <div class="earlyLeft">
              <h5>热安全预警</h5>
              <p>安全是电池资产要坚守的底线，安全预警一直是行业难题。</p>
              <p>
                我们从第一性原理出发，进行缺陷电池数字孪生模拟，整理电池失效数据库，热电耦合失效机理模型结合AI模型，融合核心算法，提升检出率，降低误报率，增加提前预警时间，预警准确率>93%，广泛用于电动汽车和储能领域。
              </p>
              <span>点击查看</span>
            </div>
            <div class="earlyRight">
              <img src="@/assets/img1/hot7.png" width="100%" />
            </div>
          </div>
          <div class="security_six">
            <div class="design">
              <div class="designLeft">
                <h5>热管理设计</h5>
                <p>
                  良好的热管理不仅能有效降低安全风险，还能提升整车能量管理效率。
                </p>
                <p>
                  我们从单体到电池包建立适应多环境、多工况的热管理数字孪生模型，AI数据驱动将仿真时间从4h缩短至5min，且全域温度预测误差<1℃。我们提供风冷、直冷、浸没式液冷、两相浸没式冷却等多种热管理设计方案，满足不同电池包的需求。
                </p>
              </div>
              <div class="designRight">
                <img src="@/assets/img1/hot8.png" width="100%" />
              </div>
            </div>
            <div class="designImg">
              <img src="@/assets/img1/hot9.png" width="100%" />
            </div>
          </div>
          <div class="security_seven">
            <div class="assistant">
              <div class="Bigtitle">
                <h5>热管理辅助素材</h5>
              </div>
              <div class="assist">
                <h5>无液冷工况</h5>
                <img src="@/assets/img1/hot10.png" width="100%" />
              </div>
              <div class="assist">
                <h5>液冷工况</h5>
                <p>
                  从单体到模组到电池包建立了完善的多工况多环境热模型；<br />
                  模型充放电各工况电池温度最大误差不超过10%；
                </p>
                <img src="@/assets/img1/hot11.png" width="100%" />
              </div>
            </div>
          </div>
          <div class="security_eight">
            <h5>热管理辅助素材</h5>
            <div class="material">
              <img src="@/assets/img1/hot12.png" width="100%" />
            </div>
            <div class="material2">
              <img src="@/assets/img1/hot13.png" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <div :class="{ prodSafety: true, prodSafety_2: id == 2 }" v-if="id == 2">
        <div class="security">
          <div class="banner">
            <img src="@/assets/img1/banner_prod2.jpg" width="100%" />
            <div class="text">
              <p>
                产线智能制造 <br />
                守护每一颗“芯”
              </p>
            </div>
          </div>
          <img src="@/assets/img1/jie2.jpg" width="100%" />
        </div>
      </div>
      <div :class="{ prodSafety: true, prodSafety_3: id == 3 }" v-if="id == 3">
        <div class="security">
          <div class="banner">
            <img src="@/assets/img1/banner_prod3.jpg" width="100%" />
            <div class="text">
              <p>
                产线智能制造 <br />
                守护每一颗“芯”
              </p>
            </div>
          </div>
          <img src="@/assets/img1/jie3.jpg" width="100%" />
        </div>
      </div>
    </div>
    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.productService {
  padding-top: 85px;
  .prodSafety {
    .security {
      .banner {
        position: relative;
        .text {
          position: absolute;
          left: 10%;
          top: 50%;
          transform: translateY(-50%);
          p {
            font-size: 44px;
            color: #fff;
            margin: 0;
          }
        }
      }
      .security_one {
        padding: 60px 10% 200px 10%;
        .title {
          margin-bottom: 70px;
          h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 30px;
          }
          p {
            font-size: 16px;
            color: #010101;
          }
        }
      }
      .security_two {
        padding: 60px 10% 200px 10%;
        position: relative;
        &::after {
          content: "";
          background-color: #2a57eb;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 60%;
        }
        .title {
          margin-bottom: 160px;
          width: 50%;
          position: relative;
          z-index: 1;
          h5 {
            font-size: 36px;
            color: #ffffff;
            margin-bottom: 30px;
          }
          p {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 15px;
          }
        }
        .img {
          display: flex;
          justify-content: space-between; /* 左右贴边 */
          align-items: center;
          position: relative;
          width: 96%;
          margin: 0 auto;
          z-index: 1;
          .left_img {
            width: 50%;
          }
          .right_img {
            width: 45%;
          }
        }
      }
      .security_three {
        padding: 60px 10% 110px 10%;
        background-color: #fcfcfc;
        > h5 {
          font-size: 36px;
          color: #010101;
          margin-bottom: 30px;
        }
        .runaway {
          display: flex;
          justify-content: space-between; /* 左右贴边 */
          align-items: center;
          .wayLeft {
            background-color: #fff;
            width: 60%;
            padding: 60px 140px 60px 60px;
            box-shadow: -4px 5px 9px -1px #e0e0e0;
            border-radius: 20px;
            p {
              font-size: 16px;
              color: #010101;
              margin-bottom: 30px;
            }
            span {
              width: 160px;
              height: 50px;
              text-align: center;
              background-color: #2a57eb;
              color: #ffffff;
              font-size: 20px;
              display: inline-block;
              line-height: 50px;
              border-radius: 30px;
              margin-top: 30px;
            }
          }
          .wayRight {
            padding: 15px;
            width: 35%;
            box-shadow: -4px 5px 9px -1px #e0e0e0;
            border-radius: 20px;
            background-color: #fff;
          }
        }
      }
      .security_four {
        background-color: #f4f9ff;
        padding: 90px 10% 120px 10%;
        .title {
          margin-bottom: 160px;
          width: 50%;
          position: relative;
          z-index: 1;
          h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 30px;
          }
          p {
            font-size: 16px;
            color: #010101;
            margin-bottom: 15px;
          }
        }
        .img {
          h5 {
            font-size: 24px;
            color: #010101;
            text-align: center;
            margin-bottom: 80px;
          }
        }
      }
      .security_five {
        padding: 80px 10% 110px 10%;
        background-color: #fcfcfc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .earlyLeft {
          width: 30%;
          h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 30px;
          }
          p {
            font-size: 16px;
            color: #010101;
          }
          span {
            width: 160px;
            height: 50px;
            text-align: center;
            background-color: #2a57eb;
            color: #ffffff;
            font-size: 20px;
            display: inline-block;
            line-height: 50px;
            border-radius: 30px;
            margin-top: 30px;
          }
        }
        .earlyRight {
          width: 53%;
        }
      }
      .security_six {
        padding: 80px 10% 200px 10%;
        background-color: #fcfcfc;
        .design {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .designLeft {
            width: 50%;
            h5 {
              font-size: 36px;
              color: #010101;
              margin-bottom: 30px;
            }
            p {
              font-size: 16px;
              color: #010101;
            }
          }
          .designRight {
            width: 38%;
          }
        }
        .designImg {
          width: 90%;
          margin: 0 auto;
          margin-top: 90px;
        }
      }
      .security_seven {
        padding: 150px 10%;
        background-color: #f4f9ff;
        .assistant {
          .Bigtitle {
            h5 {
              font-size: 36px;
              color: #010101;
              margin-bottom: 40px;
            }
          }
          .assist {
            h5 {
              font-size: 20px;
              color: #010101;
            }
            p {
              font-size: 16px;
              color: #010101;
              margin: 30px 0 0 0;
            }
            img {
              margin: 100px 0;
            }
          }
        }
      }
      .security_eight {
        padding: 80px 10% 200px 10%;
        background-color: #fcfcfc;
        > h5 {
          font-size: 36px;
          color: #010101;
          margin-bottom: 40px;
        }
        .material {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
