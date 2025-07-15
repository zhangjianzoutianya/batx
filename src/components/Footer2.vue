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
      <img src="@/assets/img1/logo_foot.png" class="img2" />
    </div>
    <div class="menu">
      <ul>
        <li>
          <a href="##"><h5>技术平台</h5></a>
          <a href="##"><p class="first">机理模型</p></a>
          <a href="##"><p>本征安全</p></a>
          <a href="##"><p>主动安全</p></a>
          <a href="##"><p>被动安全</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="##"><h5></h5></a>
          <a href="##"><p class="first">AI模型</p></a>
          <a href="##"><p>状态估计</p></a>
          <a href="##"><p>故障诊断</p></a>
          <a href="##"><p>安全预警</p></a>
          <a href="##"><p>寿命预测</p></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="solution.html"><h5>解决方案</h5></a>
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
          <a href="http://101.132.147.52:12392/storage"><h5>BATX平台</h5></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="##"><h5>咨询中心</h5></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="about.html"><h5>关于我们</h5></a>
          <a href="about.html"><p class="first">团队优势</p></a>
          <a href="about.html"><p>发展历程</p></a>
          <a href="about.html"><p>荣誉资质</p></a>
        </li>
      </ul>
    </div>
    <div class="bott">
      <div class="phone">
        <a href="##">联系我们</a> <span>Tel：18801151621</span>
        <span>Email：yufang.lu@batx.tech</span>
        <div class="p_ico">
          <img src="@/assets/img1/mail2.png" style="margin-right: 10px" />
          <img src="@/assets/img1/phone2.png" />
        </div>
      </div>
      <div class="line"></div>
      <div class="sild">
        <p>
          Privacy Terms of Use Legal & Compliance Copyright © 2004-2025 . All
          rights reserved,
        </p>
        <span @click="scrollToTop">Back to ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.footer {
  padding: 6% 4% 1% 4%;
  background-color: #000000;
  .logo {
    border-bottom: 1px solid #adadad;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
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
          color: #adadad;
          font-size: 20px;
          font-weight: 500;
          height: 25px;
          margin: 0;
        }
        p {
          font-size: 15px;
          color: #adadad;
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
        color: #adadad;
      }
      span {
        margin-right: 15px;
        color: #adadad;
      }
      .p_ico {
        position: absolute;
        bottom: 0;
        right: 8%;
      }
    }
    .line {
      border-bottom: 1px solid #adadad;
      padding-bottom: 10px;
      margin-bottom: 20px;
      a {
        font-size: 14px;
        color: #adadad;
      }
      span {
        margin-left: 50px;
        color: #adadad;
      }
    }
    .sild {
      display: flex;
      padding: 0 8%;
      p {
        font-size: 14px;
        color: #adadad;
      }
      span {
        font-size: 16px;
        color: #adadad;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}
</style>
