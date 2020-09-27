<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">ĐĂNG KÝ</h3>
    <p class="auth-form__panel">Xin chào! Đăng ký tài khoản của bạn</p>

    <form @submit.prevent="handleRegister" class="auth-form">
      <div class="form-input" :class="{ error: $v.email.$error }">
        <input
          v-model.trim="$v.email.$model"
          name="email"
          type="text"
          value
          required
        />
        <label for="email">Email</label>
        <div v-if="!$v.email.email" class="error">
          Bạn phải nhập email hợp lệ
        </div>
        <div v-if="!$v.email.required" class="error">
          Email không được để trống
        </div>
      </div>

      <div class="form-input" :class="{ error: $v.name.$error }">
        <input
          v-model.trim="$v.name.$model"
          name="name"
          type="text"
          value
          required
        />
        <label for="name">Họ và tên</label>

        <div v-if="!$v.name.required" class="error">
          Tên không được để trống
        </div>

        <div v-if="!$v.name.minLength" class="error">
          Tên không được thấp hơn 4 ký tự
        </div>
      </div>

      <div class="form-input" :class="{ error: $v.password.$error }">
        <input
          v-model.trim="$v.password.$model"
          name="password"
          type="password"
          value
          required
        />
        <label for="password">Mật Khẩu</label>
        <div v-if="!$v.password.required" class="error">
          Mật khẩu không được để trống
        </div>

        <div v-if="!$v.password.minLength" class="error">
          Mật khẩu không được thấp hơn 6 ký tự
        </div>
      </div>

      <div class="form-input" :class="{ error: $v.cfpassword.$error }">
        <input
          v-model.trim="$v.cfpassword.$model"
          name="cfpassword"
          type="password"
          value
          required
        />
        <label for="cfpassword">Xác Nhận Mật Khẩu</label>
        <div v-if="!$v.cfpassword.sameAsPassword" class="error">
          Xác nhận mật khẩu không khớp
        </div>
      </div>

      <p
        class="main-error text-md font-bold text-left uppercase"
        v-if="authError"
      >
        {{ authError }}
      </p>

      <button class="form-btn">Đăng Ký</button>
      <p @click="login" class="form-link">Đã có tài khoản? Trở lại đăng nhập</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import {
  required,
  minLength,
  between,
  email,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  props: {
    login: {
      type: Function,
    },
  },
  data() {
    return {
      email: null,
      name: null,
      password: null,
      cfpassword: null,
    };
  },

  computed: {
    ...mapState(["authError"]),
  },

  validations: {
    name: {
      required,
      minLength: minLength(4),
    },

    email: {
      email,
      required,
    },

    password: {
      required,
      minLength: minLength(6),
    },

    cfpassword: {
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    ...mapActions(["register"]),
    handleRegister() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.register({
          email: this.email,
          name: this.name,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style>
</style>