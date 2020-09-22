<template>
  <div class="login">
    <h3 class="login__title">SIGN IN</h3>
    <p class="login__panel">Welcome! Log into your account</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="username" type="text" />
        <label for="username">Your user name</label>
      </div>

      <div class="form-input">
        <input name="username" type="text" />
        <label for="username">Your user name</label>
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
.login {
  text-align: center;
}

.login .login__title {
  padding: 26px 0 22px;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: bold;
}
</style>
