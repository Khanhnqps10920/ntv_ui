<template>
  <div class="bg-black">
    <Container1640>
      <div class="flex text-white text-xs h-8 items-center justify-between">
        <div class="flex items-center">
          <!-- <nuxt-link to class="mr-5 hover:text-hovercolor">Advertise</nuxt-link> -->
          <nuxt-link to class="mr-5 hover:text-hovercolor"
            >Về chúng tôi</nuxt-link
          >
          <a
            href="http://nongthonviet.com.vn/"
            target="_blank"
            class="mr-5 hover:text-hovercolor"
            >Magazine</a
          >
          <nuxt-link to class="mr-5 hover:text-hovercolor">Liên hệ</nuxt-link>
          <!-- <nuxt-link to class="mr-5 hover:text-hovercolor">In the press</nuxt-link> -->
        </div>
        <div v-if="user" class="flex items-center">
          <p class="hover:text-color cursor-pointer mr-5 text-xs capitalize">
            {{ user.name }}
          </p>
          <a
            @click="logout"
            class="hover:text-hovercolor text-xs cursor-pointer"
            >Logout</a
          >
        </div>

        <a
          v-if="!user"
          @click="activeSigninModal"
          class="hover:text-hovercolor cursor-pointer"
          >Đăng nhập / Đăng ký</a
        >
      </div>
    </Container1640>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

import Container1640 from "@/components/containers/Container1640";
export default {
  components: {
    Container1640,
  },

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    ...mapMutations(["setActiveSignin"]),

    ...mapActions(["logout"]),

    activeSigninModal(e) {
      e.preventDefault();
      this.setActiveSignin(true);
    },
  },
};
</script>

<style scoped>
</style>