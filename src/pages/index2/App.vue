<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";
import Top from "@/components/Top2.vue";
import Footer from "@/components/Footer1.vue";

var IndexLogo = function () {
  var index = 0;
  setInterval(function () {
    index = Math.round(Math.random() * 12);
    $(".index_logo_list").removeClass("active");
    $(".index_logo_list").eq(index).addClass("active");
  }, 4000);
};

onMounted(() => {
  $(".banner").height($(window).height());
  $(".index_solut_box").height($(".index_solut_box").width() * 0.42);
  $(".block_item").width($(".index_solut_box").width() * 0.64);
  IndexLogo();
  $(".block").hover(
    function () {
      $(".block").removeClass("active");
      $(this).addClass("active");
    },
    function () {}
  );
});

onBeforeUnmount(() => {});
</script>

<template>
  <div id="page_cont">
    <Top />
    <div class="banner">
      <div class="banner_list">
        <video ref="videoPlayer" width="100%" autoplay muted loop playsinline>
          <source src="@/assets/img2/banner2.mp4" type="video/mp4" />
        </video>
        <div class="banner_bg"></div>
        <div class="banner_txt">
          <h5>
            电池全生命周期智能化 服务商 <br />
            <span> <i>始于安全</i> <i>拥抱智能</i> <i>创新无限</i> </span>
          </h5>
        </div>
      </div>
    </div>

    <div class="index_cont">
      <h5>核心技术</h5>
      <div class="cent_top">PM 4 Battery</div>
      <div class="column_all">
        <!-- 左侧任务 -->
        <div class="column">
          <div class="item left">
            <span>研发制造</span>
            <div class="icon-circle">
              <img src="@/assets/img2/index_p1.png" width="100%" />
            </div>
          </div>
          <div class="item left left2">
            <span>检测运维</span>
            <div class="icon-circle">
              <img src="@/assets/img2/index_p2.png" width="100%" />
            </div>
          </div>
          <div class="item left left2">
            <span>智能管理</span>
            <div class="icon-circle">
              <img src="@/assets/img2/index_p3.png" width="100%" />
            </div>
          </div>
          <div class="item left">
            <span>寿命预测</span>
            <div class="icon-circle">
              <img src="@/assets/img2/index_p4.png" width="100%" />
            </div>
          </div>
        </div>

        <!-- 中间交集圆 -->
        <div class="venn">
          <div class="circle left">解决多个任务</div>
          <div class="circle right">适用多种场景</div>
        </div>

        <!-- 右侧场景 -->
        <div class="column">
          <div class="item right">
            <div class="icon-circle">
              <img src="@/assets/img2/index_p5.png" width="100%" />
            </div>
            <span>固态电池</span>
          </div>
          <div class="item right right2">
            <div class="icon-circle">
              <img src="@/assets/img2/index_p6.png" width="100%" />
            </div>
            <span>储能电池</span>
          </div>
          <div class="item right right2">
            <div class="icon-circle">
              <img src="@/assets/img2/index_p7.png" width="100%" />
            </div>
            <span>电动汽车</span>
          </div>
          <div class="item right">
            <div class="icon-circle">
              <img src="@/assets/img2/index_p8.png" width="100%" />
            </div>
            <span>光伏电池</span>
          </div>
        </div>
      </div>
      <div class="cent_bot">AI 4 Battery</div>
    </div>

    <div class="index_solut">
      <h5>解决方案</h5>
      <div class="index_solut_box">
        <div class="block active">
          <div class="block_item">
            <h3>系统产品开发<br />System Product R&D</h3>
            <div class="btn">
              了解更多 <img src="@/assets/img2/rigBtn.png" />
            </div>
            <div class="img">
              <img src="@/assets/img2/index_so1.png" width="100%" />
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block_item">
            <h3>产线智能<br />Big Data</h3>
            <div class="btn">
              了解更多<img src="@/assets/img2/rigBtn.png" />
            </div>
            <div class="img">
              <img src="@/assets/img2/index_so2.png" width="100%" />
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block_item">
            <h3>大数据AI<br />Product AI</h3>
            <div class="btn">
              了解更多<img src="@/assets/img2/rigBtn.png" />
            </div>
            <div class="img">
              <img src="@/assets/img2/index_so3.png" width="100%" />
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block_item">
            <h3>资产检测评估<br />Assessment & Test</h3>
            <div class="btn">
              了解更多<img src="@/assets/img2/rigBtn.png" />
            </div>
            <div class="img">
              <img src="@/assets/img2/index_so4.png" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_prod">
      <h5>产品&服务</h5>
      <div class="index_prod_list" id="brand_col">
        <ul class="left" id="leftCol">
          <li>
            <img src="@/assets/img2/index_icon1.png" width="100%" />
            <div>热失控机理研究</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon4.png" width="100%" />
            <div>电池工况模拟系统</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon7.png" width="100%" />
            <div>工艺仿真与优化软件</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon10.png" width="100%" />
            <div>析理预警与检测软件</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon13.png" width="100%" />
            <div>智能补电与均衡仪</div>
          </li>
        </ul>
        <ul class="center">
          <li>
            <img src="@/assets/img2/index_icon2.png" width="100%" />
            <div>热蔓延建模仿真</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon5.png" width="100%" />
            <div>智能化成于分容设备</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon8.png" width="100%" />
            <div>资质安全预警软件</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon11.png" width="100%" />
            <div>系统快充策略开发软件</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon14.png" width="100%" />
            <div>电池资质检测评估报告</div>
          </li>
        </ul>
        <ul class="right">
          <li>
            <img src="@/assets/img2/index_icon3.png" width="100%" />
            <div>热管理系统设计</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon6.png" width="100%" />
            <div>电池制造产线大数据</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon9.png" width="100%" />
            <div>寿命估计与预测软件</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon12.png" width="100%" />
            <div>系统不一致性估计</div>
          </li>
          <li>
            <img src="@/assets/img2/index_icon15.png" width="100%" />
            <div>电池资质检测评估报告</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="index_logo">
      <h5>合作伙伴</h5>
      <div class="index_logo_box">
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_1.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_2.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_4.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_4.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_5.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_6.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_7.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_8.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_9.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_10.jpg" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_11.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_12.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_13.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_14.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_15.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_16.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_17.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_18.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_19.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_20.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_21.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_22.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_23.png" width="100%" />
          </div>
        </div>
        <div class="index_logo_list">
          <div>
            <img src="@/assets/img2/index_logo_22.png" width="100%" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped lang="less">
