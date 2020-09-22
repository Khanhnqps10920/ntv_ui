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