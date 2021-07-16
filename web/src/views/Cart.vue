<template>
  <div class="container">
    <h1>{{ $t("cart.title") }}</h1>
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <ul>
          <li :key="id" v-for="(item, id) in cartItems">
            <cart-item :id="id" :item="item" />
          </li>
        </ul>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"
        ><h4 class="text-center">
          Total: {{ $n(totalAmount, "currency") }}
        </h4></el-col
      >
      <el-col :span="18">
        <custom-button
          :loading="loading"
          :label="$t('cart.pay')"
          type="success"
          @click="handlePay"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import CustomButton from "../components/CustomButton.vue";
import { registerOrder } from "../utils/api.endpoints";
import { getLoggedUserToken } from "../utils/auth";
export default {
  components: { CartItem, CustomButton },
  name: "Cart",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    totalAmount() {
      var total = 0;
      Object.entries(this.cartItems).forEach((element) => {
        //console.log(element);
        total += element[1].amount * element[1].cost;
      });
      return total;
    },
  },
  methods: {
    async handlePay() {
      if (!getLoggedUserToken()) {
        alert("No estas autenticado");
        return;
      }
      this.loading = true;
      var data = [];
      Object.entries(this.cartItems).forEach((element) => {
        data.push({
          id: element[0],
          total: element[1].amount,
        });
      });
      const res = await registerOrder({
        order: data,
      });
      this.loading = false;
      if (res) {
        if (res.status == 200) this.$store.dispatch("emptyCart");
        alert(`${res.data.server}`);
      } else {
        alert("Ha ocurrido un error!");
      }
    },
  },
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