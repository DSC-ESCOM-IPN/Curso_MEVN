<template>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="img_url" class="image" />
      <div style="padding: 14px">
        <span>{{ product.name }}</span>
        <div class="bottom">
          <span
            >{{ $t("products.price") }}{{ $n(product.cost, "currency") }}</span
          >
          <br />
          <el-tag
            class="productTag"
            :key="index"
            v-for="(cat, index) in product.categories"
            :type="tagTypes[index % 5]"
            >{{ cat.name }}</el-tag
          >
          <custom-button
            :label="$t('products.add-to-cart')"
            :disabled="added2Cart"
            type="warning"
            @click="add2Cart"
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
  data() {
    return {
      tagTypes: ["primary", "success", "info", "warning", "danger"],
    };
  },
  props: {
    product: {
      typre: Object,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
  },
  methods: {
    add2Cart() {
      if (!this.added2Cart) {
        console.log(this.product);
        this.$store.dispatch("updateCart", {
          [this.product._id]: {
            amount: 1,
            image: this.img_url,
            cost: this.product.cost,
            name: this.product.name,
          },
        });
      } else {
        alert(`${this.product.name} ya fue añadido al carrito`);
      }
    },
  },
  computed: {
    added2Cart() {
      return this.$store.state.cart[this.product._id] !== undefined;
    },
  },
};
</script>
 
<style scoped>
img {
  width: 80%;
  height: 325px;
}

.productTag {
  margin: 0.5em;
}
</style>
 