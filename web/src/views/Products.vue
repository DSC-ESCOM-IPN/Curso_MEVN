<template>
  <div class="container">
    <h1>{{ $t("products.title") }}</h1>
    <el-row v-loading="!products">
      <product
        :key="index"
        v-for="(item, index) in products"
        :product="item"
        :img_url="img_url(item.image)"
      />
    </el-row>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import { getProducts, getProductImage } from "../utils/api.endpoints";

export default {
  components: { Product },
  name: "Sales",
  data() {
    return { products: [] };
  },
  created() {
    getProducts().then((res) => (this.products = res));
  },
  methods: {
    async populate() {
      return await getProducts();
    },
    img_url(image_name) {
      return getProductImage(image_name);
    },
  },
};
</script>

<style>
</style>