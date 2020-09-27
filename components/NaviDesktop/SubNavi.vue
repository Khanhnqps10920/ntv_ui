<template>
  <div class="bg-black">
    <Container1640>
      <div class="flex text-white text-xs h-8 items-center justify-between">
        <div class="flex items-center">
          <!-- <nuxt-link to class="mr-5 hover:text-hovercolor">Advertise</nuxt-link> -->
          <nuxt-link to class="mr-5 hover:text-hovercolor">Về chúng tôi</nuxt-link>
          <nuxt-link to class="mr-5 hover:text-hovercolor">Magazine</nuxt-link>
          <nuxt-link to class="mr-5 hover:text-hovercolor">Liên hệ</nuxt-link>
          <!-- <nuxt-link to class="mr-5 hover:text-hovercolor">In the press</nuxt-link> -->
        </div>
        <a @click="activeSigninModal" class="hover:text-hovercolor cursor-pointer">Đăng nhập / Đăng ký</a>
      </div>
    </Container1640>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import Container1640 from "@/components/containers/Container1640";
export default {
  components: {
    Container1640,
  },
  methods: {
    ...mapMutations(["setActiveSignin"]),

    activeSigninModal(e) {
      e.preventDefault();
      this.setActiveSignin(true);
    },
  },
};
</script>

<style scoped>
</style>