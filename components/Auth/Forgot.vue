<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">KHÔI PHỤC MẬT KHẨU</h3>
    <p class="auth-form__panel">Khôi phục mật khẩu</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="text" value required />
        <label for="email">Email</label>
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
export default {
  props: {
    login: {
      type: Function,
    },
  },
};
</script>

<style>
</style>