<script setup>
import $ from "jquery";

console.log($(".index_pro"));
</script>

<template>
  <div>
    <div class="index_pro">
      <h5>核心技术</h5>
      <div class="index_pro_box">
        <div class="item item1">
          <div class="txt"></div>
          <div class="img">
            <img src="@/assets/img1/index_pro1.jpg" />
          </div>
        </div>
        <div class="item item2">
          <div class="txt"></div>
          <div class="img">
            <img src="@/assets/img1/index_pro2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
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
    }
    &:has(.item1:hover) {
      grid-template-columns: 2fr 1fr;
    }
    &:has(.item2:hover) {
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>
