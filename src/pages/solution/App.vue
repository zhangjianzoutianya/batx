<script setup>
import $ from "jquery";
</script>
<template>
  <div>
    <TopPages />
    <div class="solution">
      <div class="banner">
        <img src="@/assets/img1/banner_solution.jpg" width="100%" />
        <p class="banner_title">
          物理模型<br />
          PM(Physical Model) 4 Battery
        </p>
        <div class="banner_txt">
          <div class="banner_txt_box">
            <div class="banner_txt_box_item item1">
              <h5>最懂电池</h5>
              <p>
                10余年的电池机理专业知识沉淀<br />贯穿本征安全、主动安全、被动安全
              </p>
              <img src="@/assets/img1/so_ico1.png" width="69px" />
            </div>
            <div class="banner_txt_box_item item2">
              <h5>最会仿真</h5>
              <p>
                从第一性原理出发，模型驱动数据应<br />用于电池全生命周期各场景
              </p>
              <img src="@/assets/img1/so_ico2.png" width="69px" />
            </div>
            <div class="banner_txt_box_item item3">
              <h5>最擅服务</h5>
              <p>
                安全、高效、专业、全面<br />相关模型/软件用于几乎所有电池企业
              </p>
              <img src="@/assets/img1/so_ico3.png" width="69px" />
            </div>
          </div>
        </div>
      </div>
      <div class="solution_one">
        <h5>
          电池物理模型，Physical Model for battery：<br />
          积累清华大学PSG课题组15年的研究成果，从第一性原理出发贯穿本征安全、主动安全、被动安全,覆盖电池单体、模组、<br />
          系统的全场景机理研究与仿真建模,应用于电池的全生命周期状态估计、安全预警、寿命预测、优化。
        </h5>
        <img src="@/assets/img1/solution1.png" width="100%" />
      </div>
      <div class="solution_two">
        <h5>基于数据的AI <br />4 Battery垂直大模型</h5>
        <p>
          输入储能、动力等电池数据采用掩码自掩码(Masked
          Autoencoders，MAE)架构进行多元数据联合预训练，结合
          电池文献知识库,生成电池垂类基础模型AI4B。针对特定的场景和任务只需输入少量数据进行模型微调
          (fine-tune),即可实现下游任务适配,模型精度和效率明显提升。
        </p>
        <img src="@/assets/img1/solution2.png" />
        <p>PM4B和AI4B融合，形成BATX技术底座，应用于各种下游场景和任务。</p>
      </div>
      <div class="solution_three">
        <h5>Multi-modal pre-training（多源数据联合预训练）</h5>
        <img src="@/assets/img1/solution3.png" width="100%" />
        <h5>PM4B和AI4B融合，形成BATX技术底座，应用于各种下游场景和任务。</h5>
      </div>
    </div>

    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.solution {
  padding-top: 85px;
  .banner {
    position: relative;
    .banner_title {
      position: absolute;
      top: 15%;
      left: 10%;
      font-size: 36px;
      font-weight: bold;
      color: #000;
    }
    .banner_txt {
      position: absolute;
      bottom: 10%;
      left: 10%;
      right: 10%;
      .banner_txt_box {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        .item1 {
          flex: 0 0 33.33%;
        }
        .item2,
        .item3 {
          flex: 0 0 33.33%;
        }
        .banner_txt_box_item {
          background: #fff;
          border-radius: 5px;
          padding: 60px;
          position: relative;
          h5 {
            font-size: 40px;
            font-weight: bold;
            color: #2a57eb;
            margin-bottom: 70px;
            letter-spacing: 3px;
          }
          p {
            font-size: 16px;
            color: #000;
            line-height: 24px;
          }
          img {
            position: absolute;
            bottom: 60px;
            right: 50px;
          }
        }
      }
    }
  }
  .solution_one {
    padding: 70px 10% 100px 10%;
    > h5 {
      font-size: 20px;
      font-weight: 400;
      color: #000;
      line-height: 1.8;
      margin-bottom: 100px;
    }
  }
  .solution_two {
    padding: 60px 10% 100px 10%;
    background: url("@/assets/img1/solution2_bg.png") no-repeat;
    background-size: cover;
    > h5 {
      font-size: 40px;
      color: #fff;
      line-height: 48px;
      margin-bottom: 100px;
    }
    p {
      font-size: 20px;
      color: #ffffff;
      line-height: 1.8;
      font-weight: 400;
    }
    img {
      margin: 100px 0;
      width: 90%;
    }
  }
  .solution_three {
    padding: 100px 10%;
    h5 {
      font-size: 20px;
      color: #000;
      font-weight: 400;
      margin-bottom: 60px;
      margin-top: 100px;
    }
  }
}
</style>