.banner {
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
    .banner_txt {
      position: absolute;
      left: 0;
      width: 100%;
      top: 50%;
      text-align: center;
      color: #ffffff;
      z-index: 5;
      h5 {
        font-size: 45px;
        font-weight: 400;
        margin-bottom: 0;
        letter-spacing: 4px;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          i {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            margin: 0 6px;
          }
        }
      }
    }
  }
}

.index_cont {
  padding: 5% 12%;
  > h5 {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    color: #212121;
    margin: 0;
    margin-bottom: 5%;
  }
  .cent_top {
    text-align: center;
    font-size: 16px;
    margin-bottom: 60px;
    color: #000;
  }
  .cent_bot {
    text-align: center;
    font-size: 16px;
    color: #000;
  }
  .column_all {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    .column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 320px;
      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        .icon-circle {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: #57d2cc; /* 左侧青色 */
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 18px;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        .icon-circle:hover {
          transform: scale(1.1); /* 放大 10% */
        }
      }
      .left {
        justify-content: flex-end;
        span {
          color: #000;
          font-size: 16px;
          margin-right: 50px;
        }
      }
      .left2 {
        transform: translateX(-50px);
      }

      .right {
        justify-content: flex-start;
        span {
          color: #000;
          font-size: 16px;
          margin-left: 50px;
        }
        .icon-circle {
          background-color: #6ca8f1; /* 右侧蓝色 */
        }
      }
      .right2 {
        transform: translateX(50px);
      }
    }

    .venn {
      position: relative;
      width: 600px;
      height: 300px;
      .circle {
        width: 320px;
        height: 320px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 16px;
        text-align: center;
        padding: 10px;
        transition: transform 0.2s ease;
        cursor: pointer;
      }
      .circle:hover {
        transform: scale(1.1); /* 放大 10% */
      }
      .left {
        left: 0;
        background-color: rgba(87, 210, 204, 0.9);
      }
      .right {
        right: 0;
        background-color: rgba(108, 168, 241, 0.9);
      }
    }
  }
}

