<template>
  <el-card class="cart-item" :body-style="{ padding: '0px' }">
    <el-row>
      <el-col :span="5">
        <img :src="item.image" class="image" />
      </el-col>
      <el-col class="info-item" :span="9">
        <span>{{ item.name }}</span>
        <div>
          <span>{{ $t("products.price") }}{{ $n(item.cost, "currency") }}</span>
        </div>
      </el-col>
      <el-col class="info-item" :span="5">
        <el-input-number
          :min="1"
          v-model="num"
          @change="handleChange"
        ></el-input-number>
      </el-col>
      <el-col class="info-item" :span="5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          @click="handleDelete"
        ></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>
 <script>
export default {
  name: "CartItem",
  data() {
    return {
      num: this.item.amount,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(value) {
      this.$store.dispatch("updateCart", {
        [this.id]: {
          amount: value,
        },
      });
    },
    handleDelete() {
      this.$store.dispatch("removeCartItem", this.id);
    },
  },
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
 