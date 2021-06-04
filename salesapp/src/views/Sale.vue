<template>
  <div class="container">
    <h1>{{ $t("sale.title") }}</h1>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <sale-info v-if="$route.params.id" :id="parseInt($route.params.id)" />
        <p v-else>Not Found</p>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import SaleInfo from "../components/SaleInfo";

export default {
  name: "Sale",
  components: {
    SaleInfo,
  },
};
</script>

<style>
</style>
