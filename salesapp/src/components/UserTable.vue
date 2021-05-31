<template>
  <div class="table-responsive">
    <table class="table table-light table-striped">
      <thead>
        <tr>
          <th scope="col">Seller</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(item, index) in sales">
          <td scope="row">{{ item.name }}</td>
          <td>{{ item.product }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserTable",
  props: {
    sales: {
      type: Array,
      required: true,
    },
  },
  beforeCreate() {
    console.log("Table: beforeCreate()");
  },
  created() {
    console.log("Table: created()");
  },
  beforeMount() {
    console.log("Table: beforeMount()");
  },
  mounted() {
    console.log("Table: mounted()");
  },
  beforeUpdate() {
    console.log("Table: beforeUpdate()");
  },
  updated() {
    console.log("Table: updated()");
  },
  beforeUnmount() {
    console.log("Table: beforeUnmount()");
  },
  unmounted() {
    console.log("Table: unmounted()");
  },
};
</script>

<style>
</style>