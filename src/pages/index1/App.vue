<script setup>
import $ from "jquery";
import Footer from "../../components/Footer1.vue";
</script>

<template>
  <div>
    <Top1 />

    <div class="banner">
      <div class="banner_list">
        <video
          ref="videoPlayer"
          width="100%"
          controls
          autoplay
          muted
          loop
          playsinline
        >
          <source src="@/assets/img1/banner1.mp4" type="video/mp4" />
        </video>
        <div class="banner_bg"></div>
        <div class="banner_txt">
          <h5 class="animateHide">
            电池全生命周期
            <br />
            智能化服务商
          </h5>
          <p class="animateHide">
            Battery life cycle
            <br />
            Intelligent service provider
          </p>
        </div>
      </div>
    </div>

    <div class="index_pro">
      <h5>核心技术</h5>
      <div class="index_pro_box">
        <div class="item item1">
          <div class="txt"></div>
          <div class="writ">
            <h5>解决多个任务</h5>
            <p>PM 4 Battery</p>
          </div>
          <div class="writ_bot">
            <p>
              <span>研发制造</span><span>智能管理</span><span>检测运维</span
              ><span>寿命预测</span>
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
            <h5>适用多种场景</h5>
            <p>AI 4 Battery</p>
          </div>
          <div class="writ_bot">
            <p>
              <span>固态电池</span><span>电动汽车</span><span>储能电池</span
              ><span>光伏电池</span>
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
            <h5>系统产品开发</h5>
            <p>System Product R&D</p>
          </div>
        </div>
        <div class="solu_box solu_box3">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu3.jpg" />
          </div>
          <div class="text">
            <h5>系统产品开发</h5>
            <p>System Product R&D</p>
          </div>
        </div>
        <div class="solu_box solu_box4">
          <div class="imgBg"></div>
          <div class="img">
            <img src="@/assets/img1/solu4.jpg" />
          </div>
          <div class="text">
            <h5>系统产品开发</h5>
            <p>System Product R&D</p>
          </div>
        </div>
      </div>
    </div>

    <div class="index_service">
      <h5>产品服务</h5>
      <div class="service_list">
        <div class="service_list_one">
          <div class="img">
            <img src="@/assets/img1/prod1.jpg" />
          </div>
          <div class="text">
            <p>热失控机理研究</p>
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
          <img src="@/assets/img1/partner3.png" alt="logo" />
          <img src="@/assets/img1/partner4.png" alt="logo" />
          <img src="@/assets/img1/partner5.png" alt="logo" />
          <img src="@/assets/img1/partner6.png" alt="logo" />
          <img src="@/assets/img1/partner7.png" alt="logo" />
          <img src="@/assets/img1/partner8.png" alt="logo" />
          <img src="@/assets/img1/partner1.png" alt="logo" />
          <img src="@/assets/img1/partner2.png" alt="logo" />
          <img src="@/assets/img1/partner3.png" alt="logo" />
          <img src="@/assets/img1/partner4.png" alt="logo" />
          <img src="@/assets/img1/partner5.png" alt="logo" />
          <img src="@/assets/img1/partner6.png" alt="logo" />
          <img src="@/assets/img1/partner7.png" alt="logo" />
          <img src="@/assets/img1/partner8.png" alt="logo" />
        </div>
      </div>

      <div class="marquee marquee-right">
        <div class="marquee-content">
          <img src="@/assets/img1/partner9.png" alt="logo" />
          <img src="@/assets/img1/partner10.png" alt="logo" />
          <img src="@/assets/img1/partner11.png" alt="logo" />
          <img src="@/assets/img1/partner12.png" alt="logo" />
          <img src="@/assets/img1/partner13.png" alt="logo" />
          <img src="@/assets/img1/partner14.png" alt="logo" />
          <img src="@/assets/img1/partner15.png" alt="logo" />
          <img src="@/assets/img1/partner16.png" alt="logo" />
          <img src="@/assets/img1/partner17.png" alt="logo" />
          <img src="@/assets/img1/partner9.png" alt="logo" />
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

    <Footer1 />
  </div>
</template>

<style scoped lang="less">
.banner {
  width: 100%;
  position: relative;
  overflow: hidden;
  .banner_list {
    width: 100%;
    position: relative;
    .banner_txt {
      position: absolute;
      left: 5%;
      bottom: 10%;
      color: #fff;
      h5 {
        font-size: 45px;
        margin-bottom: 40px;
      }
      p {
        font-size: 25px;
        color: #fff;
      }
    }
  }
}
.index_service {
  width: 100%;
  padding: 6% 4%;
  > h5 {
    font-size: 36px;
    font-weight: 400;
    color: #000;
    margin: 0;
    margin-bottom: 5%;
  }
}
.index_pro {
  width: 100%;
  padding: 6% 4%;
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
          color: #fff;
          font-size: 20px;
        }
        p {
          color: #fff;
          font-size: 14px;
        }
      }
      .writ_bot {
        position: absolute;
        bottom: 20px;
        left: 40px;
        z-index: 2;
        opacity: 0;
        -moz-opacity: 0;
        -khtml-opacity: 0;
        -webkit-opacity: 0;
        filter: alpha(opacity=0);
        p {
          span {
            color: #fff;
            margin-right: 10px;
            font-size: 14px;
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
        img {
          width: 50px;
        }
      }
      .txt {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition-duration: 0.3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        background: transparent;
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
    }
    .item:hover {
      .txt {
        background: rgba(0, 22, 56, 0.4);
      }
      .img {
        img {
          filter: blur(100px);
        }
      }
      .writ_bot {
        opacity: 1;
        -moz-opacity: 1;
        -khtml-opacity: 1;
        -webkit-opacity: 1;
        filter: alpha(opacity=100);
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
  padding: 6% 4%;
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
    aspect-ratio: 423 / 160;
    .solu_box {
      overflow: hidden;
      position: relative;
      .imgBg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
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
        left: 15px;
        bottom: 30px;
        color: #fff;
        z-index: 2;
        h5 {
          font-size: 18px;
        }
        p {
          color: #fff;
          font-size: 18px;
        }
      }
    }
    .solu_box:hover {
      .imgBg {
        background: rgba(0, 22, 56, 0.4);
      }
      .img {
        img {
          filter: blur(100px);
        }
      }
    }
    &:has(.solu_box1:hover) {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    &:has(.solu_box2:hover) {
      grid-template-columns: 1fr 2fr 1fr 1fr;
    }
    &:has(.solu_box3:hover) {
      grid-template-columns: 1fr 1fr 2fr 1fr;
    }
    &:has(.solu_box4:hover) {
      grid-template-columns: 1fr 1fr 1fr 2fr;
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
      gap: 30px; /* logo 之间的间距 */
      img {
        height: 60px; /* 根据需要调整 */
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

<script>
$(".banner").height($(window).height());
console.log($(".banner").height());
</script>
