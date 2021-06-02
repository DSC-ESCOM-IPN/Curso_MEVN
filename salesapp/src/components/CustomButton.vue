<template>
  <el-row class="btn-container">
    <el-button :type="type" style="width: 100%" :disabled="disabled">{{
      label
    }}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
};
</script>


<style scoped>
.btn-container {
  width: 80%;
  margin: 1em;
}
</style>
