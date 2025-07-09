<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
</script>
<template>
  <div>
    <TopPages />
    <div class="solution">解决方案</div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.solution {
  padding-top: 85px;
}
</style>
