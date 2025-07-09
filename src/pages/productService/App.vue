<script setup>
import $ from "jquery";
import TopPages from "@/components/TopPages.vue";
import Footer from "@/components/Footer1.vue";
</script>
<template>
  <div>
    <TopPages />
    <div class="productService">产品服务</div>
    <Footer />
  </div>
</template>

<style scoped lang="less">
.productService {
  padding-top: 85px;
}
</style>
