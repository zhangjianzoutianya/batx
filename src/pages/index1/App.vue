<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";

const section = ref(null);
const content = ref(null);

const translateX = ref(0);

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
  } else if (scrollY >= sectionTop && scrollY <= sectionTop + maxScroll) {
    const progress = (scrollY - sectionTop) / maxScroll;
    translateX.value = progress * totalScrollLength;
  } else {
    // 当滚动超过section底部时，保持最大translateX值
    translateX.value = totalScrollLength;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
    <div class="index_service" ref="section">
      <div class="index_service_box">
        <div
          class="index_service_list"
          ref="content"
          :style="{ transform: `translateX(-${translateX}px)` }"
        >
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod1.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod2.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod3.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod4.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod5.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod6.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod7.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod8.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod9.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod10.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod11.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod12.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod13.jpg" />
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img1/prod14.jpg" />
            </div>
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
.index_service {
  height: 300vh;
  position: relative;
  .index_service_box {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
    background: #e4e6ee;
    .index_service_list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      height: 100%;
      width: 234vw;
      padding: 6% 0 6% 4%;
      transition: transform 0.3s ease-out;
      overflow: hidden;
      .item {
        width: 27vw;
        flex-shrink: 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-right: 5vw;
        .img {
          width: 100%;
          img {
            display: block;
            width: 100%;
          }
        }
        &:nth-child(2) {
          transform: translateY(2vh);
        }
        &:nth-child(3) {
          transform: translateY(4vh);
        }
        &:nth-child(4) {
          transform: translateY(6vh);
        }
        &:nth-child(5) {
          transform: translateY(8vh);
        }
        &:nth-child(6) {
          transform: translateY(10vh);
        }
        &:nth-child(7) {
          transform: translateY(12vh);
        }
        &:nth-child(8) {
          transform: translateX(7vw) translateY(2vh);
        }
        &:nth-child(9) {
          transform: translateX(7vw) translateY(4vh);
        }
        &:nth-child(10) {
          transform: translateX(7vw) translateY(6vh);
        }
        &:nth-child(11) {
          transform: translateX(7vw) translateY(8vh);
        }
        &:nth-child(12) {
          transform: translateX(7vw) translateY(10vh);
        }
        &:nth-child(13) {
          transform: translateX(7vw) translateY(12vh);
        }
        &:nth-child(14) {
          transform: translateX(7vw) translateY(14vh);
        }
      }
    }
  }
}
</style>
