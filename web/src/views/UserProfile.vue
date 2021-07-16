<template>
  <div class="container">
    <h1>{{ $t("userprofile.title", { usr: $store.state.userInfo.name }) }}</h1>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <profile-info />
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import { getUserInfo } from "../utils/api.endpoints";
import { unsetLoggedUserToken } from "../utils/auth";
export default {
  components: { ProfileInfo },
  name: "UserProfile",
  created() {
    if (!this.$store.state.userInfo.email) {
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
    }
  },
};
</script>

<style>
</style>