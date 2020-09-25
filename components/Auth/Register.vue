<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">REGISTER</h3>
    <p class="auth-form__panel">Welcome! Sign up your account</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="text" value required />
        <label for="email">Your Email</label>
      </div>

      <div class="form-input">
        <input name="username" type="text" value required />
        <label for="username">Your Username</label>
      </div>

      <div class="form-input">
        <input name="password" type="password" value required />
        <label for="password">Your Password</label>
      </div>

      <div class="form-input">
        <input name="cfpassword" type="password" value required />
        <label for="cfpassword">Confirm Password</label>
      </div>

      <button class="form-btn">Sign up</button>
      <p @click="login" class="form-link">
        Already have an account? Back to login
      </p>
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