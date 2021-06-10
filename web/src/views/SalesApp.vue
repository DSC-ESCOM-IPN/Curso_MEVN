<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <router-link to="/app/products">{{
          $t("nav.products-label")
        }}</router-link>
      </el-menu-item>
      <el-submenu v-if="loggedUser" index="2">
        <template #title>{{ $t("nav.user.label") }}</template>
        <el-menu-item index="2-1">
          <router-link to="/app/orders">{{
            $t("nav.user.orders-label")
          }}</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/app/profile">{{
            $t("nav.user.profile-label")
          }}</router-link>
        </el-menu-item>
        <el-menu-item index="2-3" @click="handleLogout">{{
          $t("nav.user.logout-label")
        }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <custom-button
          :label="$t('nav.cart-label')"
          type="success"
          @click="$router.push('/app/cart')"
        />
      </el-menu-item>
      <el-menu-item v-if="!loggedUser" index="4">
        <custom-button
          :label="$t('nav.login-label')"
          type="primary"
          @click="$router.push('/login')"
        />
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import {
  getLoggedUserToken,
  logoutUser,
  unsetLoggedUserToken,
} from "../utils/auth";
import { getUserInfo } from "../utils/api.endpoints";

export default {
  components: { CustomButton },
  name: "SalesApp",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  created() {
    if (!this.$store.state.userInfo.email) {
      getUserInfo().then((res) => {
        if (res.status && res.status === 200) {
          this.$store.dispatch("registerUser", res.data);
        } else if (
          res.status === 403 &&
          (res.data.server === "La sesion ha sido finalizada" ||
            res.data.server === "La sesion ha expirado")
        ) {
          unsetLoggedUserToken();
          alert(`Error: ${res.data.server}`);
        } else {
          console.log(res);
          alert("Ha ocurrido un error, Intentelo más tarde");
        }
      });
    }
  },
  methods: {
    async handleLogout() {
      const res = await logoutUser(this.loggedUser);
      console.log(res);
      if (res.status == 200) {
        unsetLoggedUserToken();
        this.$router.push("/login");
        return;
      } else {
        unsetLoggedUserToken();
        alert("Ha ocurrido un error, intente más tarde");
        this.$router.push("/login");
      }
    },
  },
  computed: {
    loggedUser() {
      return getLoggedUserToken();
    },
  },
};
</script>

<style scoped>
</style>