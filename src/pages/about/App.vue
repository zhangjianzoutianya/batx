<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
// const timelineData = [
//   {
//     date: "2010～2023",
//     desc: "清华大学欧阳明高教授团队<br/>10+年电池研究积累",
//   },
//   {
//     date: "2010～2023",
//     desc: "清华大学欧阳明高教授团队<br/>10+年电池研究积累",
//   },
//   {
//     date: "2024.10",
//     desc: "业务清华校友三创大赛（新能源）总决赛六强",
//   },
//   {
//     date: "2025.02",
//     desc: "团队订单量破百万<br/>与数家头部企业深度合作",
//   },
//   {
//     date: "2025.05",
//     desc: "清华大学校长杯决赛 “挑战奖”（第五名）",
//   },
//   {
//     date: "2025.06",
//     desc: "发布BATX大数据平台",
//   },
// ];

const goToTeam = (id) => {
  window.location.href = `team.html?id=${id}`;
};
</script>
<template>
  <div class="about">
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_about.jpg" width="100%" />
    </div>
    <div class="about_tema">
      <h2>团队优势</h2>
      <p>
        核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备大数据、A
      </p>
      <div class="team">
        <div class="left" @click="goToTeam(1)">
          <img src="@/assets/img1/about1_1.jpg" />
          <p>卢宇芳 CEO</p>
        </div>

        <div class="right">
          <div class="grid">
            <div class="item" @click="goToTeam(2)">
              <img src="@/assets/img1/about1_2.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>欧阳明高</h5>
                  <p>专家委员会主席</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico1.png" width="71px" />
                </div>
              </div>
            </div>
            <div class="item" @click="goToTeam(3)">
              <img src="@/assets/img1/about1_3.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>冯旭宁</h5>
                  <p>联合创始人、首席科学家</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico7.png" width="71px" />
                </div>
              </div>
            </div>
            <div class="item" @click="goToTeam(4)">
              <img src="@/assets/img1/about1_4.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>吴国伟</h5>
                  <p>联合创始人、高级副总裁</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico4.png" width="71px" />
                  <img src="@/assets/img1/about1_ico5.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="goToTeam(5)">
              <img src="@/assets/img1/about1_5.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>卢兰光</h5>
                  <p>首席电池机理顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="goToTeam(6)">
              <img src="@/assets/img1/about1_6.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>郑岳久</h5>
                  <p>首席电池AI顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico2.png" width="71px" />
                  <img src="@/assets/img1/about1_ico3.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="goToTeam(7)">
              <img src="@/assets/img1/about1_7.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>韩雪冰</h5>
                  <p>首席电池管理顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico2.png" width="71px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-container">
      <h2 class="timeline-title">发展历程</h2>
      <div class="timeline">
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2010～2023</p>
            <p class="desc">清华大学欧阳明高教授团队<br />10+年电池研究积累</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <div class="dot"></div>
            <p class="date">2010～2023</p>
            <p class="desc">清华大学欧阳明高教授团队<br />10+年电池研究积累</p>
          </div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2024.10</p>
            <p class="desc">业务清华校友三创大赛（新能源）总决赛六强</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.02</p>
            <p class="desc">团队订单量破百万<br />与数家头部企业深度合作</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2025.05</p>
            <p class="desc">清华大学校长杯决赛“挑战奖”（第五名）</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.06</p>
            <p class="desc">发布BATX大数据平台</p>
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
  .team {
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    margin-top: 120px;
    .left {
      flex: 0 0 24.55%;
      position: relative;
      img {
        width: 280px;
      }
      p {
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        bottom: 15px;
        font-size: 20px;
        margin: 0;
      }
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .right {
      flex: 1;
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        .item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          .small-img {
            width: 190px;
          }
          .text {
            display: flex;
            flex-direction: column; // 垂直排列
            justify-content: space-between; // 顶部和底部分开贴边
            height: 100%;
            .introd {
              color: #010101;
              h5 {
                font-size: 20px;
              }
              p {
                font-size: 16px;
                color: #010101;
              }
            }
          }
        }
      }
    }
  }
}
.timeline-container {
  padding: 50px 5% 100px 5%;
  background-color: #f4f9ff;
  text-align: center;
  .timeline-title {
    font-size: 36px;
    margin-bottom: 60px;
    color: #333;
    text-align: left;
    padding-left: 5%;
  }

  .timeline {
    position: relative;
    .timeline-line {
      position: relative;
      height: 2px;
      width: 100%;
      background-color: #ccc;
      margin: 200px 0;
    }

    .timeline-item {
      position: absolute;
      width: 30%;
      z-index: 2;
      &:nth-child(1) {
        left: 5%;
      }
      &:nth-child(2) {
        left: -8%;
      }
      &:nth-child(3) {
        left: 35%;
      }
      &:nth-child(4) {
        left: 25%;
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 60%;
      }
      .dot {
        width: 15px;
        height: 15px;
        background-color: #1a73e8;
        border-radius: 50%;
        position: absolute;
      }

      // 上面的线：dot 向上连线
      &.top {
        bottom: 0;
        .dot {
          position: absolute;
          left: 0;
          bottom: -8px;
          // 垂直线条
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 73px;
            background-color: #999;
            bottom: 15px;
          }
        }

        .content {
          margin-bottom: 80px;
          text-align: left;
        }
      }

      // 下面的线：dot 向下连线
      &.bottom {
        .dot {
          position: absolute;
          right: 0;
          top: 0;
          // 垂直线条
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 73px;
            background-color: #999;
            top: 15px;
          }
        }

        .content {
          text-align: right;
          padding-top: 90px;
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
          color: #010101;
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
