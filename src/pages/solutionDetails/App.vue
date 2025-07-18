<script setup>
import $ from "jquery";
import { ref } from "vue";

const params = new URLSearchParams(window.location.search);
const id = ref(params.get("id"));
//系统产品开发数据
const tabs = ["动力电池包", "储能电池包", "Evtol电池包", "机器人电源"];

import icon1 from "@/assets/img1/tage1.png";
import icon2 from "@/assets/img1/tage2.png";
import icon3 from "@/assets/img1/tage3.png";

import img1 from "@/assets/img1/system1_1.jpg";
import img2 from "@/assets/img1/system1_2.jpg";
import img3 from "@/assets/img1/system1_3.jpg";
import img4 from "@/assets/img1/system1_4.jpg";

const advantages = [
  {
    icon: icon1,
    title: "智能管理",
    desc: "电池系统软硬件结合打通云端一体的电池系统，效率安全高效",
  },
  {
    icon: icon2,
    title: "灵活高效",
    desc: "模块化产品，灵活组合，高效配置，满足多场景开发需求",
  },
  {
    icon: icon3,
    title: "全流程方案",
    desc: "覆盖BMS、电池包、三电系统等解决方案",
  },
];

const images = [
  { src: img1, caption: "动力电池包" },
  { src: img2, caption: "储能电池包" },
  { src: img3, caption: "Evtol电池包" },
  { src: img4, caption: "机器人电源" },
];
//系统产品开发数据

//产线智能制造
const tabs2 = ["工艺仿真", "产线分容", "缺陷检测", "性能评估"];

import icon1_2 from "@/assets/img1/tage1_2.png";
import icon2_2 from "@/assets/img1/tage2_2.png";
import icon3_2 from "@/assets/img1/tage3_2.png";

import img1_2 from "@/assets/img1/system2_1.jpg";
import img2_2 from "@/assets/img1/system2_2.jpg";
import img3_2 from "@/assets/img1/system2_3.jpg";
import img4_2 from "@/assets/img1/system2_4.jpg";

const advantages2 = [
  {
    icon: icon1_2,
    title: "降本增效",
    desc: "优化匀浆、浸润、化成等工艺参数，缩短工序时间，降低能耗",
  },
  {
    icon: icon2_2,
    title: "高精预测",
    desc: "电芯分容预测误差<0.5%，缺陷电池检出率较传统提高40% ",
  },
  {
    icon: icon3_2,
    title: "AI产线模型 ",
    desc: "结合人工智能深度挖掘产线大数据，提升不同工序的诊断与检出效率",
  },
];

const images2 = [
  { src: img1_2, caption: "工艺仿真" },
  { src: img2_2, caption: "产线分容" },
  { src: img3_2, caption: "缺陷检测" },
  { src: img4_2, caption: "性能评估" },
];
//产线智能制造

//能源管理运维
const tabs3 = ["故障诊断", "安全预警", "寿命估计", "RUL预测"];

import icon1_3 from "@/assets/img1/tage1_3.png";
import icon2_3 from "@/assets/img1/tage2_3.png";
import icon3_3 from "@/assets/img1/tage3_2.png";

import img1_3 from "@/assets/img1/system3_1.jpg";
import img2_3 from "@/assets/img1/system3_2.jpg";
import img3_3 from "@/assets/img1/system3_3.jpg";
import img4_3 from "@/assets/img1/system3_4.jpg";

const advantages3 = [
  {
    icon: icon1_3,
    title: "电芯故障预警",
    desc: "构建故障图谱，结合数据与机理，实现电芯级预警率>95% ",
  },
  {
    icon: icon2_3,
    title: "超前寿命预测",
    desc: "AI4B基础模型微调，仅十几圈循环即可预测未来寿命 ",
  },
  {
    icon: icon3_3,
    title: "AI资产模型 ",
    desc: "AI训练资产运营数据，端云算法结合，全方位资产守护 ",
  },
];

const images3 = [
  { src: img1_3, caption: "故障诊断" },
  { src: img2_3, caption: "安全预警" },
  { src: img3_3, caption: "寿命估计" },
  { src: img4_3, caption: "RUL预测" },
];
//能源管理运维

//资产检测维修
const tabs4 = ["汽车年检", "储能检测", "残值评估", "电池包检修"];

