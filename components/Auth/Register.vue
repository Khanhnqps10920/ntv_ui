<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">REGISTER</h3>
    <p class="auth-form__panel">Welcome! Sign up your account</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="username" type="text" />
        <label for="username">Your user name</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" />
        <label for="password">Your password</label>
      </div>

      <div class="form-input">
        <input name="cfpassword" type="password" />
        <label for="cfpassword">Confirm Password</label>
      </div>

      <button class="form-btn">Sign up</button>
      <a class="form-link" href="#">Already have an account? Back to login</a>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>