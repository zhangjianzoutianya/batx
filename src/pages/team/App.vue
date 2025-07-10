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
    <div :class="{ team: true, team_1: id == 1 }" v-if="id == 1">团队优势1</div>
    <div :class="{ team: true, team_2: id == 2 }" v-if="id == 2">团队成员2</div>
    <div :class="{ team: true, team_3: id == 3 }" v-if="id == 3">团队成员3</div>
    <div :class="{ team: true, team_4: id == 4 }" v-if="id == 4">团队成员4</div>
    <div :class="{ team: true, team_5: id == 5 }" v-if="id == 5">团队成员5</div>
    <div :class="{ team: true, team_6: id == 6 }" v-if="id == 6">团队成员6</div>
    <div :class="{ team: true, team_7: id == 7 }" v-if="id == 7">团队成员7</div>
    <Footer2 />
  </div>
</template>

<style scoped lang="less">
.team {
  padding-top: 85px;

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
