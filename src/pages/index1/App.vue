<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";
import Top from "@/components/Top1.vue";
import Footer from "@/components/Footer1.vue";

const section = ref(null);
const content = ref(null);

const translateX = ref(0);
const translateY = ref(0);

console.log($(".index_pro"));

const handleScroll = () => {
  const sectionEl = section.value;
  const contentEl = content.value;
  if (!sectionEl || !contentEl) return;

  const sectionTop = sectionEl.offsetTop;
  const scrollY = window.scrollY;
  const sectionHeight = sectionEl.offsetHeight;
  const maxScroll = sectionHeight - window.innerHeight;
  const totalScrollLength = contentEl.scrollWidth - window.innerWidth;

  if (scrollY < sectionTop) {
    // 当滚动位置在section顶部之前时，重置translateX为0
    translateX.value = 0;
    translateY.value = 0;
  } else if (scrollY >= sectionTop && scrollY <= sectionTop + maxScroll) {
    const progress = (scrollY - sectionTop) / maxScroll;
    translateX.value = progress * totalScrollLength;
    translateY.value = -(progress * totalScrollLength) / 13;
  } else {
    // 当滚动超过section底部时，保持最大translateX值
    translateX.value = totalScrollLength;
    translateY.value = -totalScrollLength / 13;
  }
};

