<template>
  <div class="auth">
    <div class="auth__content">content</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 230px; /* Location of the box */
  padding-right: 8px;
  padding-left: 8px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.auth .auth__content {
  max-width: 500px;
  min-height: 500px;
  margin: 0 auto;
  vertical-align: top;
  position: relative;

  background: url("../../assets/imgs/sidebar-background.jpg");
  background-size: cover;
  background-position: center;
}

.auth .auth__content::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0.8;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(131, 132, 64, 0.24) 0%,
    rgba(51, 51, 24, 0.185) 100%
  );
}

@media (max-width: 768px) {
  .auth {
    padding-top: 100px;
  }
}
</style>