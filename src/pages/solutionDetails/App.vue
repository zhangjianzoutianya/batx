<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
</script>
<template>
  <div>
    <TopPages />
    <div class="solutionDetails">解决方案详情</div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.solutionDetails {
  padding-top: 85px;
}
</style>
