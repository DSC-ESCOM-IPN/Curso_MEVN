<template>
  <div class="signup">
    <el-card>
      <h2>{{ $t("signup.title") }}</h2>
      <el-form class="signup-form" ref="form">
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
export default {
  name: "SignupForm",
  components: {
    CustomInput,
  },
  data() {
    return {
      validCredentials: {
        email: "dsc-escom-ipn",
        password: "password",
      },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>