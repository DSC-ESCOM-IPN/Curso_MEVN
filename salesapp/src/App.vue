<template>
  <div class="container">
    <h1>{{ tittle }}</h1>
    <div class="row">
      <div class="col-6">
        <button
          type="button"
          class="btn btn-success"
          :class="{ active: showForm }"
          @click="showForm = !showForm"
        >
          Show Form
        </button>
      </div>
      <div class="col-6">
        <button
          type="button"
          class="btn btn-info"
          :class="{ active: showTable }"
          @click="showTable = !showTable"
        >
          Show Table
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <UserForm v-if="showForm" :sales="sales" @add-sale="addSale" />
      </div>
      <div class="col-6">
        <UserTable v-if="showTable" :sales="sales" />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

export default {
  name: "App",
  components: {
    UserForm,
    UserTable,
  },
  data() {
    return {
      tittle: "Aplicación ventas",
      showForm: true,
      showTable: true,
      sales: [],
    };
  },
  methods: {
    addSale(newsale) {
      this.sales.push(newsale);
    },
  },
  beforeCreate() {
    console.log("App: beforeCreate()");
  },
  created() {
    console.log("App: created()");
  },
  beforeMount() {
    console.log("App: beforeMount()");
  },
  mounted() {
    console.log("App: mounted()");
  },
  beforeUpdate() {
    console.log("App: beforeUpdate()");
  },
  updated() {
    console.log("App: updated()");
  },
  beforeUnmount() {
    console.log("App: beforeUnmount()");
  },
  unmounted() {
    console.log("App: unmounted()");
  },
};
</script>

<style>
#app {
  width: 100%;
  height: auto;
  text-align: center;
}

input,
button {
  width: 75%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0.5em;
}

button {
  font-size: medium;
}
</style>
