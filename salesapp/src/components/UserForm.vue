<template>
  <div>
    <h2 v-once>{{ tittle }}</h2>
    <div class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Producto"
          v-model="product"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input
          type="date"
          class="form-control"
          placeholder="Fecha de venta"
          v-model="date"
        />
      </div>
      <div class="col">
        <input
          type="number"
          class="form-control"
          placeholder="Precio"
          v-model.number="cost"
          @keyup.enter="registerSale()"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" @click="registerSale()">
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import accounting from "accounting-js";

export default {
  name: "UserForm",
  props: {
    sales: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tittle: "Registro de ventas",
      btnText: "Registrar Venta",
      name: "",
      cost: 0,
      date: "",
      product: "",
    };
  },
  methods: {
    registerSale() {
      this.$emit("add-sale", {
        name: this.name,
        date: this.saledate,
        cost: this.currency,
        product: this.product,
      });
      this.cost = 0;
      this.name = "";
      this.date = "";
      this.product = "";
    },
  },
  computed: {
    capitalize() {
      return this.product.charAt(0).toUpperCase() + this.product.slice(1);
    },
    capname2() {
      let space = true;
      let final = [];
      for (let i = 0; i < this.name.length; i++) {
        if (space) {
          final.push(this.name[i].toUpperCase());
        } else {
          final.push(this.name[i]);
        }
        space = this.name[i] === " ";
      }
      return final.join("");
    },
    currency() {
      return accounting.formatMoney(this.cost);
    },
    saledate() {
      return moment(this.date).format("MMMM Do YYYY");
    },
  },
  watch: {
    name() {
      this.name = this.capname2;
    },
    product(current) {
      if (current.length <= 1) this.product = this.capitalize;
    },
  },
  beforeCreate() {
    console.log("Form: beforeCreate()");
  },
  created() {
    console.log("Form: created()");
  },
  beforeMount() {
    console.log("Form: beforeMount()");
  },
  mounted() {
    console.log("Form: mounted()");
  },
  beforeUpdate() {
    console.log("Form: beforeUpdate()");
  },
  updated() {
    console.log("Form: updated()");
  },
  beforeUnmount() {
    console.log("Form: beforeUnmount()");
  },
  unmounted() {
    console.log("Form: unmounted()");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
