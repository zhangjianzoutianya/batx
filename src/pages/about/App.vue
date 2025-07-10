<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
const timelineData = [
  {
    date: "2010～2023",
    desc: "清华大学欧阳明高教授团队<br/>10+年电池研究积累",
  },
  {
    date: "2010～2023",
    desc: "清华大学欧阳明高教授团队<br/>10+年电池研究积累",
  },
  {
    date: "2024.10",
    desc: "业务清华校友三创大赛（新能源）总决赛六强",
  },
  {
    date: "2025.02",
    desc: "团队订单量破百万<br/>与数家头部企业深度合作",
  },
  {
    date: "2025.05",
    desc: "清华大学校长杯决赛 “挑战奖”（第五名）",
  },
  {
    date: "2025.06",
    desc: "发布BATX大数据平台",
  },
];
</script>
<template>
  <div>
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_about.jpg" width="100%" />
    </div>
    <div class="about_tema">
      <h2>团队优势</h2>
      <p>
        核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备大数据、A
      </p>
    </div>
    <div class="timeline-container">
      <h2 class="timeline-title">发展历程</h2>
      <div class="timeline">
        <div
          v-for="(item, index) in timelineData"
          :key="index"
          class="timeline-item"
          :class="{ top: index % 2 === 0, bottom: index % 2 !== 0 }"
        >
          <div class="content">
            <p class="date">{{ item.date }}</p>
            <p class="desc" v-html="item.desc"></p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-line"></div>
      </div>
    </div>

    <div class="about_honor">
      <img src="@/assets/img1/about2.jpg" width="100%" />
      <div class="honor_text">
        <div class="text_list">
          <h5>2025年</h5>
          <p>12th校长杯决赛前十强(第五名)</p>
        </div>
        <div class="text_list">
          <h5>2025年</h5>
          <p>卢宇芳获清华大学高榕创新创业奖学金</p>
        </div>
        <div class="text_list">
          <h5>2024年</h5>
          <p>清华三创大赛决赛，新能源种子全球前六名</p>
        </div>
        <div class="text_list">
          <h5>2022年</h5>
          <p>创始人获福布斯亚洲30U30</p>
        </div>
      </div>
    </div>
    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.about {
  padding-top: 85px;
}
.about_tema {
  padding: 50px 10% 100px 10%;
  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    color: #333;
    text-align: left;
  }
  p {
    font-size: 16px;
    color: #333;
  }
}
.timeline-container {
  padding: 50px 10% 100px 10%;
  background-color: #f4f9ff;
  text-align: center;
  .timeline-title {
    font-size: 36px;
    margin-bottom: 60px;
    color: #333;
    text-align: left;
  }

  .timeline {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    .timeline-line {
      position: absolute;
      top: 50%;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #ccc;
      z-index: 1;
    }

    .timeline-item {
      position: relative;
      width: 15%;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .dot {
        width: 12px;
        height: 12px;
        background-color: #1a73e8;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 2px #1a73e8;
        position: relative;

        // 垂直线条
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 50px;
          background-color: #999;
        }
      }

      // 上面的线：dot 向上连线
      &.top {
        .content {
          margin-bottom: 50px;
          text-align: center;
        }

        .dot::before {
          bottom: 100%;
        }
      }

      // 下面的线：dot 向下连线
      &.bottom {
        .content {
          margin-top: 50px;
          text-align: center;
        }

        .dot::before {
          top: 100%;
        }
      }

      .content {
        .date {
          font-weight: bold;
          margin-bottom: 6px;
          font-size: 16px;
        }

        .desc {
          font-size: 16px;
          color: #333;
          line-height: 1.4;
        }
      }
    }
  }
}
.about_honor {
  position: relative;
  .honor_text {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    .text_list {
      margin: 40px 0;
      h5 {
        color: #fff;
        margin: 0;
        font-size: 16px;
      }
      p {
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>
