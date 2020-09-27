<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">KHÔI PHỤC MẬT KHẨU</h3>
    <p class="auth-form__panel">Khôi phục mật khẩu</p>

    <form @submit.prevent="handleForgotPassword" class="auth-form">
      <div class="form-input" :class="{ error: $v.email.$error }">
        <input
          name="email"
          v-model.trim="$v.email.$model"
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

      <p class="text-left text-xs cursor-pointer hover:underline">
        Mật Khẩu Sẽ Được Gửi Cho Bạn Qua Email
      </p>

      <p
        class="main-error text-md mt-4 font-bold text-left uppercase"
        v-if="authError"
      >
        {{ authError }}
      </p>
      <button class="form-btn">GỬI LẠI MẬT KHẨU</button>
      <p @click="login" class="form-link">Trở Lại Đăng Nhập</p>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { email, required } from "vuelidate/lib/validators";

export default {
  props: {
    login: {
      type: Function,
    },
  },
  data() {
    return {
      email: null,
    };
  },

  computed: {
    ...mapState(["authError"]),
  },

  methods: {
    ...mapActions(["forgetPassword"]),
    handleForgotPassword() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("1111");

        return;
      }

      this.forgetPassword(this.email);
    },
  },
  validations: {
    email: {
      email,
      required,
    },
  },
};
</script>

<style>
</style>