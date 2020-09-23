<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">SIGN IN</h3>
    <p class="auth-form__panel">Welcome! Log into your account</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="email" />
        <label for="username">Your Email</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" />
        <label for="password">Your Password</label>
      </div>

      <button class="form-btn">Log in</button>
      <a class="form-link" href="#">Forgot your password? Get help</a>

      <a class="form-link" href="#">Dont have an account? Register</a>
    </form>
  </div>
</template>

<script>
export default {};
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
