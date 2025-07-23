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
          <div class="perform_one">
            <div class="title">
              <h5>性能仿真</h5>
              <p>
                我们建立电池单体-模组-系统的电性能仿真平台，提供电池状态估计、充放电控制、副反应检测、结构优化等服务，帮助企业的产品开发提质降本增效。
                同时，算法结合硬件，可形成BMS hil、Pack
                hil等解决方案，打通系统产品开发的全流程。
              </p>
            </div>
            <div class="simulation">
              <h5>仿真建模平台价值</h5>
              <div class="platformsAll">
                <div class="platList">
                  <h5>省时</h5>
                  <p>减少产品迭代次数</p>
                  <p>缩短产品开发周期</p>
                  <p>助力抢先占领市场</p>
                </div>
                <div class="platList">
                  <h5>降本</h5>
                  <p>小系统预测大系统</p>
                  <p>模型仿真与训练验证</p>
                  <p>极大降低测试成本</p>
                </div>
                <div class="platList">
                  <h5>增效</h5>
                  <p>评估与优化电池系统性能</p>
                  <p>增强产品竞争力</p>
                </div>
              </div>
            </div>
            <div class="platform">
              <h5>电性能仿真平台功能</h5>
              <img src="@/assets/img1/elect1.jpg" width="100%" />
              <div class="formAll">
                <div class="form_on">
                  <h5>SOX/DCR估计</h5>
                  <p>SOC估计误差<span><2%</span></p>
                  <p>SOH估计误差<span><3%</span></p>
                  <p>状态联合高精度估计</p>
                  <button>状态估计</button>
                </div>
                <div class="form_on">
                  <h5>充放电控制</h5>
                  <p>比原充电速度提高<span><50+%</span></p>
                  <p>全程充电不析锂不过温</p>
                  <p>老化后模型自适应更新</p>
                  <button>充放电控制</button>
                </div>
                <div class="form_on">
                  <h5>副反应检测</h5>
                  <p>弛豫电压微分定量析锂</p>
                  <p>直流内阻法在线检测</p>
                  <p>SEI膜/LAM等机理分析</p>
                  <button>副反应检测</button>
                </div>
                <div class="form_on">
                  <h5>结构优化</h5>
                  <p>系统结构设计</p>
                  <p>电池不一致性</p>
                  <p>动力与安全性仿真</p>
                  <button>结构优化</button>
                </div>
              </div>
            </div>
          </div>
          <div class="estimat_two">
            <div class="estimat_img">
              <img src="@/assets/img1/elect2.png" width="100%" />
            </div>
            <div class="estimat_text">
              <h5>状态估计</h5>
              <p>精准的电池系统状态是保证安全高效稳定运行的基础。</p>

              <p>
                我们基于等效电路模型/电化学模型及闭环估计算法，完成荷电状态(SOC)、能量状态(SOE)、寿命(SOH)等的联合估计。通过增加力信号、EIS信号等传感，进一步提高估计精度。
                算法可实现SOC估计误差2%，SOE估计误差
                4%，SOP估计误差5%，SOH估计误差3%。机理模型+数据模型结合，提供端云一体的智能BMS管理服务。
              </p>
              <div class="luateALl">
                <div class="luateOn">
                  <h5><2%</h5>
                  <p>SOC估计误差</p>
                </div>
                <div class="luateOn">
                  <h5><2%</h5>
                  <p>SOE估计误差</p>
                </div>
                <div class="luateOn">
                  <h5><5%</h5>
                  <p>SOP估计误差</p>
                </div>
                <div class="luateOn">
                  <h5><3%</h5>
                  <p>SOH估计误差</p>
                </div>
              </div>
            </div>
          </div>
          <div class="quick_three">
            <div class="quick_text">
              <h5>快充控制</h5>
              <p>
                充电一直是制约电动汽车用户体验的最大痛点，“油电同速”是行业追求的目标。
              </p>
              <p>
                从新生到老化、从单体到系统，我们提供宽时域、多层级的电池系统全生命周期最优快充方法，在保证安全和寿命的基础上最大化充电速度。帮助汽车实现充电5min，续航200~400km(取决于电池包能量和性能)，提升产品竞争力。
              </p>
              <span>点击查看</span>
            </div>
            <div class="quick_img">
              <img src="@/assets/img1/elect3.png" width="100%" />
            </div>
          </div>
          <div class="lifetime_four">
            <div class="tit_top">
              <div class="tit_left">
                <h5>寿命预测</h5>
              </div>
              <div class="tit_right">
                <p>
                  寿命的仿真、估计与预测广泛用于电池资产开发、运维，面临测试成本高、估计精度低等难题。
                </p>
                <p>
                  我们可提供基于经验、机理、数据的电池单体到系统的寿命建模、劣化模式分析、寿命估计和预测的服务。
                  针对不同的需求和工况，通过性能测试建立机理寿命模型或通过大数据训练建立AI寿命模型，满足实车复杂工况的电池寿命估计、预测等；以支持质保、二手车交易、残值评估等服务。
                </p>
              </div>
            </div>
            <div class="remaini">
              <div class="remai_all">
                <div class="remai_img">
                  <img src="@/assets/img1/elect4.jpg" width="100%" />
                </div>
                <p>机理寿命模型</p>
              </div>
              <div class="remai_all">
                <div class="remai_img">
                  <img src="@/assets/img1/elect5.jpg" width="100%" />
                </div>
                <p>AI寿命模型</p>
              </div>
            </div>
          </div>
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
          <div class="model">
            <div class="mod_one">
              <h5>AI管理大模型</h5>
              <img src="@/assets/img1/ai_g1.png" width="100%" />
            </div>
            <div class="mod_two">
              <h5>寿命估计子模型</h5>
              <div class="sub_mode">
                <div class="subList">
                  <img src="@/assets/img1/ai_s1.png" width="100%" />
                  <p>数据采集有限</p>
                  <p>硬件计算能力有限</p>
                </div>
                <div class="subList">
                  <img src="@/assets/img1/ai_s2.png" width="100%" />
                  <p>数据字段足够</p>
                  <p>依托数据平台</p>
                </div>
                <div class="subList">
                  <img src="@/assets/img1/ai_s3.png" width="100%" />
                  <p>丰富的数据字段</p>
                  <p>硬件计算能力无限制</p>
                </div>
              </div>
            </div>
            <div class="mod_three">
              <h5>故障诊断子模型</h5>
              <img src="@/assets/img1/ai_gz1.png" width="100%" />
            </div>
            <div class="mod_four">
              <h5>RUL预测子模型</h5>
              <img src="@/assets/img1/ai_gz1.png" width="100%" />
            </div>
            <div class="mod_five">
              <div class="make">
                <h5>AI制造大模型</h5>
                <img src="@/assets/img1/ai_z1.jpg" width="100%" />
              </div>
              <div class="make">
                <h5>AI制造—智能缺陷检测</h5>
                <p>
                  3D线扫+AI驱动，
                  <br />点云融合特性提取与训练，赋能极片厚度缺陷检测
                </p>
                <img src="@/assets/img1/ai_zn1.png" width="100%" />
              </div>
              <div class="make">
                <h5>AI制造—智能缺陷检测</h5>
                <p>
                  机理模型+数字孪生，
                  <br />AI赋能电池匀浆、涂布等仿真工艺数据增强，精准极片特性预测。
                </p>
                <img src="@/assets/img1/ai_zn2.png" width="100%" />
              </div>
              <div class="make">
                <h5>AI制造—智能出厂检测</h5>
                <p>
                  先进超声传感+AI数据训练，赋能电池高效量化的出厂检测，提升电池全流程的工艺一致性。
                </p>
                <img src="@/assets/img1/ai_zn3.png" width="100%" />
              </div>
            </div>
          </div>
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

      .perform_one {
        background-color: #fcfcfc;
        padding: 80px 10% 120px 10%;
        .title {
          margin-bottom: 70px;
          width: 55%;
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
        .simulation {
          > h5 {
            text-align: center;
            font-size: 30px;
            color: #010101;
            margin-bottom: 25px;
          }
          .platformsAll {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
            .platList {
              background-color: #2a57eb;
              height: 150px;
              width: 400px;
              border-radius: 15px;
              text-align: center;
              padding: 15px 0;
              h5 {
                font-size: 44px;
                color: #fff;
                margin-bottom: 10px;
              }
              p {
                font-size: 12px;
                color: #fff;
                margin: 0;
                line-height: 1.3;
              }
            }
          }
        }
        .platform {
          > h5 {
            text-align: center;
            font-size: 30px;
            color: #010101;
            margin-bottom: 25px;
          }
          .formAll {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ffffff;
            padding: 30px 0;
            .form_on {
              width: 25%;
              text-align: center;
              h5 {
                color: #010101;
                font-size: 14px;
                margin-bottom: 15px;
              }
              p {
                color: #707070;
                margin: 0;
                font-size: 12px;
                line-height: 1.2;
                span {
                  color: #2a57eb;
                }
              }
              button {
                height: 45px;
                line-height: 1;
                background-color: #2a57eb;
                border-radius: 30px;
                text-align: center;
                width: 65%;
                margin: 0 auto;
                color: #fff;
                border: none;
                font-size: 18px;
                margin-top: 35px;
              }
            }
          }
        }
      }
      .estimat_two {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f4f9ff;
        padding: 110px 10%;
        .estimat_img {
          width: 50%;
        }
        .estimat_text {
          width: 40%;
          h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 40px;
          }
          p {
            font-size: 16px;
            color: #010101;
          }
          .luateALl {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 120px;
            .luateOn {
              background-color: #1f81f0;
              border-radius: 5px;
              text-align: center;
              padding: 20px 0;
              width: 23%;
              h5 {
                color: #fff;
                font-size: 30px;
                margin-bottom: 15px;
              }
              p {
                color: #fff;
                font-size: 12px;
                margin: 0;
              }
            }
          }
        }
      }
      .quick_three {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 200px 10%;
        background-color: #fcfcfc;
        .quick_text {
          width: 30%;
          h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 50px;
          }
          p {
            font-size: 16px;
            color: #010101;
            margin-bottom: 20px;
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
        .quick_img {
          width: 66%;
        }
      }
      .lifetime_four {
        background-color: #f4f9ff;
        padding: 120px 10%;
        .tit_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tit_left {
            h5 {
              font-size: 36px;
              color: #010101;
              text-align: left;
            }
          }
          .tit_right {
            width: 56%;
            p {
              font-size: 16px;
              color: #010101;
            }
          }
        }
        .remaini {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 70px;
          .remai_all {
            width: 50%;
            .remai_img {
              margin-bottom: 60px;
              background-color: #fff;
            }
            p {
              font-size: 22px;
              text-align: center;
              color: #010101;
            }
          }
        }
      }
      .model {
        .mod_one {
          padding: 80px 10%;
          background-color: #fcfcfc;
          > h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 40px;
          }
        }
        .mod_two {
          background-color: #266cf6;
          padding: 80px 10%;
          > h5 {
            font-size: 36px;
            color: #fff;
            margin-bottom: 80px;
          }
          .sub_mode {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .subList {
              width: 30%;
              img {
                margin-bottom: 50px;
              }
              p {
                color: #fff;
                font-size: 26px;
                margin-bottom: 0;
                text-align: center;
              }
            }
          }
        }
        .mod_three {
          padding: 80px 10%;
          background-color: #fcfcfc;
          > h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 80px;
          }
        }
        .mod_four {
          background-color: #f4f9ff;
          padding: 30px 10%;
          > h5 {
            font-size: 36px;
            color: #010101;
            margin-bottom: 80px;
          }
        }
        .mod_five {
          background-color: #fcfcfc;
          padding: 80px 10%;
          .make {
            margin-bottom: 90px;
            h5 {
              font-size: 36px;
              color: #010101;
              margin-bottom: 40px;
            }
            p {
              font-size: 16px;
              color: #010101;
              margin-bottom: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
