<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">ĐĂNG NHẬP</h3>
    <p class="auth-form__panel">Xin chào! Đăng nhập tài khoản của bạn</p>

    <form @submit.prevent="handleLogin" class="auth-form">
      <div class="form-input" :class="{ error: $v.email.$error }">
        <input
          name="email"
          type="text"
          v-model="$v.email.$model"
          value
          required
        />
        <label for="username">Email</label>

        <div v-if="!$v.email.email" class="error">
          Bạn phải nhập email hợp lệ
        </div>
        <div v-if="!$v.email.required" class="error">
          Email không được để trống
        </div>
      </div>

      <div class="form-input" :class="{ error: $v.password.$error }">
        <input
          name="password"
          type="password"
          v-model="$v.password.$model"
          value
          required
        />
        <label for="password">Mật Khẩu</label>
        <div v-if="!$v.password.required" class="error">
          Mật khẩu không được để trống
        </div>
      </div>
      <p
        @click="forgot"
        class="text-left text-xs cursor-pointer hover:underline"
      >
        Quên mật khẩu?
      </p>

      <button class="form-btn">Đăng Nhập</button>
      <p @click="register" class="form-link">Chưa có tài khoản? Đăng ký</p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { required, email } from "vuelidate/lib/validators";

export default {
  props: {
    forgot: {
      type: Function,
    },
    register: {
      type: Function,
    },
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },

  validations: {
    email: {
      email,
      required,
    },

    password: {
      required,
    },
  },

  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.login({ email: this.email, password: this.password });
      }
    },
  },
};
</script>

<style>
/* .login {
  text-align: center;
}

.login .login__title {
  padding: 26px 0 22px;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: bold;
} */
</style>
