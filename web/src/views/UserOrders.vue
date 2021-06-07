

<template>
  <div class="container">
    <h1>{{ $t("userorders.title", { usr: "Paul" }) }}</h1>
    <el-descriptions :title="$t('userorders.subtitle')" direction="vertical" :column="1">
      <el-descriptions-item
        :label="$t('order.item-label', { date: '06/06/2021' })"
        ><order
      /></el-descriptions-item>
      <el-descriptions-item
        :label="$t('order.item-label', { date: '06/06/2021' })"
        ><order
      /></el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
export default {
  components: { Order },
  name: "UserOrders",
};
</script>

<style>
</style>