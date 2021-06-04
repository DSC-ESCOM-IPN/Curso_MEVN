<template>
  <div class="container">
    <h1>{{ $t("sales.title") }}</h1>
    <el-row>
      <el-col :span="12">
        <custom-button
          :label="$t('sales.btn-form')"
          type="success"
          @click="showForm = !showForm"
        />
      </el-col>
      <el-col :span="12">
        <custom-button
          :label="$t('sales.btn-table')"
          type="primary"
          @click="showTable = !showTable"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <UserForm v-if="showForm" @add-sale="addSale" />
      </el-col>
      <el-col :span="12">
        <UserTable v-if="showTable"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import CustomButton from "../components/CustomButton";

export default {
  name: "Sales",
  components: {
    UserForm,
    UserTable,
    CustomButton,
  },
  data() {
    return {
      showForm: true,
      showTable: true,
    };
  },
  methods: {
    addSale(newsale) {
      this.$store.dispatch('addSale',newsale)
    },
  },
};
</script>

<style>
</style>
