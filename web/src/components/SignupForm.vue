<template>
  <div class="signup">
    <el-card>
      <h2>{{ $t("signup.title") }}</h2>
      <el-form class="signup-form" ref="form" @submit.prevent="register">
        <el-row>
          <el-col :span="11">
            <el-form-item prop="name">
              <custom-input
                :label="$t('signup.name-placeholder')"
                name="name"
                :rules="{ required: true, min: 6 }"
                @update="update"
                type="text"
                icon="el-icon-user-solid"
              />
            </el-form-item>
            <el-form-item prop="password">
              <custom-input
                :label="$t('signup.password-placeholder')"
                name="password"
                :rules="{ required: true, min: 6 }"
                @update="update"
                type="password"
                icon="el-icon-lock"
              />
            </el-form-item>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="11">
            <el-form-item prop="email">
              <custom-input
                :label="$t('signup.email-placeholder')"
                name="email"
                :rules="{ required: true, min: 10 }"
                @update="update"
                type="email"
                icon="el-icon-user"
              />
            </el-form-item>
            <el-form-item prop="passwordConfirm">
              <custom-input
                :label="$t('signup.passwordconfirm-placeholder')"
                name="passwordConfirm"
                :rules="{ required: true, min: 6 }"
                @update="update"
                type="password"
                icon="el-icon-lock"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div v-if="password_error" class="error">
          {{ $t("signup.psswd-err") }}
        </div>
        <el-form-item>
          <el-button
            :loading="loading"
            class="signup-button"
            type="primary"
            native-type="submit"
            block
            >{{ $t("signup.submitbtn") }}</el-button
          >
        </el-form-item>
        <div class="login">
          {{ $t("signup.login-msg") }}
          <router-link to="/login">{{ $t("signup.login-link") }}</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CustomInput from "./CustomInput";
import { registerUser } from "../utils/auth";

export default {
  name: "SignupForm",
  components: {
    CustomInput,
  },
  data() {
    return {
      name: {
        value: "",
        valid: false,
      },
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
      passwordConfirm: {
        value: "",
        valid: false,
      },
      password_error: false,
      loading: false,
    };
  },
  computed: {
    valid() {
      return (
        this.password.valid &&
        this.email.valid &&
        this.passwordConfirm.valid &&
        this.name.valid
      );
    },
  },
  methods: {
    update(payload) {
      this[payload.name].value = payload.value;
      this[payload.name].valid = payload.valid;
    },
    validPasswords() {
      this.password_error = !(
        this.passwordConfirm.value === this.password.value
      );
      return this.password_error;
    },
    async register() {
      if (this.validPasswords() || !this.valid) {
        alert("Revisa los datos ingresados");
        return;
      }
      try {
        this.loading = true;
        const res = await registerUser({
          name: this.name.value,
          email: this.email.value,
          password: this.password.value,
          confirmPassword: this.passwordConfirm.value,
        });
        console.log(res);
        this.loading = false;
        if (res.data.server === "Usuario registrado" && res.status === 200) {
          alert("Registrado correctamente!");
          this.$router.push("/login");
          return;
        }

        alert("Ha ocurrido un error, intenta más tarde");
        throw new Error(res.data.server);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style scoped>
.signup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-button {
  width: 100%;
  margin-top: 40px;
}
.signup-form {
  width: 100%;
}
.login {
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
.signup .el-input__inner:hover {
  border-color: #007c89;
}
.signup .el-input__prefix {
  background: #eeedea;
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
}
.signup .el-input__prefix .el-input__icon {
  width: 30px;
}

.signup .el-card {
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
.signup .el-card {
  width: 630px;
  display: flex;
  justify-content: center;
}
.error {
  text-align: center;
  color: red;
}
</style>