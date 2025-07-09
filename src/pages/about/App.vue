<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
</script>
<template>
  <div>
    <TopPages />
    <div class="about">关于我们</div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.about {
  padding-top: 85px;
}
</style>
