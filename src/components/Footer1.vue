<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 平滑滚动
  });
};

const goHome = () => {
  window.location.href = "index.html";
};
</script>
<template>
  <div class="footer">
    <div class="logo" @click="goHome">
      <img src="@/assets/img1/logo1.png" class="img2" />
      <span>联系我们 Tel： (+86)15385765708</span>
    </div>
    <div class="menu">
      <ul>
        <li>
          <a href="solution.html"><h5>技术平台</h5></a>
          <a href="solution.html"><p class="first">PM4B</p></a>
          <a href="solution.html"><p>AI4B</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="solutionDetails.html?id=1"><h5>解决方案</h5></a>
          <a href="solutionDetails.html?id=1"
            ><p class="first">系统产品开发</p></a
          >
          <a href="solutionDetails.html?id=2"><p>产线智能制造</p></a>
          <a href="solutionDetails.html?id=3"><p>大数据AI平台</p></a>
          <a href="solutionDetails.html?id=4"><p>资产检测评估</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="productService.html?id=1"><h5>产品服务</h5></a>
          <a href="productService.html?id=1"><p class="two">热相关</p></a>
          <a href="productService.html?id=1"><p>热失控机理</p></a>
          <a href="productService.html?id=1"><p>热蔓延仿真</p></a>
          <a href="productService.html?id=1"><p>热管理设计</p></a>
          <a href="productService.html?id=1"><p>热安全预警</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="productService.html?id=2"><h5></h5></a>
          <a href="productService.html?id=2"><p class="two">电相关</p></a>
          <a href="productService.html?id=2"><p>性能仿真</p></a>
          <a href="productService.html?id=2"><p>状态估计</p></a>
          <a href="productService.html?id=2"><p>快充控制</p></a>
          <a href="productService.html?id=2"><p>寿命预测</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="productService.html?id=3"><h5></h5></a>
          <a href="productService.html?id=3"><p class="two">AI相关</p></a>
          <a href="productService.html?id=3"><p>AI管理大模型</p></a>
          <a href="productService.html?id=3"><p>AI制造大模型</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="http://101.132.147.52:12392/real"><h5>BATX平台</h5></a>
          <a href="http://101.132.147.52:12392/real"
            ><p class="first">实车数据</p></a
          >
          <a href="http://101.132.147.52:12392/real"><p>单体数据</p></a>
          <a href="http://101.132.147.52:12392/real"><p>储能数据</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="news.html"><h5>周期资讯</h5></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="about.html"><h5>关于我们</h5></a>
          <a href="about.html"><p class="first">公司概况</p></a>
          <a href="about.html"><p>团队介绍</p></a>
          <a href="about.html"><p>发展历程</p></a>
          <a href="about.html"><p>荣誉资质</p></a>
          <a href="about.html"><p>联系我们</p></a>
        </li>
      </ul>
    </div>
    <div class="bott">
      <div class="phone">
        <div class="p_ico">
          <div class="icon-item" data-index="1">
            <img src="@/assets/img1/foot_icon1.png" alt="图标1" height="24" />
            <!-- 对应的二维码 -->
            <div class="qrcode">
              <img src="@/assets/img1/foot1.jpg" alt="二维码1" />
            </div>
          </div>
          <div class="icon-item" data-index="2">
            <img src="@/assets/img1/foot_icon2.png" alt="图标2" height="24" />
            <div class="qrcode">
              <img src="@/assets/img1/foot2.jpg" alt="二维码2" />
            </div>
          </div>
          <div class="icon-item" data-index="3">
            <img src="@/assets/img1/foot_icon3.png" alt="图标3" height="24" />
            <div class="qrcode">
              <img src="@/assets/img1/foot3.jpg" alt="二维码3" />
            </div>
          </div>
          <div class="icon-item" data-index="4">
            <img src="@/assets/img1/foot_icon4.png" alt="图标4" height="24" />
            <div class="qrcode">
              <img src="@/assets/img1/foot4.jpg" alt="二维码4" />
            </div>
          </div>
          <div class="icon-item" data-index="5">
            <img src="@/assets/img1/foot_icon5.png" alt="图标5" height="24" />
            <div class="qrcode">
              <img src="@/assets/img1/foot5.jpg" alt="二维码5" />
            </div>
          </div>
          <div class="icon-item" data-index="6">
            <img src="@/assets/img1/foot_icon6.png" alt="图标6" height="24" />
            <div class="qrcode">
              <img src="@/assets/img1/foot6.jpg" alt="二维码6" />
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="sild">
        <p>Privacy Terms of Use Legal & Compliance</p>
        <span @click="scrollToTop">Back to Top</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.footer {
  padding: 6% 4% 1% 4%;
  .logo {
    border-bottom: 1px solid #bcbcbc;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding-right: 8%;
    .img2 {
      height: 24px;
    }
    span {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .menu {
    padding: 20px 8% 5% 8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ul {
      li {
        h5 {
          color: #656565;
          font-size: 20px;
          font-weight: 500;
          height: 25px;
          margin: 0;
        }
        p {
          font-size: 15px;
          &:hover {
            color: #3c72f2;
          }
        }
        p.first {
          margin-top: 40px;
        }
        p.two {
          margin: 20px 0;
        }
      }
    }
  }
  .bott {
    .phone {
      position: relative;
      padding: 0 8%;
      a {
        margin-right: 40px;
      }
      span {
        margin-right: 15px;
      }
      .p_ico {
        position: absolute;
        bottom: 0;
        right: 8%;
        display: flex;
        gap: 10px; /* 图标之间的间距 */
        justify-content: center; /* 水平居中 */
        .icon-item {
          position: relative;

          .qrcode {
            position: absolute; /* 绝对定位，相对于父元素 */
            bottom: 40px; /* 二维码显示在图标下方 */
            left: 50%;
            transform: translateX(-50%); /* 水平居中 */
            width: 66px; /* 二维码宽度 */
            height: 66px; /* 二维码高度 */
            opacity: 0; /* 默认隐藏 */
            visibility: hidden; /* 默认不可见 */
            transition: all 0.3s ease; /* 过渡动画 */
            z-index: 10; /* 确保显示在其他元素上方 */
          }
        }
        .icon-item:hover {
          cursor: pointer;
        }
        .icon-item:hover .qrcode {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .line {
      border-bottom: 1px solid #bcbcbc;
      padding-bottom: 10px;
      margin-bottom: 20px;
      a {
        font-size: 14px;
      }
      span {
        margin-left: 50px;
      }
    }
    .sild {
      display: flex;
      justify-content: space-between;
      padding: 0 8%;
      p {
        font-size: 14px;
      }
      span {
        font-size: 16px;
        color: #656565;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}
</style>
