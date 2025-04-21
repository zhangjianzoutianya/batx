<script setup>
import $ from "jquery";
</script>

<template>
  <div class="loginTop">
    <div class="logo">
      <img src="@/assets/img1/logo2.png" class="img1" />
      <img src="@/assets/img1/logo1.png" class="img2" />
    </div>
    <div class="nav">
      <a href="##">
        <span>核心技术</span>
      </a>
      <a href="##">
        <span>解决方案</span>
      </a>
      <a href="##">
        <span>产品&服务</span>
      </a>
      <a href="##">
        <span>公司</span>
      </a>
      <a href="##">
        <span>新闻</span>
      </a>
      <a href="##">
        <span>联络</span>
      </a>
      <a href="##">
        <span>CN/EN</span>
      </a>
    </div>
  </div>
</template>
<style scoped lang="less">
.loginTop {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 9;
  padding: 20px 70px;
  position: fixed;
  top: 0;
  left: 0;
  .logo {
    width: 252px;
    position: relative;
    img {
      height: 35px;
      -webkit-transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.9s;
      transition: all cubic-bezier(0.18, 1, 0.21, 1) 0.9s;
    }
    img:first-child {
      opacity: 1;
      -moz-opacity: 1;
      -khtml-opacity: 1;
      -webkit-opacity: 1;
      filter: alpha(opacity=100);
    }
    img:last-child {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      -moz-opacity: 0;
      -khtml-opacity: 0;
      -webkit-opacity: 0;
      filter: alpha(opacity=0);
    }
  }
  .nav {
    position: absolute;
    top: 50%;
    right: 70px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    a {
      span {
        color: #fff;
        font-size: 16px;
        padding: 0 20px;
        height: 35px;
        line-height: 35px;
        display: inline-block;
      }
    }
  }
}

.loginTop.active {
  background-color: #fff;
  .logo img:first-child {
    opacity: 0;
    -moz-opacity: 0;
    -khtml-opacity: 0;
    -webkit-opacity: 0;
    filter: alpha(opacity=0);
  }
  .logo img:last-child {
    opacity: 1;
    -moz-opacity: 1;
    -khtml-opacity: 1;
    -webkit-opacity: 1;
    filter: alpha(opacity=100);
  }
  .nav {
    a {
      span {
        color: #bcbcbc;
      }
    }
  }
}
</style>

<script>
//缓动
$(window).scroll(function () {
  var scrollT = $(window).scrollTop();
  if (scrollT > 50) {
    $(".loginTop").addClass("active");
  } else {
    $(".loginTop").removeClass("active");
  }
});
</script>
