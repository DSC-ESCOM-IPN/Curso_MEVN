<template>
  <el-table :data="orderData" style="width: 100%">
    <el-table-column :label="$t('order.image-label')">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
    </el-table-column>
    <el-table-column prop="name" :label="$t('order.name-label')">
    </el-table-column>
    <el-table-column prop="desc" :label="$t('order.desc-label')">
    </el-table-column>
    <el-table-column prop="cost" :label="$t('order.cost-label')">
    </el-table-column>
    <el-table-column prop="total" :label="$t('order.total-label')">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      orderData: [
        {
          cost: 250,
          total: 3,
          name: "Camiseta",
          desc: "Camiseta roja de talla chica",
        },
        {
          cost: 500,
          total: 1,
          name: "Pantalon",
          desc: "Pantalon de mezclilla talla chica",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>