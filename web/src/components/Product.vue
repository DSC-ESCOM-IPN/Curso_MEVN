<template>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img
        :src="img_url"
        class="image"
      />
      <div style="padding: 14px">
        <span>{{ name }}</span>
        <div class="bottom">
          <span>{{ $t("products.price") }}{{ $n(cost, "currency") }}</span>
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
  props: {
    name: {
      typre: String,
      required: true,
    },
    cost: {
      typre: Number,
      required: true,
    },
    img_url: {
      type: String,
      required: true
    }
  },
};
</script>
 
<style scoped>
img {
  width: 80%;
  height: 325px;
}
</style>
 