<template>
  <div ref="content" class="auth" @click="handleCloseModal">
    <div class="auth__content">
      <i
        class="close fas fa-times cursor-pointer"
        @click="handleCloseClick"
      ></i>
      <div class="auth__content-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setActiveSignin", "SET_AUTH_ERROR"]),

    handleCloseModal(e) {
      if (e.target === this.$refs.content) {
        this.$emit('closeAuth');
        this.setActiveSignin(false);
        this.SET_AUTH_ERROR(null);
      }
    },
    handleCloseClick() {
        this.$emit('closeAuth');
        this.setActiveSignin(false);
        this.SET_AUTH_ERROR(null);
    }
  },
};
</script>

<style scoped>
.auth {
  /* display: none; */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Sit on top */
  /* padding-top: 50px; */
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
  /* margin: 0 auto; */
  vertical-align: top;
  position: relative;
  z-index: 2000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../../assets/imgs/nongthon.jpg");
  background-size: cover;
  background-position: center;
  overflow: auto;
}

.auth .auth__content::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0.9;
  z-index: 1;
  background: linear-gradient(
    45deg,
    rgba(1, 3, 2, 0.9) 0%,
    rgba(95, 94, 95, 0.9) 100%
  );
}

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
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
  }

  .auth .auth__content {
    width: 100%;
    height: 100%;
    z-index: 10000000000000;
  }

  .auth .auth__content-slot {
    padding: 0 10%;
  }
}
</style>
