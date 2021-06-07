<template>
  <div class="container">
    <h1>{{ $t("userprofile.title", { usr: "Paul" }) }}</h1>
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
export default {
  components: { ProfileInfo },
  name: "UserProfile",
};
</script>

<style>
</style>