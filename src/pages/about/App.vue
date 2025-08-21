<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
import { ref } from "vue";
import { reactive } from "vue";
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
const form = reactive({
  company: "",
  name: "",
  phone: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  // 可在此处写提交逻辑，如调接口发请求
  console.log("提交数据：", form);
  // 若需要清空表单，可重置 reactive 数据
  // Object.keys(form).forEach(key => form[key] = '')
};
</script>
<template>
  <div class="about">
    <TopPages />
    <div class="banner">
      <img src="@/assets/img1/banner_about.jpg" width="100%" />
      <div class="text">
        <p>
          AI底层驱动，机理数据融合 <br />
          新能源电池全生命周期数智化平台
        </p>
      </div>
    </div>
    <div class="about_profile">
      <h2>公司概况</h2>
      <div class="profile">
        <p>
          使命：电池全生命周期数智化服务<br />愿景：全球领先的电池AI公司
          <br />价值观：客户至上 长期奋斗，开放协作 守正创新
        </p>

        <p>
          周期智能孵化于清华大学欧阳明高教授团队，深耕新能源电池与人工智能的学科交叉，结合清华新能源动力系统团队沉淀10余年的专业知识与领先的AI能力，构建电池行业AI 4 battery的垂直模型和PM 4 Battery的机理模型，打造BATX技术平台；基于平台在电池系统产品开发、能源管理运维、资产检测维修等全生命周期场景为客户提供软硬一体的解决方案。
        </p>
        <p>
          项目致力于电池全周期的创新服务模式和开放产业生态，赋能电池应用的千行百业，成为人类发展最基础的能源与信息科学领域的创新引擎。
        </p>
      </div>
    </div>
    <div class="about_tema">
      <h2>团队优势</h2>
      <p>核心创始团队由顶尖科学家、博士、连续成功创业者组成。</p>
      <p>研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。</p>
      <div class="team">
        <div class="right">
          <div class="grid">
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

            <div class="item" @click="showTeamDetails(5)">
              <img src="@/assets/img1/about1_5.jpg" class="small-img" />
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

            <div class="item" @click="showTeamDetails(6)">
              <img src="@/assets/img1/about1_6.jpg" class="small-img" />
              <div class="text">
                <div class="introd">
                  <h5>华剑峰</h5>
                  <p>产业化专家</p>
                </div>
                <div class="school">
                  <img src="@/assets/img1/about1_ico6.png" width="71px" />
                  <img src="@/assets/img1/about1_ico2.png" width="71px" />
                  <img src="@/assets/img1/about1_ico3.png" width="71px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left" @click="showTeamDetails(1)">
          <img src="@/assets/img1/about1_1.jpg" />
          <p>卢宇芳 CEO</p>
        </div>
        <div class="left" @click="showTeamDetails(2)">
          <img src="@/assets/img1/about1_2.jpg" />
          <p>欧阳明高 首席科学家</p>
        </div>
      </div>
    </div>
    <div class="timeline-container">
      <h2 class="timeline-title">发展历程</h2>
      <div class="timeline">
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2010～2024</p>
            <p class="desc">清华大学欧阳明高教授团队10+年电池研究积累</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <div class="dot"></div>
            <p class="date">2024.10</p>
            <p class="desc">
              获清华校友三创大赛 <br />（新能源）全球总决赛前六强
            </p>
          </div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2024.12</p>
            <p class="desc">业务清华校友三创大赛（新能源）总决赛六强</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.03</p>
            <p class="desc">
              申请5+项发明专利、1项实用新型专利 <br />获3项软件著作证书
            </p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2025.05</p>
            <p class="desc">首批获“国家重点研发计划重点专项”用户证书</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">2025.06</p>
            <p class="desc">构建BATX大数据平台 <br />超20TWh数据量</p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item top">
          <div class="content">
            <p class="date">2025.07</p>
            <p class="desc">
              获ISO9001、14001、45001三体系认证 <br />
              获AAA级信用企业认证
            </p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-item bottom">
          <div class="content">
            <p class="date">∞</p>
            <p class="desc">
              国际一流、知名影响力的 <br />电池全生命周期方案解决商
            </p>
          </div>
          <div class="dot"></div>
        </div>
        <div class="timeline-line"></div>
      </div>
    </div>

    <div class="about_honor">
      <img src="@/assets/img1/about_honor.png" width="100%" />
      <div class="qualifi">
        <h5>荣誉资质</h5>
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
          <div class="text_list">
            <h5>.....</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="about_contant">
      <h5>联系我们</h5>
      <div class="line"></div>
      <div class="contact-container">
        <!-- 左侧信息区域 -->
        <div class="contact-info">
          <h3>苏州总部</h3>
          <h3>苏州市工业园区淞北路 22 号西栋 3 层 308</h3>
          <div class="contact_phone">
            <p>Tel: (+86)15385765708</p>
            <p>合作 Email: contact@batx.tech</p>
            <p>招聘 Email: hr@batx.tech</p>
          </div>
        </div>

        <!-- 右侧表单区域 -->
        <div class="contact-form">
          <el-form>
            <!-- 公司 -->
            <el-form-item>
              <el-input v-model="form.company" placeholder="公司"></el-input>
            </el-form-item>

            <!-- 姓名、电话、邮箱 一行排列 -->
            <el-form-item>
              <el-input v-model="form.name" placeholder="姓名"></el-input>
              <el-input v-model="form.phone" placeholder="电话"></el-input>
              <el-input v-model="form.email" placeholder="E-Mail"></el-input>
            </el-form-item>

            <!-- 留言 -->
            <el-form-item>
              <el-input
                type="textarea"
                v-model="form.message"
                placeholder="您的留言"
                rows="5"
              ></el-input>
            </el-form-item>

            <!-- 提交按钮 -->
            <el-form-item>
              <el-button type="primary" @click="handleSubmit">提交</el-button>
            </el-form-item>
          </el-form>
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
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
                  清华大学车辆学院本科、博士（16岁本科入学，24岁博士毕业），师从欧阳明高教授，曾于美国普林斯顿大学交换，英国伦敦大学学院访学。获研究生国家奖学金、校级优秀博士论文、本科生国家奖学金，北京市优秀毕业生、清华大学优秀毕设等荣誉。
                </p>
                <p>
                  研究方向电池AI、电动汽车超级快充，授权国家发明专利2项，发表领域内头部期刊SCI论文12篇、EI论文3篇，6年以上新能源电池、电网领域行业经验。曾主导多项与电池、主机厂、能源商等头部企业的深度合作。
                </p>
                <p>
                  2022年获福布斯亚洲30U30，2023年获全国“挑战杯”创业大赛金奖，2024年获清华校友三创大赛全球总决赛六强，2025年获清华赵平-高榕创投创新创业奖学金。
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_2.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>欧阳明高研究员</h2>
              <h5>专家委员会主席</h5>
              <div class="text">
                <p>
                  中国科学院院士，清华大学教授，博士生导师。国家“863”计划节能与新能源汽车重大项目总体专家组组长；国家新能源汽车科技专项首席专家，中国电动汽车百人会执行副理事长。
                </p>
                <p>
                  曾获国家技术发明二等奖(两项)、中国汽车工业技术发明一等奖、何梁何利科学技术奖、2024年度全球能源奖、北京市科技进步一等奖，省部级一等奖3项等。全球最高被引科学家，爱思唯尔国际交通电动化期刊Etransportation创刊主编。
                </p>
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_3.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>冯旭宁 博士</h2>
              <h5>电池安全专家</h5>
              <div class="text">
                <p>
                  清华大学车辆学院副教授，博士生导师，国家优青。新能源电池动力与储能系统安全性研究领域顶级专家。相关成果授权国家发明专利97项，SCI论文258篇，36篇ESI高被引，负责国家自然基金、科技部国家重点项目，主导负责与企业的40余横向项目。
                </p>
                <p>
                  曾获得汽车工业技术发明奖（省部级）一等奖、科睿唯安年度全球高被引科学家、中国科协青年人才托举工程选拔人才、MIT科技评论中国区35岁以下创新35人等荣誉。
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_4.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>郑岳久 教授</h2>
              <h5>电池AI专家</h5>
              <div class="text">
                <p>
                  上海理工大学机械工程学院副院长，教授，博士生导师，全生命周期电池管理联合研究中心主任。全生命周期电池AI管理专家。第一/通讯作者发表高水平论文100余篇，论文共计SCI他引6000余次。授权中国发明专利80余项，申请美国/欧洲专利5项，授权2项。
                </p>
                <p>
                  曾获2022年上海市科学技术奖自然科学二等奖，2021年获得中国轻工业联合技术发明一等奖，2022年度中国发明协会创业创新奖一等奖；2020年度国家电网有限公司科学技术进步二等奖等荣誉。
                </p>
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
            </p>
          </div>

          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_5.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>韩雪冰 研究员</h2>
              <h5>电池管理专家</h5>
              <div class="text">
                <p>
                  上海理工大学机械工程学院副院长，教授，博士生导师，全生命周期电池管理联合研究中心主任。全生命周期电池AI管理专家。第一/通讯作者发表高水平论文100余篇，论文共计SCI他引6000余次。授权中国发明专利80余项，申请美国/欧洲专利5项，授权2项。
                </p>
                <p>
                  曾获2022年上海市科学技术奖自然科学二等奖，2021年获得中国轻工业联合技术发明一等奖，2022年度中国发明协会创业创新奖一等奖；2020年度国家电网有限公司科学技术进步二等奖等荣誉。
                </p>
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
              核心创始团队由顶尖科学家、博士、连续成功创业者组成。
              <br />研发+市场+项目+国际化视野+产业化落地。组成完整，协同互补。
            </p>
          </div>
          <div class="advant">
            <div class="left">
              <img src="@/assets/img1/team1_6.jpg" width="100%" />
            </div>
            <div class="right">
              <h2>华剑峰</h2>
              <h5>产业化专家</h5>
              <div class="text">
                <p>
                  四川省第十四届人大代表，现任四川新能源汽车创新中心有限公司董事长、总经理。
                </p>
                <p>
                  2020年起带领团队在宜宾运营欧阳明高院士工作站，推动建设先进动力电池实验室，累计申请专利超100项。
                </p>
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
  .banner {
    .text {
      position: absolute;
      left: 10%;
      top: 25%;
      // transform: translateY(-50%);
      // -webkit-transform: translateY(-50%);
      // -moz-transform: translateY(-50%);
      // -o-transform: translateY(-50%);
      // -ms-transform: translateY(-50%);
      p {
        font-size: 44px;
        color: #fff;
        margin: 0;
      }
    }
  }
  .about_profile {
    padding: 80px 10%;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 36px;
      margin-bottom: 40px;
      color: #010101;
      text-align: left;
    }
    .profile {
      width: 73%;
      p {
        font-size: 20px;
        font-weight: 400;
        color: #010101;
        line-height: 1.8;
        margin-bottom: 30px;
      }
    }
  }
  .about_tema {
    padding: 50px 10% 100px 10%;
    background: #fafafa;
    h2 {
      font-size: 36px;
      margin-bottom: 90px;
      color: #010101;
      text-align: left;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      color: #010101;
    }
    .team {
      display: flex;
      gap: 20px;
      width: 100%;
      align-items: flex-start;
      margin-top: 120px;
      .left {
        flex: 0 0 26%;
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
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          .item {
            display: flex;
            align-items: flex-start;
            background: #ffffff;
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
                  margin-top: 10px;
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
        width: 25%;
        z-index: 2;
        &:nth-child(1) {
          left: 5%;
        }
        &:nth-child(2) {
          left: -6%;
        }
        &:nth-child(3) {
          left: 30%;
        }
        &:nth-child(4) {
          left: 19%;
        }
        &:nth-child(5) {
          left: 55%;
        }
        &:nth-child(6) {
          left: 44%;
        }
        &:nth-child(7) {
          left: 80%;
        }
        &:nth-child(8) {
          left: 68%;
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
    padding: 100px 10%;
    background-color: #ffffff;
    .qualifi {
      position: absolute;
      left: 210px;
      top: 85px;
      > h5 {
        font-size: 36px;
        margin-bottom: 80px;
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
  .about_contant {
    padding: 100px 10%;
    > h5 {
      font-size: 36px;
      color: #010101;
      text-align: left;
    }
    .line {
      height: 2px;
      background-color: #d9d9d9;
      width: 100%;
      margin: 50px 0;
    }
    .contact-container {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      /* 让左右区域有间隔，可根据需求调整 */
      gap: 40px;
      .contact-info {
        flex: 1;
        /* 左侧占比，可按需调整 */
        min-width: 200px;
        h3 {
          color: #010101;
          font-size: 20px;
          font-weight: 400;
        }
        .contact_phone {
          margin-top: 100px;
          p {
            color: #010101;
            font-size: 20px;
            font-weight: 400;
            margin: 0;
          }
        }
      }
      .contact-form {
        flex: 2;
        /* 右侧表单区域占比更大，可按需调整 */
      }
    }
  }
  .mymo {
    position: fixed;
    z-index: 11 !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #cccccc;
    .modal-content {
      background: #cccccc;
      margin: 100px auto;
      padding: 20px 0;
      width: 88%;
      border-radius: 8px;
      .close {
        text-align: right;
        margin-top: 20px;
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
        padding: 80px 0;
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
            padding: 20px 80px;
            box-sizing: border-box;
            h2 {
              color: #2a57eb;
              font-size: 26px;
              margin-bottom: 10px;
            }
            h5 {
              color: #101010;
              font-size: 15px;
              margin: 0 0 40px 0;
            }
            .text {
              margin-top: 20px;
              p {
                color: #666666;
                font-size: 18px;
                line-height: 1.6;
                font-weight: 400;
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
}
</style>
<style>
.el-form-item__content {
  gap: 10px;
}
.el-input__wrapper {
  height: 38px;
}

.el-form-item .el-input {
  flex: 0 0 calc(33.333% - 6.666px); /* 计算宽度，减去间距影响 */
  min-width: calc(33.333% - 6.666px); /* 确保最小宽度 */
}
.el-button--primary {
  margin-top: 40px;
}
.el-button--primary {
  background-color: #2572fa;
  border-radius: 20px;
  width: 90px;
  height: 40px;
}
.el-button > span {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
.el-input__inner,
.el-textarea__inner {
  font-size: 16px;
}
</style>
