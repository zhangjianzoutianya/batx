<script setup>
import $ from "jquery";
import { ref } from "vue";

const params = new URLSearchParams(window.location.search);
console.log(params);
const id = ref(params.get("id"));
console.log(id.value);
</script>

<template>
  <div>
    <TopPages />
    <div :class="{ team: true, team_1: id == 1 }" v-if="id == 1">
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
    <!-- <div :class="{ team: true, team_2: id == 2 }" v-if="id == 2">
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
    </div> -->
    <div :class="{ team: true, team_3: id == 3 }" v-if="id == 3">
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
              SCI论文258篇，36篇ESI高被引 负责国家自然基金、科技部国家重点项目
            </p>
            <p>主导负责40余横向项目 汽车工业技术发明奖（省部级）一等奖</p>
            <p>科睿唯安年度全球高被引科学家 中国科协青年人才托举工程选拔人才</p>
            <p>
              MIT科技评论中国区35岁以下创新35人 英国伦敦帝国理工学院 访问学者
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ team: true, team_4: id == 4 }" v-if="id == 4">
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
            <p>工信部汽车产业竞争力评价动力电池与芯片专家 清华MBA创业俱乐部</p>
            <p>创始主席 2024年福布斯中国·商学院影响力人物</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ team: true, team_5: id == 5 }" v-if="id == 5">
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
    <div :class="{ team: true, team_6: id == 6 }" v-if="id == 6">
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
    <div :class="{ team: true, team_7: id == 7 }" v-if="id == 7">
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

    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.team {
  padding: 250px 80px 140px 80px;
  background-color: #cccccc;
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
</style>
