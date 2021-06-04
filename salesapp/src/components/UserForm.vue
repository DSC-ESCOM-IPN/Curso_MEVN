<template>
  <el-form ref="form" label-width="20%">
    <h2 v-once>{{ $t("sales.form.title") }}</h2>
    <el-row>
      <el-col>
        <custom-input
          :label="$t('sales.form.name-label')"
          name="name"
          modifier="capname"
          :rules="{ required: true, min: 5 }"
          @update="update"
          type="text"
          icon="el-icon-user-solid"
          class="w-80"
        />
      </el-col>
      <el-col>
        <custom-input
          :label="$t('sales.form.product-label')"
          name="product"
          modifier="capitalize"
          :rules="{ required: true, min: 5 }"
          @update="update"
          type="text"
          icon="el-icon-s-goods"
          class="w-80"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <custom-input
          :label="$t('sales.form.date-label')"
          name="date"
          :rules="{ required: true }"
          @update="update"
          type="date"
          class="w-80"
        />
      </el-col>
      <el-col>
        <custom-input
          :label="$t('sales.form.price-label')"
          name="cost"
          :rules="{ required: true }"
          @update="update"
          type="number"
          class="w-80"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <custom-button
          :label="$t('sales.form.btn-submit')"
          type="warning"
          @click.prevent="registerSale()"
          :disabled="!valid"
        />
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import moment from "moment";
import accounting from "accounting-js";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton.vue";

export default {
  name: "UserForm",
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      name: {
        value: "",
        valid: false,
      },
      cost: {
        value: 0,
        valid: false,
      },
      date: {
        value: "",
        valid: false,
      },
      product: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    registerSale() {
      if (!this.valid) {
        alert(this.$t("sales.form.validation-msg"));
        return;
      }
      this.$emit("add-sale", {
        id: this.$store.state.sales.length,
        name: this.name.value,
        date: this.saledate,
        cost: this.currency,
        product: this.product.value,
      });
      this.cleanState();
    },
    update(payload) {
      this[payload.name].value = payload.value;
      this[payload.name].valid = payload.valid;
    },
    cleanState() {
      this.cost = {
        value: 0,
        valid: false,
      };
      this.name = {
        value: "",
        valid: false,
      };
      this.date = {
        value: "",
        valid: false,
      };
      this.product = {
        value: "",
        valid: false,
      };
    },
  },
  computed: {
    valid() {
      return (
        this.name.valid &&
        this.cost.valid &&
        this.date.valid &&
        this.product.valid
      );
    },
    currency() {
      return accounting.formatMoney(this.cost.value);
    },
    saledate() {
      return moment(this.date.value).format("MMMM Do YYYY");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w-80 {
  width: 80%;
  height: auto;
}
</style>