.index_solut {
  padding: 5% 0 5% 5%;
  overflow: hidden;
  > h5 {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    color: #212121;
    margin: 0;
    margin-bottom: 5%;
  }
  .index_solut_box {
    width: 106%;
    position: relative;
    overflow: hidden;
    display: flex;
    .block {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background-color: #9799a6;
      font-size: 24px;
      border-radius: 20px 0 0 20px;
      position: relative;
      left: 0;
      width: 12%;
      height: 100%;
      overflow: hidden;
      .block_item {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      h3 {
        color: #ffffff;
        position: absolute;
        top: 3%;
        left: 3%;
        font-size: 26px;
        line-height: 36px;
        font-weight: 400;
      }
      .img {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        img {
          height: 100%;
          display: block;
        }
      }
      .btn {
        position: absolute;
        left: 3%;
        bottom: 5%;
        width: 160px;
        height: 60px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        color: #ffffff;
        text-align: left;
        font-size: 14px;
        padding: 8px;
        img {
          position: absolute;
          width: 6px;
          bottom: 10px;
          right: 8px;
        }
      }
      &:nth-child(1) {
        z-index: 1;
      }
      &:nth-child(2) {
        z-index: 2;
        left: -1%;
        background-color: #2a57eb;
      }
      &:nth-child(3) {
        z-index: 3;
        left: -2%;
        background-color: #e1e1e1;
      }
      &:nth-child(4) {
        z-index: 3;
        left: -3%;
        background-color: #b5b7c5;
      }
    }
    .block.active {
      width: 64%;
    }
  }
}

.index_prod {
  padding: 5% 12%;
  background-color: #2a57eb;
  perspective: 1000px;
  > h5 {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
    margin-bottom: 5%;
  }
  .index_prod_list {
    display: flex;
    margin: auto;
    gap: 25px;
    ul {
      margin: 0px;
      padding: 0px;
      width: 33%;
      transform-origin: bottom left;
      li {
        width: 100%;
        border: 1px solid #ffffff;
        margin-bottom: 25px;
        padding: 90px 0 60px 0;
        border-radius: 20px;
        position: relative;
        text-align: center;
        transition: transform 0.6s ease;
        img {
          max-width: 264px;
        }
        div {
          color: #ffffff;
          text-align: center;
          margin-top: 20px;
          font-size: 18px;
        }
      }
      li.tilted {
        transform: rotate(-10deg) translateX(-10px);
        opacity: 1;
      }
    }
  }
}

.index_logo {
  padding: 5% 12%;
  > h5 {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    color: #212121;
    margin: 0;
    margin-bottom: 5%;
  }
  .index_logo_box {
    display: flex;
    flex-wrap: wrap;
    .index_logo_list {
      width: 16%;
      padding: 4% 1%;
      cursor: pointer;
      border-bottom: 1px solid #f5f5f5;
      border-right: 1px solid #f5f5f5;
      img {
        -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.9s;
        transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.9s;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
      }
    }

    .index_logo_list.active {
      div {
        animation: indexLogo 2.5s;
        -webkit-animation: indexLogo 2.5s;
        img {
          filter: alpha(opacity=100);
          -webkit-filter: grayscale(0);
          filter: grayscale(0);
        }
      }

      .index_logo_list:nth-child(5n) {
        border-right: none;
      }
      .index_logo_list:nth-last-child(1) {
        border-bottom: none;
      }
      .index_logo_list:nth-last-child(2) {
        border-bottom: none;
      }
      .index_logo_list:nth-last-child(3) {
        border-bottom: none;
      }
      .index_logo_list:nth-child(4),
      .index_logo_list:nth-child(7),
      .index_logo_list:nth-child(9),
      .index_logo_list:nth-child(12),
      .index_logo_list:nth-child(13) {
        opacity: 0.8;
        -moz-opacity: 0.8;
        -khtml-opacity: 0.8;
        -webkit-opacity: 0.8;
        filter: alpha(opacity=80);
      }
    }
  }
}

.index_logo_list:hover img {
  opacity: 1;
  -moz-opacity: 1;
  -khtml-opacity: 1;
  -webkit-opacity: 1;
  filter: alpha(opacity=100);
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
@keyframes indexLogo {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(0.5);
  }
  51% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@-webkit-keyframes indexLogo {
  0% {
    -webkit-opacity: 1;
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-opacity: 0;
    -webkit-transform: scale(0.5);
  }
  51% {
    -webkit-opacity: 0;
    -webkit-transform: scale(1.5);
  }
  100% {
    -webkit-opacity: 1;
    -webkit-transform: scale(1);
  }
}
</style>
