<template>
  <el-table :data="products" style="width: 100%">
    <el-table-column :label="$t('order.image-label')">
      <template #default="scope">
        <img :src="img_url(scope.row.image)" class="image" />
      </template>
    </el-table-column>
    <el-table-column prop="name" :label="$t('order.name-label')">
    </el-table-column>
    <el-table-column prop="description" :label="$t('order.desc-label')">
    </el-table-column>
    <el-table-column
      prop="cost"
      :formatter="costFormatter"
      :label="$t('order.cost-label')"
    >
    </el-table-column>
    <el-table-column prop="total" :label="$t('order.total-label')">
    </el-table-column>
  </el-table>
</template>

<script>
import { getProductImage } from "../utils/api.endpoints";
export default {
  name: "Order",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    costFormatter(row) {
      return this.$n(row.cost, "currency");
    },
    img_url(image_name) {
      return getProductImage(image_name);
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>