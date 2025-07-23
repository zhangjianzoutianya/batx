<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
import { ref } from "vue";
// 步骤1: 定义两个新变量
const isModalVisible = ref(false); // 控制弹窗是否显示，默认为 false
const selectedId = ref(null); // 存放选中的ID

// 步骤2: 创建新的点击事件函数
function showTeamDetails(id) {
  console.log("点击了人物，ID是:", id);
  selectedId.value = id; // 保存ID
  isModalVisible.value = true; // 打开弹窗
}

// 步骤3: 创建关闭弹窗的函数
function closeModal() {
  isModalVisible.value = false; // 关闭弹窗
}

// const goToTeam = (id) => {
//   window.location.href = `team.html?id=${id}`;
// };
</script>
<template>
  <div class="about">
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_about.jpg" width="100%" />
    </div>
    <div class="about_tema">
      <h2>团队优势</h2>
      <p>
        核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源<br />领域的专业知识，又具备大数据、AI的基础研发和应用能力。
      </p>
      <div class="team">
        <div class="left" @click="showTeamDetails(1)">
          <img src="@/assets/img1/about1_1.jpg" />
          <p>卢宇芳 CEO</p>
        </div>

        <div class="right">
          <div class="grid">
            <div class="item" @click="showTeamDetails(2)">
              <img src="@/assets/img1/about1_2.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>欧阳明高</h5>
                  <p>专家委员会主席</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico1.png" width="71px" />
                </div>
              </div>
            </div>
            <div class="item" @click="showTeamDetails(3)">
              <img src="@/assets/img1/about1_3.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>冯旭宁</h5>
                  <p>联合创始人、首席科学家</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico7.png" width="71px" />
                </div>
              </div>
            </div>
            <div class="item" @click="showTeamDetails(4)">
              <img src="@/assets/img1/about1_4.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>吴国伟</h5>
                  <p>联合创始人、高级副总裁</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico4.png" width="71px" />
                  <img src="@/assets/img1/about1_ico5.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="showTeamDetails(5)">
              <img src="@/assets/img1/about1_5.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>卢兰光</h5>
                  <p>首席电池机理顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="showTeamDetails(6)">
              <img src="@/assets/img1/about1_6.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>郑岳久</h5>
                  <p>首席电池AI顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico2.png" width="71px" />
                  <img src="@/assets/img1/about1_ico3.png" width="71px" />
                </div>
              </div>
            </div>

            <div class="item" @click="showTeamDetails(7)">
              <img src="@/assets/img1/about1_7.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>韩雪冰</h5>
                  <p>首席电池管理顾问</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico2.png" width="71px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-container">
      <h2 class="timeline-title">发展历程</h2>
      <div class="timeline">
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2010～2023</p>
            <p class="desc">清华大学欧阳明高教授团队<br />10+年电池研究积累</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <div class="dot"></div>
            <p class="date">2010～2023</p>
            <p class="desc">清华大学欧阳明高教授团队<br />10+年电池研究积累</p>
          </div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2024.10</p>
            <p class="desc">业务清华校友三创大赛（新能源）总决赛六强</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.02</p>
            <p class="desc">团队订单量破百万<br />与数家头部企业深度合作</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2025.05</p>
            <p class="desc">清华大学校长杯决赛“挑战奖”（第五名）</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.06</p>
            <p class="desc">发布BATX大数据平台</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-line"></div>
      </div>
    </div>

    <div class="about_honor">
      <img src="@/assets/img1/about2.jpg" width="100%" />
      <div class="qualifi">
        <h5>荣誉资质</h5>
        <div class="honr_line"></div>
        <div class="honor_text">
          <div class="text_list">
            <h5>2025年</h5>
            <p>12th校长杯决赛前十强(第五名)</p>
          </div>
          <div class="text_list">
            <h5>2025年</h5>
            <p>卢宇芳获清华大学高榕创新创业奖学金</p>
          </div>
          <div class="text_list">
            <h5>2024年</h5>
            <p>清华三创大赛决赛，新能源种子全球前六名</p>
          </div>
          <div class="text_list">
            <h5>2022年</h5>
            <p>创始人获福布斯亚洲30U30</p>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="mymo" v-if="isModalVisible">
      <div class="modal-content">
        <div class="close">
          <button @click="closeModal">X</button>
        </div>
        <div
          :class="{ team: true, team_1: selectedId == 1 }"
          v-if="selectedId == 1"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_1.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>卢宇芳</h2>
              <h5>创始人 CEO</h5>
              <div class="text">
                <p>
                  116岁清华本科，车辆学院(烽火班)，普林斯顿交换，UCL访学，70周年国庆观礼台志愿者，获本科生国奖，北京市优秀毕业生、清华大学优秀毕设等荣誉
                </p>
                <p>
                  24岁博士毕业，车辆学院工学博士，导师欧阳明高院士，发表SCI论文12篇、EI论文3篇，授权发明专利2项，获研究生国奖(排名第一)，多次综合优秀一等奖等
                </p>
              </div>
              <div class="text">
                <p>
                  21岁起创业，链宇科技联创&VP，获真格基金、丰田通商等投资（累计3轮，估值2亿元+）
                </p>
                <p>
                  主导多项与电池龙头企业的等业务战略合作（如宁德时代、中创新航、孚能等）
                </p>
                <p>
                  主导与新能源车企、电网等业务战略合作（如比亚迪、广汽、北汽、国网、南网等）
                </p>
                <p>推动10+项V2G、智慧能源等示范项目落地</p>
                <p>2022年获福布斯亚洲30U30，2023年获全国“挑战杯”创业大赛金奖</p>
              </div>

              <div class="text">
                <p>
                  24岁二次创业，连续科技创业者，周期智能创始人&CEO，已完成种子轮融资
                </p>
                <p>
                  电池全生命周期智能化服务，与行业多个主要客户（电池厂、主机厂、能源企业等达成合作）
                </p>
                <p>
                  2024年获清华校友三创大赛全球总决赛六强，2025年获赵平-高榕创投创新创业奖学金
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_2: selectedId == 2 }"
          v-if="selectedId == 2"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_7.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>欧阳明高研究员</h2>
              <h5>专家委员会主席</h5>
              <div class="text">
                <p>欧阳明高院士团队核心成员</p>
                <p>清华大学学士、博士</p>
                <p>新能源汽车动力电池系统管理相关技术研究</p>
                <p>主导参与多项国家重点研发计划</p>
                <p>权威SCI期刊累计发表论文超100篇 已授权专利45项</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_3: selectedId == 3 }"
          v-if="selectedId == 3"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_2.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>冯旭宁 博士</h2>
              <h5>联合创始人、首席科学家</h5>
              <h5>新能源电池动力与储能系统安全性研究领域顶级专家</h5>
              <div class="text">
                <p>国家优青、清华大学副教授、博士生导师</p>
                <p>清华大学车辆学院电池安全实验室主任 授权国家发明专利97项</p>
                <p>
                  SCI论文258篇，36篇ESI高被引
                  负责国家自然基金、科技部国家重点项目
                </p>
                <p>主导负责40余横向项目 汽车工业技术发明奖（省部级）一等奖</p>
                <p>
                  科睿唯安年度全球高被引科学家 中国科协青年人才托举工程选拔人才
                </p>
                <p>
                  MIT科技评论中国区35岁以下创新35人 英国伦敦帝国理工学院
                  访问学者
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_4: selectedId == 4 }"
          v-if="selectedId == 4"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_3.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>吴国伟</h2>
              <h5>联合创始人、高级副总裁</h5>
              <h5>10+年新能源汽车、BMS等芯片领域市场营销与创业实战经验</h5>
              <div class="text">
                <p>清华大学 工商管理学硕士 斯坦福大学交换、麻省理工学院访问</p>
                <p>连续科技创业者、深耕行业产业化落地14年</p>
                <p>
                  曾任汽车芯片公司合伙人，从0-1开创业务与团队，业绩2亿+,公司迅速成长为国家级专精特新小巨人
                </p>
                <p>曾任科创板上市公司有方科技核心BU总经理</p>
                <p>从0-1组建团队，5年内创造业绩10亿+</p>
                <p>助力公司成功科创板IPO，并前往上交所敲钟清华大学未来科创家</p>
                <p>
                  工信部汽车产业竞争力评价动力电池与芯片专家 清华MBA创业俱乐部
                </p>
                <p>创始主席 2024年福布斯中国·商学院影响力人物</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_5: selectedId == 5 }"
          v-if="selectedId == 5"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_4.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>卢兰光 研究员</h2>
              <h5>首席电池机理顾问</h5>
              <div class="text">
                <p>欧阳明高院士团队核心成员</p>
                <p>动力电池、混合动力、固态电池等新能源研发专家</p>
                <p>30+项新能源相关项目</p>
                <p>国家发明专利80+</p>
                <p>核心刊物术论文100+篇</p>
                <p>省部级科技奖6 项</p>
                <p>全球高被引科学家</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_6: selectedId == 6 }"
          v-if="selectedId == 6"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_5.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>郑岳久 教授</h2>
              <h5>首席电池AI顾问</h5>
              <div class="text">
                <p>上海理工大学教授 博导</p>
                <p>电池管理、状态估计研发专家</p>
                <p>欧阳明高院士团队核心成员</p>
                <p>清华大学学士、博士</p>
                <p>上海市科委“青年科技启明星”</p>
                <p>国家自然科学基金面上项目</p>
                <p>上海市教委“晨光计划”</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="{ team: true, team_7: selectedId == 7 }"
          v-if="selectedId == 7"
        >
          <div class="title">
            <h5>团队优势</h5>
            <p>
              核心创始团队均来自欧阳明高院士课题组，长期专注于新能源和AI研究，既具备电池、充电、储能等能源领域的专业知识，又具备<br />大数据、AI的基础研发和应用能力。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_6.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>韩雪冰 研究员</h2>
              <h5>首席电池管理顾问</h5>
              <div class="text">
                <p>欧阳明高院士团队核心成员</p>
                <p>清华大学学士、博士</p>
                <p>新能源汽车动力电池系统管理相关技术研究</p>
                <p>主导参与多项国家重点研发计划</p>
                <p>权威SCI期刊累计发表论文超100篇 已授权专利45项</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.about {
  padding-top: 85px;
}
.about_tema {
  padding: 50px 10% 100px 10%;
  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    color: #333;
    text-align: left;
  }
  p {
    font-size: 16px;
    color: #333;
  }
  .team {
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    margin-top: 120px;
    .left {
      flex: 0 0 24.55%;
      position: relative;
      img {
        width: 280px;
      }
      p {
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        bottom: 15px;
        font-size: 20px;
        margin: 0;
      }
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .right {
      flex: 1;
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        .item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          .small-img {
            width: 190px;
          }
          .text {
            display: flex;
            flex-direction: column; // 垂直排列
            justify-content: space-between; // 顶部和底部分开贴边
            height: 100%;
            .introd {
              color: #010101;
              h5 {
                font-size: 20px;
              }
              p {
                font-size: 16px;
                color: #010101;
              }
            }
            .school {
              img {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
.timeline-container {
  padding: 50px 5% 100px 5%;
  background-color: #f4f9ff;
  text-align: center;
  .timeline-title {
    font-size: 36px;
    margin-bottom: 60px;
    color: #333;
    text-align: left;
    padding-left: 5%;
  }

  .timeline {
    position: relative;
    .timeline-line {
      position: relative;
      height: 2px;
      width: 100%;
      background-color: #ccc;
      margin: 200px 0;
    }

    .timeline-item {
      position: absolute;
      width: 30%;
      z-index: 2;
      &:nth-child(1) {
        left: 5%;
      }
      &:nth-child(2) {
        left: -8%;
      }
      &:nth-child(3) {
        left: 35%;
      }
      &:nth-child(4) {
        left: 25%;
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 60%;
      }
      .dot {
        width: 15px;
        height: 15px;
        background-color: #1a73e8;
        border-radius: 50%;
        position: absolute;
      }

      // 上面的线：dot 向上连线
      &.top {
        bottom: 0;
        .dot {
          position: absolute;
          left: 0;
          bottom: -8px;
          // 垂直线条
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 73px;
            background-color: #999;
            bottom: 15px;
          }
        }

        .content {
          margin-bottom: 80px;
          text-align: left;
        }
      }

      // 下面的线：dot 向下连线
      &.bottom {
        .dot {
          position: absolute;
          right: 0;
          top: 0;
          // 垂直线条
          &::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 73px;
            background-color: #999;
            top: 15px;
          }
        }

        .content {
          text-align: right;
          padding-top: 90px;
        }
      }

      .content {
        .date {
          font-weight: bold;
          margin-bottom: 6px;
          font-size: 16px;
        }

        .desc {
          font-size: 16px;
          color: #010101;
          line-height: 1.4;
        }
      }
    }
  }
}
.about_honor {
  position: relative;
  .qualifi {
    position: absolute;
    left: 210px;
    top: 85px;
    > h5 {
      font-size: 36px;
      margin-bottom: 40px;
      color: #010101;
      text-align: left;
    }
    .honr_line {
      height: 2px;
      background-color: #dfd7c2;
      width: 530px;
      margin-top: 130px;
      margin-bottom: 90px;
    }
  }
  .honor_text {
    padding-left: 130px;
    .text_list {
      margin-bottom: 30px;
      text-align: left;
      h5 {
        color: #010101;
        margin: 0;
        font-size: 18px;
      }
      p {
        color: #010101;
        font-size: 18px;
      }
    }
  }
}

.mymo {
  position: fixed;
  z-index: 999 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  .modal-content {
    background: #fff;
    margin: 100px auto;
    padding: 20px;
    width: 80%;
    border-radius: 8px;
    .close {
      text-align: right;
      button {
        width: 30px;
        height: 30px;
        border: 1px solid #bababa;
        background: #fefefe;
        font-size: 20px;
        border-radius: 50%;
        line-height: 1;
      }
    }

    .team {
      padding: 80px 60px;
      // background-color: #cccccc;
      .title {
        margin-bottom: 40px;
        h5 {
          font-size: 36px;
          color: #101010;
          margin-bottom: 40px;
        }
        p {
          font-size: 16px;
          color: #101010;
        }
      }

      .advant {
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        .left {
          flex: 0 0 25%;
        }

        .left img {
          width: 100%;
          height: auto;
          display: block;
        }

        .right {
          flex: 0 0 75%;
          padding-left: 20px;
          box-sizing: border-box;
          padding: 40px 80px;
          h2 {
            color: #2a57eb;
            font-size: 26px;
            margin-bottom: 20px;
          }
          h5 {
            color: #101010;
            font-size: 15px;
            margin: 0;
          }
          .text {
            margin-top: 20px;
            p {
              color: #7f7f7f;
              font-size: 15px;
              line-height: 18px;
              margin: 0;
            }
          }
        }
      }

      &.team_1 {
      }
      &.team_2 {
      }
      &.team_3 {
      }
      &.team_4 {
      }
      &.team_5 {
      }
      &.team_6 {
      }
      &.team_7 {
      }
    }
  }
}
</style>
