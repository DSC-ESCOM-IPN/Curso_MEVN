<template>
  <el-descriptions :title="$t('profile.title')" border>
    <el-descriptions-item :label="$t('profile.name-label')">{{
      $store.state.userInfo.name
    }}</el-descriptions-item>
    <el-descriptions-item :label="$t('profile.email-label')">{{
      $store.state.userInfo.email
    }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: "ProfileInfo",
};
</script>

<style >
</style>