onMounted(() => {
  $(".banner").height($(window).height());
  console.log($(".banner").height());
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <Top />
    <div class="banner">
      <div class="banner_list">
        <video ref="videoPlayer" width="100%" autoplay muted loop playsinline>
          <source src="@/assets/img1/banner1.mp4" type="video/mp4" />
        </video>
        <div class="banner_bg"></div>
        <div class="banner_txt">
          <h5>
            电池全生命周期智能化
            <br />
            服务商
          </h5>
          <p>
            Battery life cycle digital and Intelligent
            <br />
            service provider
          </p>
        </div>
      </div>
    </div>
    <div class="index_pro">
      <h5>技术平台</h5>
      <div class="index_pro_box">
        <div class="item item1">
          <div class="txt"></div>
          <div class="writ">
            <h5>机理模型</h5>
            <p>PM 4 Battery</p>
          </div>
          <div class="writ_bot">
            <p>
              <span>本征安全</span><span>主动安全</span><span>被动安全</span>
            </p>
          </div>
          <div class="icon_png">
            <img src="@/assets/img1/jiant.png" />
          </div>
          <div class="img">
            <img src="@/assets/img1/index_pro1.jpg" />
          </div>
        </div>
        <div class="item item2">
          <div class="txt"></div>
          <div class="writ">
            <h5>AI模型</h5>
            <p>AI 4 Battery</p>
          </div>
          <div class="writ_bot">
            <p>
              <span>状态估计</span><span>故障诊断</span><span>安全预警</span
              ><span>寿命预测</span>
            </p>
          </div>
          <div class="icon_png">
            <img src="@/assets/img1/jiant.png" />
          </div>
          <div class="img">
            <img src="@/assets/img1/index_pro2.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div class="index_solu">
      <h5>解决方案</h5>
      <div class="index_solu_box">
        <div class="solu_box solu_box1">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu1.jpg" />
          </div>
          <div class="text">
            <h5>系统产品开发</h5>
            <p>System Product R&D</p>
          </div>
        </div>
        <div class="solu_box solu_box2">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu2.jpg" />
          </div>
          <div class="text">
            <h5>产线智能制造</h5>
            <p>Smart Manufacturin</p>
          </div>
        </div>
        <div class="solu_box solu_box3">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu3.jpg" />
          </div>
          <div class="text">
            <h5>能源管理运维</h5>
            <p>Energy Management & Operation</p>
          </div>
        </div>
        <div class="solu_box solu_box4">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu4.jpg" />
          </div>
          <div class="text">
            <h5>资产检测维修</h5>
            <p>Asset Inspection & Maintenanc</p>
          </div>
        </div>
      </div>
    </div>
    <div class="index_service" ref="section">
      <h5>产品服务</h5>
      <div class="index_service_box">
        <div
          class="index_service_list"
          ref="content"
          :style="{
            transform: `translateX(-${translateX}px) translateY(${translateY}px)`,
          }"
        >
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod1.jpg" />
            </div>
            <div class="text">
              <p>热失控机理</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod2.jpg" />
            </div>
            <div class="text">
              <p>热安全预警</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod3.jpg" />
            </div>
            <div class="text">
              <p>电性能仿真</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod7.jpg" />
            </div>
            <div class="text">
              <p>状态估计</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod8.jpg" />
            </div>
            <div class="text">
              <p>AI电池管理</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod4.jpg" />
            </div>
            <div class="text">
              <p>热蔓延仿真</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod5.jpg" />
            </div>
            <div class="text">
              <p>热管理设计</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod6.jpg" />
            </div>
            <div class="text">
              <p>充放电控制</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod10.jpg" />
            </div>
            <div class="text">
              <p>寿命预测</p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod11.jpg" />
            </div>
            <div class="text">
              <p>AI电池制造</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="marquee-wrapper">
      <h5>合作伙伴</h5>
      <div class="marquee marquee-left">
        <div class="marquee-content">
          <img src="@/assets/img1/partner1.png" alt="logo" />
          <img src="@/assets/img1/partner2.png" alt="logo" />
          <img src="@/assets/img1/partner4.png" alt="logo" />
          <img src="@/assets/img1/partner5.png" alt="logo" />
          <img src="@/assets/img1/partner6.png" alt="logo" />
          <img src="@/assets/img1/partner7.png" alt="logo" />
          <img src="@/assets/img1/partner8.png" alt="logo" />
          <img src="@/assets/img1/partner9.png" alt="logo" />
          <img src="@/assets/img1/partner1.png" alt="logo" />
          <img src="@/assets/img1/partner2.png" alt="logo" />
          <img src="@/assets/img1/partner4.png" alt="logo" />
          <img src="@/assets/img1/partner5.png" alt="logo" />
          <img src="@/assets/img1/partner6.png" alt="logo" />
          <img src="@/assets/img1/partner7.png" alt="logo" />
          <img src="@/assets/img1/partner8.png" alt="logo" />
          <img src="@/assets/img1/partner9.png" alt="logo" />
          <img src="@/assets/img1/partner1.png" alt="logo" />
          <img src="@/assets/img1/partner2.png" alt="logo" />
          <img src="@/assets/img1/partner4.png" alt="logo" />
          <img src="@/assets/img1/partner5.png" alt="logo" />
          <img src="@/assets/img1/partner6.png" alt="logo" />
          <img src="@/assets/img1/partner7.png" alt="logo" />
          <img src="@/assets/img1/partner8.png" alt="logo" />
          <img src="@/assets/img1/partner9.png" alt="logo" />
        </div>
      </div>
      <div class="marquee marquee-right">
        <div class="marquee-content">
          <img src="@/assets/img1/partner10.png" alt="logo" />
          <img src="@/assets/img1/partner11.png" alt="logo" />
          <img src="@/assets/img1/partner12.png" alt="logo" />
          <img src="@/assets/img1/partner13.png" alt="logo" />
          <img src="@/assets/img1/partner14.png" alt="logo" />
          <img src="@/assets/img1/partner15.png" alt="logo" />
          <img src="@/assets/img1/partner16.png" alt="logo" />
          <img src="@/assets/img1/partner17.png" alt="logo" />
          <img src="@/assets/img1/partner10.png" alt="logo" />
          <img src="@/assets/img1/partner11.png" alt="logo" />
          <img src="@/assets/img1/partner12.png" alt="logo" />
          <img src="@/assets/img1/partner13.png" alt="logo" />
          <img src="@/assets/img1/partner14.png" alt="logo" />
          <img src="@/assets/img1/partner15.png" alt="logo" />
          <img src="@/assets/img1/partner16.png" alt="logo" />
          <img src="@/assets/img1/partner17.png" alt="logo" />
          <img src="@/assets/img1/partner10.png" alt="logo" />
          <img src="@/assets/img1/partner11.png" alt="logo" />
          <img src="@/assets/img1/partner12.png" alt="logo" />
          <img src="@/assets/img1/partner13.png" alt="logo" />
          <img src="@/assets/img1/partner14.png" alt="logo" />
          <img src="@/assets/img1/partner15.png" alt="logo" />
          <img src="@/assets/img1/partner16.png" alt="logo" />
          <img src="@/assets/img1/partner17.png" alt="logo" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.banner {
  width: 100%;
  position: relative;
  overflow: hidden;
  .banner_list {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .banner_bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    .banner_txt {
      position: absolute;
      left: 4%;
      bottom: 24%;
      color: #fff;
      h5 {
        font-size: 45px;
        margin-bottom: 40px;
        font-weight: 400;
        letter-spacing: 4px;
      }
      p {
        font-size: 25px;
        font-weight: 300;
        color: #fff;
      }
    }
  }
}
.index_pro {
  width: 100%;
  padding: 6% 4% 4% 4%;
  > h5 {
    font-size: 36px;
    font-weight: 400;
    color: #000;
    margin: 0;
    margin-bottom: 5%;
  }
  .index_pro_box {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: #ededed;
    aspect-ratio: 716 / 230;
    transform: none;
    transform-origin: 50% 50% 0px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    .item {
      overflow: hidden;
      position: relative;
      .writ {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 2;
        h5 {
          color: #070707;
          font-size: 22px;
        }
        p {
          color: #070707;
          font-size: 16px;
        }
      }
      .writ_bot {
        position: absolute;
        bottom: 20px;
        left: 40px;
        z-index: 2;
        -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        p {
          span {
            color: #070707;
            margin-right: 10px;
            font-size: 16px;
          }
        }
      }
      .icon_png {
        position: absolute;
        bottom: 40px;
        right: 40px;
        z-index: 2;
        opacity: 0;
        -moz-opacity: 0;
        -khtml-opacity: 0;
        -webkit-opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        img {
          width: 40px;
        }
      }
      .txt {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        background: transparent;
      }
      .img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: auto;
          height: 100%;
          object-fit: cover;
          object-position: center;
          -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
          transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        }
      }
    }
    .item:hover {
      .txt {
        background: rgba(228, 239, 249, 0.85);
      }
      .img {
        img {
          filter: blur(30px);
        }
      }
      .writ_bot {
        bottom: 200px;
      }
      .icon_png {
        opacity: 1;
        -moz-opacity: 1;
        -khtml-opacity: 1;
        -webkit-opacity: 1;
        filter: alpha(opacity=100);
      }
    }
    &:has(.item1:hover) {
      grid-template-columns: 2fr 1fr;
    }
    &:has(.item2:hover) {
      grid-template-columns: 1fr 2fr;
    }
  }
}
.index_solu {
  width: 100%;
  padding: 4% 4% 6%;
  > h5 {
    font-size: 36px;
    font-weight: 400;
    color: #000;
    margin: 0;
    margin-bottom: 5%;
  }
  .index_solu_box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    transition-duration: 0.3s;
    overflow: hidden;
    .solu_box {
      overflow: hidden;
      position: relative;
      aspect-ratio: 436 / 560;
      .imgBg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
        transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.3s;
      }
      .img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          transition-duration: 0.3s;
          transition-property: all;
          object-fit: cover;
          object-position: center;
        }
      }
      .text {
        position: absolute;
        left: 25px;
        bottom: 30px;
        color: #fff;
        z-index: 2;
        h5 {
          font-size: 20px;
        }
        p {
          color: #fff;
          font-size: 20px;
        }
      }
      &:nth-child(1) {
        .text {
          color: #070707;
          p {
            color: #070707;
          }
        }
      }
    }
    .solu_box:hover {
      .imgBg {
        background: rgba(0, 0, 0, 0.5);
      }
      .text {
        color: #fff;
        p {
          color: #fff;
        }
      }
      // .img {
      //   img {
      //     filter: blur(100px);
      //   }
      // }
    }
    &:has(.solu_box1:hover) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &:has(.solu_box2:hover) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &:has(.solu_box3:hover) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &:has(.solu_box4:hover) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
