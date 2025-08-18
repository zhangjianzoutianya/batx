<script setup>
import $ from "jquery";
import { ref } from "vue";

const params = new URLSearchParams(window.location.search);
console.log(params);
const id = ref(params.get("id"));
console.log(id.value);
</script>

<template>
  <div class="news">
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_news2.jpg" width="100%" />
    </div>
    <div class="news_detail">
      <div class="news_broke">
        <div class="date">
          <div class="line"></div>
          <h5>展会预告 | 周期智能邀您参加 <br />世界人工智能大会</h5>
          <p>发布日期：2025年07月22日</p>
        </div>
        <p>
          2025世界人工智能大会（WAIC）将于7月26日至29日在上海世博中心与世博展览馆举行。本届大会以“智能时代
          同球共济”为主题，汇聚来自全球30余国的1200余位嘉宾，包括12位图灵奖及诺贝尔奖得主、80余位中外院士及顶尖实验室代表，规模为历届之最。核心议题涵盖AI基础设施、科学智能、智能终端、AI+工业/金融/医疗/教育，以及安全治理十大领域，共话技术前沿与全球协作。
        </p>

        <p>
          「BATX周期智能」作全球领先的电池全生命周期AI服务商，将携自主研发的电池机理模型PM
          4Battery、AI大模型AI
          4Battery融合而成的BATX技术底座，及电池系统产品开发、能源管理运维、资产检测维修的软硬一体解决方案亮相WAIC
          2025（展台号：H4-FT212）。
        </p>
        <img src="@/assets/img1/news_detail1.jpg" width="100%" />
        <p>
          我们诚挚地邀请您莅临展台，全方位了解我们如何通过领先的AI技术，实现电池精准安全预警，提升资产运营效率，赋能新能源电池全生命周期的数智化管理！
        </p>
      </div>
    </div>
    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.news {
  padding-top: 85px;
  .news_detail {
    padding: 0 12% 250px 12%;
    background: #fcfcfc;
    .news_broke {
      background-color: #ffffff;
      padding: 110px 200px;
      margin-top: -160px;
      z-index: 2;
      position: relative;
      .date {
        margin-bottom: 80px;
        .line {
          width: 145px;
          height: 7px;
          background-color: #2573fb;
          margin-bottom: 30px;
        }
        h5 {
          font-size: 56px;
          font-weight: 400;
          color: #333333;
          margin-bottom: 40px;
        }
        p {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
        }
      }
      p {
        font-size: 20px;
        font-weight: 400;
        color: #333333;
        line-height: 1.8;
        margin-bottom: 30px;
        text-indent: 2em;
      }
      img {
        margin: 60px 0;
      }
    }
  }
}
</style>
