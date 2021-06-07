<template>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px">
        <span>--Product Name--</span>
        <div class="bottom">
          <span
            >{{ $t("products.price") }}{{ $n(200, "currency") }}</span
          >
          <custom-button
            :label="$t('products.add-to-cart')"
            type="warning"
            @click="alert('Añadido al carrito')"
          />
        </div>
      </div>
    </el-card>
  </el-col>
</template>
 <script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "Product",
};
</script>
 
<style scoped>
img{
  width: 80%;
  height: 325px;
}
</style>
 