<template>
  <el-card class="cart-item" :body-style="{ padding: '0px' }">
    <el-row>
      <el-col :span="5">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
      </el-col>
      <el-col class="info-item" :span="9">
        <span>--Product Name--</span>
        <div>
          <span>{{ $t("products.price") }}{{ $n(200, "currency") }}</span>
        </div>
      </el-col>
      <el-col class="info-item" :span="5">
        <el-input-number :min="1"></el-input-number>
      </el-col>
      <el-col class="info-item" :span="5">
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
 <script>
export default {
  name: "CartItem",
};
</script>
 
<style scoped>
img {
  width: 100px;
  height: 100px;
}
.cart-item {
  align-items: center;
  width: 100%;
  margin: 1em 0em 0em 1em;
}

.info-item {
  padding-top: 3%;
}
</style>
 