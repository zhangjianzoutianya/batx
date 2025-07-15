<script setup>
import $ from "jquery";
</script>

<template>
  <div class="loginTop active">
    <div class="logo">
      <img src="@/assets/img1/logo2.png" class="img1" />
      <img src="@/assets/img1/logo1.png" class="img2" />
    </div>
    <div class="nav">
      <div class="nav_menu">
        <a href="##">
          <span>核心技术</span>
        </a>
      </div>
      <div class="nav_menu hasNav">
        <a href="##">
          <span>解决方案</span>
        </a>
        <div class="submenu">
          <a href="##">系统产品开发</a>
          <a href="##">产线智能制造</a>
          <a href="##">能源管理运维</a>
          <a href="##">资产检测维修</a>
        </div>
      </div>
      <div class="nav_menu hasNav">
        <a href="##">
          <span>产品服务</span>
        </a>
      </div>
      <div class="nav_menu">
        <a href="##">
          <span>BATX平台</span>
        </a>
      </div>
      <div class="nav_menu">
        <a href="##">
          <span>咨询中心</span>
        </a>
      </div>
      <div class="nav_menu">
        <a href="##">
          <span>关于我们</span>
        </a>
      </div>
      <div class="nav_menu">
        <a href="##">
          <span><i>CN</i>/<i>EN</i></span>
        </a>
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
    .nav_menu {
      position: relative;

      .submenu {
        position: fixed;
        left: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
      }
    }
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

<script></script>
