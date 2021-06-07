<template>
  <el-descriptions :title="$t('profile.title')" border>
    <el-descriptions-item :label="$t('profile.name-label')"
      >Nombre</el-descriptions-item
    >
    <el-descriptions-item :label="$t('profile.email-label')"
      >Correo</el-descriptions-item
    >
  </el-descriptions>
</template>

<script>
export default {
  name: "ProfileInfo",
};
</script>

<style >
</style>