.index_service {
  height: 300vh;
  position: relative;
  background: #e4e6ee;
  > h5 {
    font-size: 36px;
    font-weight: 400;
    color: #000;
    margin: 0 0 3% 0;
    position: absolute;
    top: 3vw;
    left: 4%;
  }
  .index_service_box {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
    padding-top: 7%;
    padding-left: 4%;
    .index_service_list {
      display: flex;
      flex-wrap: wrap;
      width: 152vw;
      transition: transform 0.3s ease-out;
      .item {
        width: 24vw;
        flex-shrink: 0;
        font-weight: bold;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-right: 5vw;
        position: relative;
        margin-bottom: 80px;
        cursor: pointer;
        .text {
          width: 100%;
          position: absolute;
          top: 105%;
          border-top: 1px solid #7f8081;
          padding-top: 10px;
          p {
            color: #000;
            font-size: 17px;
            font-weight: 400;
            img {
              width: 16px;
              margin: 10px 0 0 10px;
            }
          }
        }
        .img {
          width: 100%;
          img {
            display: block;
            width: 100%;
          }
        }
        &:nth-child(1) {
          transform: translateY(1vh);
        }
        &:nth-child(2) {
          transform: translateY(4vh);
        }
        &:nth-child(3) {
          transform: translateY(7vh);
        }
        &:nth-child(4) {
          transform: translateY(10vh);
        }
        &:nth-child(5) {
          transform: translateY(13vh);
        }
        &:nth-child(6) {
          transform: translateX(6vw) translateY(3vh);
        }
        &:nth-child(7) {
          transform: translateX(6vw) translateY(6vh);
        }
        &:nth-child(8) {
          transform: translateX(6vw) translateY(9vh);
        }
        &:nth-child(9) {
          transform: translateX(6vw) translateY(12vh);
        }
        &:nth-child(10) {
          transform: translateX(6vw) translateY(15vh);
        }
      }
    }
  }
}
.marquee-wrapper {
  width: 100%;
  padding: 6% 0%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #2a57eb;
  > h5 {
    font-size: 36px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
    margin-bottom: 5%;
    padding-left: 4%;
  }
  .marquee-left {
    margin-bottom: 80px;
  }
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    .marquee-content {
      display: inline-flex;
      align-items: center;
      gap: 56px; /* logo 之间的间距 */
      img {
        height: 56px; /* 根据需要调整 */
        width: auto;
      }
    }
  }
}
/* 第一排：从右向左 */
.marquee-left .marquee-content {
  animation: scroll-left 20s linear infinite;
}
/* 第二排：从左向右 */
.marquee-right .marquee-content {
  animation: scroll-right 20s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  } /* 往左移动一半内容宽度 */
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  } /* 往右移回来 */
}
</style>
