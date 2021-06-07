<template>
  <div class="container">
    <h1>{{ $t("products.title") }}</h1>
    <el-row>
      <product />
      <product />
      <product />
      <product />
    </el-row>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  components: { Product },
  name: "Sales",
};
</script>

<style>
</style>