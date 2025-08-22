<script setup>
import $ from "jquery";
import { ref } from "vue";

const params = new URLSearchParams(window.location.search);
console.log(params);
const id = ref(params.get("id"));
console.log(id.value);
import news1 from "@/assets/img1/news1.jpg";
import news2 from "@/assets/img1/news2.jpg";
import news3 from "@/assets/img1/news3.jpg";
import news4 from "@/assets/img1/news4.jpg";
import news5 from "@/assets/img1/news5.jpg";
import news6 from "@/assets/img1/news6.jpg";

const newsList = ref([
  {
    id: 1,
    title: "2025世界人工智能大会（WAIC）",
    date: "2025年07月22日",
    imgUrl: news1,
  },
  {
    id: 2,
    title: "我司一举拿下ISO三体系认证+AAA信用证书",
    date: "2025年07月22日",
    imgUrl: news2,
  },
  {
    id: 3,
    title: "周期智能受邀参加2025国际气候与环境治理青年论坛",
    date: "2025年07月22日",
    imgUrl: news3,
  },
  {
    id: 4,
    title: "周期智能亮相香港NovaX国际创投嘉年华",
    date: "2025年07月22日",
    imgUrl: news4,
  },
  {
    id: 5,
    title:
      "BATX周期智能获「第二届“清醒杯”清华大学大模型应用创新挑战赛」成长组季军",
    date: "2025年07月22日",
    imgUrl: news5,
  },
  {
    id: 6,
    title: "周期智能获国家重点研发计划重点专项用户证书",
    date: "2025年07月22日",
    imgUrl: news6,
  },
  {
    id: 7,
    title: "2025世界人工智能大会（WAIC）",
    date: "2025年07月22日",
    imgUrl: news1,
  },
  {
    id: 8,
    title: "我司一举拿下ISO三体系认证+AAA信用证书",
    date: "2025年07月22日",
    imgUrl: news2,
  },
  {
    id: 9,
    title: "周期智能受邀参加2025国际气候与环境治理青年论坛",
    date: "2025年07月22日",
    imgUrl: news3,
  },
  {
    id: 10,
    title: "周期智能亮相香港NovaX国际创投嘉年华",
    date: "2025年07月22日",
    imgUrl: news4,
  },
  {
    id: 11,
    title:
      "BATX周期智能获「第二届“清醒杯”清华大学大模型应用创新挑战赛」成长组季军",
    date: "2025年07月22日",
    imgUrl: news5,
  },
  {
    id: 12,
    title: "周期智能获国家重点研发计划重点专项用户证书",
    date: "2025年07月22日",
    imgUrl: news6,
  },
  {
    id: 13,
    title: "2025世界人工智能大会（WAIC）",
    date: "2025年07月22日",
    imgUrl: news1,
  },
  {
    id: 14,
    title: "我司一举拿下ISO三体系认证+AAA信用证书",
    date: "2025年07月22日",
    imgUrl: news2,
  },
  {
    id: 15,
    title: "周期智能受邀参加2025国际气候与环境治理青年论坛",
    date: "2025年07月22日",
    imgUrl: news3,
  },
]);

// const router = useRouter();
// const goToDetail = (newsId) => {
//   // 跳转到新闻详情页，携带当前新闻ID
//   router.push({
//     path: "/newsDetails",
//     query: { id: newsId },
//   });
// };
function goToDetail(id) {
  window.location.href = `newsDetails.html?id=${id}`;
}
</script>

<template>
  <div class="news">
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_news2.jpg" width="100%" />
    </div>
    <div class="news_content">
      <div class="newsList">
        <div
          class="newsItem"
          v-for="(news, index) in newsList"
          :key="index"
          @click="goToDetail(news.id)"
        >
          <div class="newsItem_img">
            <img :src="news.imgUrl" width="100%" :alt="news.title" />
          </div>
          <div class="newsItem_date">
            <h3>{{ news.title }}</h3>
            <p>{{ news.date }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.news {
  padding-top: 85px;
  .news_content {
    padding: 200px 10%;
    .newsList {
      display: flex;
      flex-wrap: wrap; /* 允许换行 */
      margin: 0 -12.5px; /* 抵消子元素的内边距，避免容器溢出 */
      padding: 20px;
      box-sizing: border-box;
      .newsItem {
        width: calc(33.333% - 25px); /* 计算每个元素宽度（减去总间距） */
        margin: 0 12.5px 25px; /* 左右间距12.5px（总25px），底部间距25px */
        margin-bottom: 60px;
        cursor: pointer;
        .newsItem_img {
          margin-bottom: 35px;
        }
        .newsItem_date {
          h3 {
            font-size: 20px;
            color: #010101;
            margin-bottom: 10px;
            font-weight: 800;
          }
          p {
            font-size: 16px;
            color: #010101;
          }
        }
      }
    }
  }
}
</style>
