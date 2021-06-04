<template>
  <el-table
    ref="SalesTable"
    :data="$store.state.sales"
    border
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <el-table-column prop="name" :label="$t('sales.table.seller-col')">
    </el-table-column>
    <el-table-column prop="product" :label="$t('sales.table.product-col')">
    </el-table-column>
    <el-table-column prop="cost" :label="$t('sales.table.price-col')">
    </el-table-column>
    <el-table-column prop="date" :label="$t('sales.table.date-col')">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "UserTable",
  methods: {
    handleCurrentChange(val) {
      this.$router.push({
        name: "Sale",
        params: {
          id: val.id,
        },
      });
    },
  },
};
</script>

<style>
</style>