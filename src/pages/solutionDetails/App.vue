<script setup>
import $ from "jquery";
import { ref } from "vue";

const params = new URLSearchParams(window.location.search);
const id = ref(params.get("id"));
</script>
<template>
  <div>
    <TopPages />
    <div
      :class="{ solutionDetails: true, solutionDetails_1: id == 1 }"
      v-if="id == 1"
    >
      解决方案详情1
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_2: id == 2 }"
      v-if="id == 2"
    >
      解决方案详情2
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_3: id == 3 }"
      v-if="id == 3"
    >
      解决方案详情3
    </div>
    <div
      :class="{ solutionDetails: true, solutionDetails_4: id == 4 }"
      v-if="id == 4"
    >
      解决方案详情4
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.solutionDetails {
  padding-top: 85px;
}
</style>
