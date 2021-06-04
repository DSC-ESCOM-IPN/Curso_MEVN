<template>
  <div id="nav">
    <router-link to="/">{{$t('nav.login-label')}}</router-link> |
    <router-link to="/sales">{{$t('nav.sales-label')}}</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: auto;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
