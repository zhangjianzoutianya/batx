<script setup>
import $ from "jquery";
</script>

<template>
  <div id="page_cont">
    <Top2 />
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
          <source src="@/assets/img2/banner2.mp4" type="video/mp4" />
        </video>
        <div class="banner_bg"></div>
        <div class="banner_txt">
          <h5 class="animateHide">
            电池全生命周期智能化
            <br />
            服务商 <span>始于安全 拥抱智能 创新无限 </span>
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
      <div class="container">
        <div class="panel">
          <h3>系统产品开发<br />System Product R&D</h3>
          <div class="btn">了解更多</div>
        </div>
        <div class="panel">
          <h3>产线智能<br />Big Data</h3>
          <div class="btn">了解更多</div>
        </div>
        <div class="panel">
          <h3>大数据AI<br />Product AI</h3>
          <div class="btn">了解更多</div>
        </div>
        <div class="panel">
          <h3>资产检测评估<br />Assessment & Test</h3>
          <div class="btn">了解更多</div>
        </div>
      </div>
    </div>

    <div class="index_prod">
      <h5>产品服务</h5>
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

    <Footer1 />
  </div>
</template>

<style scoped lang="less">
.banner {
  position: relative;
  .banner_list {
    .banner_txt {
      position: absolute;
      left: 0;
      width: 100%;
      top: 50%;
      text-align: center;
      color: #ffffff;
      z-index: 5;
      h5 {
        font-size: 50px;
        span {
          color: #ffffff;
          font-size: 20px;
        }
      }
    }
  }
}

.index_cont {
  padding: 5% 12%;
  > h5 {
    text-align: center;
    font-size: 30px;
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
      width: 580px;
      height: 300px;
      .circle {
        width: 300px;
        height: 300px;
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
  padding: 5% 12%;
  > h5 {
    text-align: center;
    font-size: 30px;
    color: #212121;
    margin: 0;
    margin-bottom: 5%;
  }
}

.index_prod {
  padding: 5% 12%;
  background-color: #2a57eb;
  perspective: 1000px;
  > h5 {
    text-align: center;
    font-size: 30px;
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
    font-size: 30px;
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

<script>
//首页logo效果
var IndexLogo = function () {
  var index = 0;
  setInterval(function () {
    index = Math.round(Math.random() * 12);
    $(".index_logo_list").removeClass("active");
    $(".index_logo_list").eq(index).addClass("active");
  }, 4000);
};
IndexLogo();

// $(window).on('scroll',function (){
//   const scrollY = $(window).scrollTop();
//   const maxAngle = 5;
//   const angle = Math.min(scrollY / 100, maxAngle);

//   $('#leftCol').css('transform', 'rotateY(-' + angle + 'deg)');
//   $('#rightCol').css('transform', 'rotateY(' + angle + 'deg)');

// });

//   $(window).on('scroll',function (){
//   const boxes = document.querySelectorAll('#leftCol li');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('tilted');
//     }
//   });
// }, {
//   threshold: 0.5
// });

// boxes.forEach((box, index) => {
//   observer.observe(box);
//   // 增加 delay 感觉
//   box.style.transitionDelay = `${index * 0.2}s`;
// });

// });
</script>
