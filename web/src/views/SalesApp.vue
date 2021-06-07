<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/app/products">{{
          $t("nav.products-label")
        }}</router-link>
      </el-menu-item>
      <el-submenu index="2">
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
        <el-menu-item index="2-3">{{
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
      <el-menu-item index="4">
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
export default {
  components: { CustomButton },
  name: "SalesApp",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>