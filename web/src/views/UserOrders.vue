<template>
  <div class="container">
    <h1>{{ $t("userorders.title", { usr: $store.getters.getUser.name }) }}</h1>
    <el-descriptions
      :title="$t('userorders.subtitle')"
      direction="vertical"
      :column="1"
    >
      <el-descriptions-item
        :key="order._id"
        v-for="order in orders"
        :label="
          $t('order.item-label', { date: $d(new Date(order.date), 'long') })
        "
      >
        <order :products="order.products" />
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
import { getUserInfo } from "../utils/api.endpoints";
import { unsetLoggedUserToken } from "../utils/auth";

export default {
  components: { Order },
  name: "UserOrders",
  computed: {
    orders() {
      return this.$store.getters.getUser.order;
    },
  },
  created() {
    getUserInfo().then((res) => {
      if (res.status === 200) {
        this.$store.dispatch("registerUser", res.data);
      } else if (
        res.status === 403 &&
        (res.data.server === "La sesion ha sido finalizada" ||
          res.data.server === "La sesion ha expirado")
      ) {
        unsetLoggedUserToken();
        alert(`Error: ${res.data.server}`);
        this.$router.push("/login");
      } else {
        console.log(res);
        alert("Ha ocurrido un error, Intentelo más tarde");
        this.$router.push("/app/products");
      }
    });
  },
};
</script>

<style>
</style>