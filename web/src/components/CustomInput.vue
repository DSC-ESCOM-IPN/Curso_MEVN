<template>
  <div class="input-wrapper">
    <div class="error">{{ error }}</div>
    <el-form-item :label="label">
      <el-input
        v-if="type === 'text' || type === 'password'"
        v-model="value"
        @input="input"
        :prefix-icon="icon"
        :show-password="type === 'password'"
      ></el-input>
      <el-input-number
        v-else-if="type === 'number'"
        v-model.number="value"
        @input="input"
        :prefix-icon="icon"
      ></el-input-number>
      <el-date-picker
        v-else-if="type === 'date'"
        v-model="value"
        @change="input"
        type="date"
        placeholder="Selecciona una fecha"
        :prefix-icon="icon"
      ></el-date-picker>
      <div v-if="type === 'email'" class="el-input el-input--prefix" data-v-051ef74e="">
        <input class="el-input__inner" type="email" autocomplete="off" /><span
          class="el-input__prefix"
          ><i class="el-input__icon" :class="icon"></i
        ></span>
      </div>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: Object,
    },
    type: {
      type: String,
      required: true,
    },
    modifier: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  emits: ["update"],
  methods: {
    validar(value) {
      if (this.rules.required && !value) {
        return `${this.$t("custom-input.required-label")}*`;
      }
      if (this.rules.min && value.length < this.rules.min) {
        return this.$t("custom-input.length-validation", {
          num: this.rules.min,
        });
      }
    },
    input() {
      this.$emit("update", {
        value: this.value,
        name: this.name,
        valid: !this.validar(this.value),
      });
    },
  },
  computed: {
    error() {
      return this.validar(this.value);
    },
    capitalize() {
      return this.value.charAt(0).toUpperCase() + this.value.slice(1);
    },
    capname() {
      let space = true;
      let final = [];
      for (let i = 0; i < this.value.length; i++) {
        if (space) {
          final.push(this.value[i].toUpperCase());
        } else {
          final.push(this.value[i]);
        }
        space = this.value[i] === " ";
      }
      return final.join("");
    },
  },
  watch: {
    value() {
      switch (this.modifier) {
        case "capname":
          this.value = this.capname;
          break;
        case "capitalize":
          this.value = this.capitalize;
          break;
        default:
          return;
      }
    },
  },
};
</script>


<style scoped>
.input-wrapper {
  width: 100%;
}
.error {
  text-align: end;
  color: red;
}
</style>