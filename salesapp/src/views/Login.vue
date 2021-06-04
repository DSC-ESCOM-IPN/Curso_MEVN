<template>
  <div id="login">
    <div class="header">
      <h2 class="logo">
        <img
          class="logo-img"
          src="../assets/dsc_logo_white.png"
          alt="DSC LOGO"
        />
      </h2>
    </div>
    <login-form />

    <div class="footer">
      <div class="version">DSC ESCOM IPN 2021</div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#login {
  margin: 0;
  padding: 0;
  background: #102a43;
  background-size: contain;
}
.footer,
.header {
  padding: 20px 20px;
  color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer h1,
.header h1,
.footer h2,
.header h2,
.footer h3,
.header h3 {
  color: #f0f4f8;
  padding: 0;
  margin: 0;
}

.footer .version,
.header .version {
  font-family: "Open Sans";
  padding: 0 10px;
  color: #9fb3c8;
  font-size: 12px;
  margin-top: 5px;
}
.header {
  padding: 10px 20px;
}
.header .logo {
  font-family: "Open Sans";
  letter-spacing: 3px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.logo-img {
  width: 20%;
  height: auto;
}
</style>
