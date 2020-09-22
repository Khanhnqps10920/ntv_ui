<template>
  <div class="auth">
    <div class="auth__content">
      <i class="close fas fa-times"></i>
      <div class="auth__content-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth {
  z-index: 2000;
  /* display: none; */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 50px; /* Location of the box */
  padding-right: 8px;
  padding-left: 8px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  color: #ffffff;
}

.auth .auth__content {
  max-width: 500px;
  min-height: 500px;
  margin: 0 auto;
  vertical-align: top;
  position: relative;
  z-index: 2000;

  background: url("../../assets/imgs/sidebar-background.jpg");
  background-size: cover;
  background-position: center;
}

/* .auth .auth__content::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0.5;
  z-index: 20001;
  background: linear-gradient(
    to bottom,
    rgba(131, 132, 64, 0.24) 0%,
    rgba(51, 51, 24, 0.185) 100%
  );
} */

.auth__content .close {
  position: absolute;
  z-index: 20002;
  top: 20px;
  right: 20px;
  font-size: 30px;
}

.auth__content-slot {
  width: 100%;
  padding: 0 20%;
  position: relative;
  z-index: 3000;
}

@media (max-width: 768px) {
  .auth {
    padding-top: 100px;
  }
}
</style>