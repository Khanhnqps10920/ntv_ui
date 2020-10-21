<template>
  <nav class="mobile-nav flex h-12 items-center justify-between px-5">
    <div class>
      <i class="mobile-nav__icons fas fa-bars" @click="$emit('openSideBar')"></i>
    </div>
    <!-- <nuxt-link class="text-center font-extrabold uppercase font-sans" to="/">{{webname}}</nuxt-link> -->
     <nuxt-link class="text-center font-extrabold uppercase font-sans" to="/">Nông Nghiệp 365</nuxt-link>
    <div class>
      <i class="fas fa-user mr-2 mobile-nav__icons" @click="handleActiveAuth"></i>
      <i class="mobile-nav__icons fas fa-search" @click="$emit('openSearchSideBar')"></i>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    webname() {
      return process.env.Webname;
    }
  },
  methods: {
    ...mapMutations(["setActiveSignin"]),

    handleActiveAuth() {
      this.setActiveSignin(true);
    }
  }
};
</script>

<style scoped>
.mobile-nav {
  /* position */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  /* other element */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.mobile-nav .mobile-nav__icons {
  font-size: 0.8rem;
  cursor: pointer;
}
</style>>