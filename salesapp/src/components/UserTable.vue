<template>
  <el-table :data="sales" border style="width: 100%">
    <el-table-column prop="name" :label="$t('sales.table.seller-col')"> </el-table-column>
    <el-table-column prop="product" :label="$t('sales.table.product-col')"> </el-table-column>
    <el-table-column prop="cost" :label="$t('sales.table.price-col')"> </el-table-column>
    <el-table-column prop="date" :label="$t('sales.table.date-col')"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "UserTable",
  props: {
    sales: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>