<template>
  <el-descriptions :title="$t('sale.view.title', { id: id })">
    <el-descriptions-item :label="$t('sale.view.name')">{{
      $store.state.sales[id].name
    }}</el-descriptions-item>
    <el-descriptions-item :label="$t('sale.view.product')">{{
      $store.state.sales[id].product
    }}</el-descriptions-item>
    <el-descriptions-item :label="$t('sale.view.price')">{{
      $store.state.sales[id].cost
    }}</el-descriptions-item>
    <el-descriptions-item :label="$t('sale.view.date')">{{
      $store.state.sales[id].date
    }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: "SaleInfo",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style >
</style>