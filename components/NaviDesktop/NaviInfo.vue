<template>
  <div>
    <Container1640>
      <div class="flex mt-8">
        <div class="flex-1 text-left self-center">
          <i class="fas fa-cloud-sun-rain"></i>
          <span class="font-bold">14.9</span>
          <span>VietNam</span>
        </div>
        <div class="flex-1 text-center">
          <Logo />
          <div class="text-sm mt-1">Saturday, August 29, 2020</div>
        </div>
        <div class="flex-1 text-right self-center">
          <i class="fab fa-facebook-f mr-3"></i>
          <i class="fab fa-twitter mr-3"></i>
          <i class="fab fa-youtube mr-3"></i>
          <i class="fas fa-search"></i>
        </div>
      </div>
    </Container1640>
  </div>
</template>

<script>
import Logo from "@/components/NaviDesktop/Logo";
import Container1640 from "@/components/containers/Container1640";

export default {
  data() {
    return {};
  },
  components: {
    Container1640,
    Logo
  }
};
</script>

<style scoped>
</style>