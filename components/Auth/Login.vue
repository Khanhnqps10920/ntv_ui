<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">ĐĂNG NHẬP</h3>
    <p class="auth-form__panel">Xin chào! Đăng nhập tài khoản của bạn</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="text" value required />
        <label for="username">Email</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" value required />
        <label for="password">Mật Khẩu</label>
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
export default {
  props: {
    forgot: {
      type: Function,
    },
    register: {
      type: Function,
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
