<script setup>
import $ from "jquery";
import { ref, onMounted } from "vue";
const activeMenu = ref("");

function hoverMenu(menu) {
  activeMenu.value = menu;
}

const goHome = () => {
  window.location.href = "index.html";
};

onMounted(() => {
  $(".hasNav")
    .on("mouseenter", function () {
      $(".loginTop").addClass("active");
      setTimeout(() => {
        const index = $(this).data("index");
        $(".submenu-item").fadeOut(0);
        $(".submenu-item")
          .eq(index - 1)
          .fadeIn(300);
        $(".submenu").slideDown(300);
      }, 300);
    })
    .on("mouseleave", function () {});

  $(".loginTop").on("mouseleave", function () {
    $(".submenu").slideUp(300);
  });
});
</script>

<template>
  <div class="loginTop">
    <div class="logo" @click="goHome">
      <img src="@/assets/img1/logo2.png" class="img1" />
      <img src="@/assets/img1/logo1.png" class="img2" />
    </div>
    <div class="nav">
      <a href="solution.html">
        <span>技术平台</span>
      </a>
      <a href="solutionDetails.html?id=1" class="hasNav" data-index="1">
        <span>解决方案</span>
      </a>
      <a href="productService.html?id=1" class="hasNav" data-index="2">
        <span>产品服务</span>
      </a>
      <a href="http://101.132.147.52:12392/storage">
        <span>BATX平台</span>
      </a>
      <a href="##">
        <span>咨询中心</span>
      </a>
      <a href="about.html">
        <span>关于我们</span>
      </a>
      <a href="##">
        <span><i>CN</i>/<i>EN</i></span>
      </a>
    </div>
    <div class="submenu">
      <div class="submenu-item">
        <p>
          <a href="solutionDetails.html?id=1">系统产品开发</a>
          <a href="solutionDetails.html?id=2">产线智能制造</a>
          <a href="solutionDetails.html?id=3">能源管理运维</a>
          <a href="solutionDetails.html?id=4">资产检测维修</a>
        </p>
      </div>
      <div class="submenu-item">
        <p>
          <a href="productService.html?id=1">热相关</a>
          <a href="productService.html?id=2">电相关 </a>
          <a href="productService.html?id=3">AI相关</a>
        </p>
      </div>
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
  padding: 25px 70px;
  position: fixed;
  top: 0;
  left: 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #fff;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
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
    display: flex;
    a {
      span {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding: 0 20px;
        height: 35px;
        line-height: 35px;
        display: inline-block;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      &:last-child {
        margin-left: 40px;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            margin: 0 4px;
            color: #fff;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            &:hover {
              color: #2660e8;
            }
          }
        }
      }
    }
  }
  .submenu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 999;
    border-top: 1px solid #e0e0df;
    display: none;
    .submenu-item {
      display: none;
      p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0px;
        a {
          color: #a3a3a3;
          font-size: 14px;
          line-height: 50px;
          padding: 0 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            color: #2660e8;
          }
        }
      }
      &:first-child {
        p {
          padding-left: 61%;
        }
      }
      &:last-child {
        p {
          padding-left: 66.6%;
        }
      }
    }
  }
}

.loginTop.active {
  &:before {
    height: 100%;
  }
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
        color: #212121;
        i {
          color: #212121;
        }
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
