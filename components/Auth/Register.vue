<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">ĐĂNG KÝ</h3>
    <p class="auth-form__panel">Xin chào! Đăng ký tài khoản của bạn</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="text" value required />
        <label for="email">Email</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" value required />
        <label for="password">Mật Khẩu</label>
      </div>

      <div class="form-input">
        <input name="cfpassword" type="password" value required />
        <label for="cfpassword">Xác Nhận Mật Khẩu</label>
      </div>

      <button class="form-btn">Đăng Ký</button>
      <p @click="login" class="form-link">Đã có tài khoản? Trở lại đăng nhập</p>
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