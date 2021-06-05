<template>
  <div class="login">
    <el-card>
      <h2>{{ $t("login.title") }}</h2>
      <el-form class="login-form" ref="form" @submit.prevent="login">
        <el-form-item prop="username">
          <custom-input
            :label="$t('login.username-placeholder')"
            name="username"
            :rules="{ required: true, min: 5 }"
            @update="update"
            type="text"
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
        <a class="forgot-password" href="#">{{ $t("login.forgot-pwd") }}</a>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CustomInput from "./CustomInput";

export default {
  name: "LoginForm",
  components: {
    CustomInput,
  },
  data() {
    return {
      validCredentials: {
        username: "dsc-escom-ipn",
        password: "password",
      },
      username: {
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
      return this.password.valid && this.username.valid;
    },
  },
  methods: {
    update(payload) {
      this[payload.name].value = payload.value;
      this[payload.name].valid = payload.valid;
    },
    simulateLogin() {
      return new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      if (!this.valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        this.username.value === this.validCredentials.username &&
        this.password.value === this.validCredentials.password
      ) {
        this.$message.success("Login successfull");
      } else {
        this.$message.error("Username or password is invalid");
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
.forgot-password {
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
