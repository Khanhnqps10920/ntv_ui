<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">KHÔI PHỤC MẬT KHẨU</h3>
    <p class="auth-form__panel">Khôi phục mật khẩu</p>

    <form action class="auth-form">
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

      <button class="form-btn">GỬI LẠI MẬT KHẨU</button>
      <p @click="login" class="form-link">Trở Lại Đăng Nhập</p>
    </form>
  </div>
</template>

<script>
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