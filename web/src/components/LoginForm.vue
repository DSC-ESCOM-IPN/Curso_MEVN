<template>
  <div class="login">
    <el-card>
      <h2>{{ $t("login.title") }}</h2>
      <el-form class="login-form" ref="form" @submit.prevent="login">
        <el-form-item prop="email">
          <custom-input
            :label="$t('login.email-placeholder')"
            name="email"
            :rules="{ required: true, min: 10 }"
            @update="update"
            type="email"
            icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <custom-input
            :label="$t('login.password-placeholder')"
            name="password"
            :rules="{ required: true, min: 6 }"
            @update="update"
            type="password"
            icon="el-icon-lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >{{ $t("login.submitbtn") }}</el-button
          >
        </el-form-item>
        <div class="signup">
          {{ $t("login.signup-msg") }}
          <router-link to="/signup">{{ $t("login.signup-link") }}</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CustomInput from "./CustomInput";
import { loginUser, setLoggedUserToken } from "../utils/auth";

export default {
  name: "LoginForm",
  components: {
    CustomInput,
  },
  data() {
    return {
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
      loading: false,
    };
  },
  computed: {
    valid() {
      return this.password.valid && this.email.valid;
    },
  },
  methods: {
    update(payload) {
      this[payload.name].value = payload.value;
      this[payload.name].valid = payload.valid;
    },
    async login() {
      if (!this.valid) {
        alert("Revisa los datos ingresados");
        return;
      }
      try {
        this.loading = true;
        const res = await loginUser({
          email: this.email.value,
          password: this.password.value,
        });
        this.loading = false;
        if (res.data.server === "Inicio de sesion exitoso" && res.status === 200) {
          this.$router.push("/app/products");
          setLoggedUserToken(res.data.token);
          return;
        }

        alert("¡Datos incorrectos! Intentalo de nuevo");
        throw new Error(res.data.server);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.signup {
  margin-top: 10px;
}
.el-button--primary {
  background: #007c89;
  border-color: #007c89;
}
.el-button--primary:hover,
.el-button--primary.active,
.el-button--primary:focus {
  background: #009cad;
  border-color: #009cad;
}
.login .el-input__inner:hover {
  border-color: #007c89;
}
.login .el-input__prefix {
  background: #eeedea;
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
}
.login .el-input__prefix .el-input__icon {
  width: 30px;
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: #007c89;
  text-decoration: none;
}
a:hover,
a:active,
a:focus {
  color: #009cad;
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>