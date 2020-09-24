<template>
  <div class="auth-form-wrapper">
    <h3 class="auth-form__title">PASSWORD RECOVERY</h3>
    <p class="auth-form__panel">Recover your password</p>

    <form action class="auth-form">
      <div class="form-input">
        <input name="email" type="email" />
        <label for="email">Email</label>
      </div>

      <button class="form-btn">SEND MY PASSWORD</button>
      <p @click="login" class="form-link">A password will be e-mailed to you</p>
      <p @click="login" class="form-link">Back to login</p>
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