<template>
  <div class="container">
    <h1>{{ $t("cart.title") }}</h1>
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <ul>
          <li>
            <cart-item />
          </li>
          <li>
            <cart-item />
          </li>
        </ul>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><h4 class="text-center">Total: $400.00</h4></el-col>
      <el-col :span="18">
        <custom-button
          :label="$t('cart.pay')"
          type="success"
          @click="alert('Pagado')"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import CustomButton from "../components/CustomButton.vue";
export default {
  components: { CartItem, CustomButton },
  name: "Cart",
};
</script>

<style scoped>
ul {
  width: 97%;
  list-style: none;
  padding: 0em;
}
li {
  width: 97%;
}
</style>