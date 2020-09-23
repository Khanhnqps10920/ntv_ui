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
      <a class="form-link" href="#">A password will be e-mailed to you</a>
      <a class="form-link" href="#">Back to login</a>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>