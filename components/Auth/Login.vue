<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">SIGN IN</h3>
    <p class="auth-form__panel">Welcome! Log into your account</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="text" value required />
        <label for="username">Your UserName</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" value required />
        <label for="password">Your Password</label>
      </div>

      <button class="form-btn">Log in</button>
      <p @click="forgot" class="form-link">Forgot your password? Get help</p>
      <p @click="register" class="form-link">Dont have an account? Register</p>
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