import icon1_4 from "@/assets/img1/tage1_3.png";
import icon2_4 from "@/assets/img1/tage4_2.png";
import icon3_4 from "@/assets/img1/tage4_3.png";

import img1_4 from "@/assets/img1/system4_1.jpg";
import img2_4 from "@/assets/img1/system4_2.jpg";
import img3_4 from "@/assets/img1/system4_3.jpg";
import img4_4 from "@/assets/img1/system4_4.jpg";

const advantages4 = [
  {
    icon: icon1_4,
    title: "电芯故障预警",
    desc: "构建故障图谱，结合数据与机理，实现电芯级预警率>95% ",
  },
  {
    icon: icon2_4,
    title: "超前寿命预测",
    desc: "AI4B基础模型微调，仅十几圈循环即可预测未来寿命 ",
  },
  {
    icon: icon3_4,
    title: "AI资产模型 ",
    desc: "AI训练资产运营数据，端云算法结合，全方位资产守护 ",
  },
];

const images4 = [
  { src: img1_4, caption: "汽车年检" },
  { src: img2_4, caption: "储能检测" },
  { src: img3_4, caption: "残值评估" },
  { src: img4_4, caption: "电池包检修" },
];
//资产检测维修
</script>
<template>
  <div class="solutionDetails">
    <TopPages />
    <div
      :class="{ solutionDetails: true, solutionDetails_1: id == 1 }"
      v-if="id == 1"
    >
      <div class="banner">
        <img src="@/assets/img1/banner_sol1.jpg" width="100%" />
        <div class="text">
          <p>系统产品开发<br />安全稳定，精准高效</p>
        </div>
      </div>
      <div class="system">
        <div class="title">
          <p>
            从力、电、热等第一性原理出发，结合系统结构设计、电性能仿真、热管理方案等，满足您对电池系统复杂设计与管理的可靠性、安全性等需求。方案融合AI技术提供精准高效的电池管理与控制能力，节省50%以上的开发成本。
          </p>
        </div>
        <div class="section">
          <!-- 左边 -->
          <div class="left-panel">
            <div class="tabs">
              <button v-for="(tab, index) in tabs" :key="index">
                {{ tab }}
              </button>
            </div>

            <div class="section-title">方案优势</div>
            <div class="advantages">
              <div class="advantage" v-for="(adv, i) in advantages" :key="i">
                <img :src="adv.icon" class="icon" />
                <div class="text">
                  <h3>{{ adv.title }}</h3>
                  <p>{{ adv.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右边 -->
          <div class="right-panel">
            <div class="section-title">应用场景</div>
            <div class="image-grid">
              <div
                class="image-item"
                v-for="(item, index) in images"
                :key="index"
              >
                <img :src="item.src" />
                <p class="caption">{{ item.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_2: id == 2 }"
      v-if="id == 2"
    >
      <div class="banner">
        <img src="@/assets/img1/banner_sol2.jpg" width="100%" />
        <div class="text">
          <p>
            产线智能制造 <br />
            守护每一颗“芯”
          </p>
        </div>
      </div>
      <div class="system">
        <div class="title">
          <p>
            在电芯和Pack制造产线的不同工序环节，结合机理与数据，提供工艺建模仿真、参数优化、缺陷检测、不一致性评估等。竞逐控制材料性能、生产条件和质量一致性，筛出缺陷电池，提高生产效率，守护每一个电芯和Pack的性能。
          </p>
        </div>
        <div class="section">
          <!-- 左边 -->
          <div class="left-panel">
            <div class="tabs">
              <button v-for="(tab, index) in tabs2" :key="index">
                {{ tab }}
              </button>
            </div>

            <div class="section-title">方案优势</div>
            <div class="advantages">
              <div class="advantage" v-for="(adv, i) in advantages2" :key="i">
                <img :src="adv.icon" class="icon" />
                <div class="text">
                  <h3>{{ adv.title }}</h3>
                  <p>{{ adv.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右边 -->
          <div class="right-panel">
            <div class="section-title">应用场景</div>
            <div class="image-grid">
              <div
                class="image-item"
                v-for="(item, index) in images2"
                :key="index"
              >
                <img :src="item.src" />
                <p class="caption">{{ item.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_3: id == 3 }"
      v-if="id == 3"
    >
      <div class="banner">
        <img src="@/assets/img1/banner_sol3.jpg" width="100%" />
        <div class="text">
          <p>
            能源管理运维 <br />
            极致安全，有效延寿
          </p>
        </div>
      </div>
      <div class="system">
        <div class="title">
          <p>
            在电芯和Pack制造产线的不同工序环节，结合机理与数据，提供工艺建模仿真、参数优化、缺陷检测、不一致性评估等。竞逐控制材料性能、生产条件和质量一致性，筛出缺陷电池，提高生产效率，守护每一个电芯和Pack的性能。
          </p>
        </div>
        <div class="section">
          <!-- 左边 -->
          <div class="left-panel">
            <div class="tabs">
              <button v-for="(tab, index) in tabs3" :key="index">
                {{ tab }}
              </button>
            </div>
            <div class="section-title">方案优势</div>
            <div class="advantages">
              <div class="advantage" v-for="(adv, i) in advantages3" :key="i">
                <img :src="adv.icon" class="icon" />
                <div class="text">
                  <h3>{{ adv.title }}</h3>
                  <p>{{ adv.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右边 -->
          <div class="right-panel">
            <div class="section-title">应用场景</div>
            <div class="image-grid">
              <div
                class="image-item"
                v-for="(item, index) in images3"
                :key="index"
              >
                <img :src="item.src" />
                <p class="caption">{{ item.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_4: id == 4 }"
      v-if="id == 4"
    >
      <div class="banner">
        <img src="@/assets/img1/banner_sol4.jpg" width="100%" />
        <div class="text">
          <p>
            资产检测维修 <br />
            精准快检，售后无忧
          </p>
        </div>
      </div>
      <div class="system">
        <div class="title">
          <p>
            主动激励策略与数据分析，机理结合AI解析内阻、容量衰减等参数，精准判断电芯状态与识别安全隐患。提供电池包异常定位、分级维修的一站式售后保障，解决资产方的后顾之忧。
          </p>
        </div>
        <div class="section">
          <!-- 左边 -->
          <div class="left-panel">
            <div class="tabs">
              <button v-for="(tab, index) in tabs4" :key="index">
                {{ tab }}
              </button>
            </div>
            <div class="section-title">方案优势</div>
            <div class="advantages">
              <div class="advantage" v-for="(adv, i) in advantages4" :key="i">
                <img :src="adv.icon" class="icon" />
                <div class="text">
                  <h3>{{ adv.title }}</h3>
                  <p>{{ adv.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右边 -->
          <div class="right-panel">
            <div class="section-title">应用场景</div>
            <div class="image-grid">
              <div
                class="image-item"
                v-for="(item, index) in images4"
                :key="index"
              >
                <img :src="item.src" />
                <p class="caption">{{ item.caption }}</p>
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
.solutionDetails {
  // padding-top: 75px;
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
  .system {
    padding: 65px 10% 100px 10%;
    background-color: #fcfcfc;
    .title {
      width: 50%;
      margin-bottom: 100px;
      p {
        color: #010101;
        font-size: 16px;
        margin: 0;
      }
    }
    .section {
      display: flex;
      gap: 40px;
      align-items: flex-start;
      padding: 40px 0;
      width: 100%;

      .left-panel {
        flex: 1;

        .tabs {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          margin-top: 60px;
          button {
            background-color: #2f49ff;
            color: #fff;
            border-radius: 15px 0 15px 0;
            border: none;
            font-size: 18px;
            cursor: pointer;
            width: 160px;
            height: 45px;
            text-align: center;
            line-height: 45px;
          }
        }

        .section-title {
          font-size: 24px;
          color: #2c58eb;
          margin-bottom: 20px;
        }

        .advantages {
          display: flex;
          flex-direction: column;
          gap: 24px;

          .advantage {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            position: relative;
            .icon {
              width: 32px;
              height: 32px;
              position: absolute;
              top: 5px;
              right: 30%;
            }

            .text {
              h3 {
                font-size: 16px;
                margin: 0px;
                color: #010101;
                font-weight: 400;
              }

              p {
                font-size: 14px;
                margin: 0;
                font-size: 16px;
                color: #010101;
              }
            }
          }
        }
      }

      .right-panel {
        flex: 1;

        .section-title {
          font-size: 24px;
          color: #707070;
          margin-bottom: 30px;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;

          .image-item {
            img {
              width: 100%;
              height: auto;
              display: block;
            }

            .caption {
              margin-top: 8px;
              font-size: 14px;
              text-align: center;
              color: #333;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
