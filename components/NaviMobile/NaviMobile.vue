<template>
  <nav class="mobile-nav flex h-12 items-center justify-between px-5">
    <div class>
      <i class="mobile-nav__icons fas fa-bars" @click="$emit('openSideBar')"></i>
    </div>
    <!-- <nuxt-link class="text-center font-extrabold uppercase font-sans" to="/">{{webname}}</nuxt-link> -->
    <nuxt-link class="text-center font-extrabold uppercase font-sans" to="/">Nông Nghiệp 365</nuxt-link>
    <div class="relative">
      <p v-if="user" @click="toggleAuth = !toggleAuth" class="inline hover:text-hovercolor cursor-pointer mr-5 text-xs capitalize">
        {{user.name}}
      </p>
      <div v-if="toggleAuth" class="auth-info absolute">
        <p class="cursor-pointer hover:text-hovercolor text-xs" @click="handleChangePassword">Đổi mật khẩu</p>
        <p class="cursor-pointer hover:text-hovercolor text-xs mt-3" @click="handleLogout">Logout</p>
      </div>
      <i class="fas fa-user mr-2 mobile-nav__icons" v-if="!user" @click="handleActiveAuth"></i>
      <i class="mobile-nav__icons fas fa-search" @click="$emit('openSearchSideBar')"></i>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(['user']),
    webname() {
      return process.env.Webname;
    }
  },

  data() {
    return {
      toggleAuth: false
    }
  },
  methods: {
    ...mapMutations(["setActiveSignin"]),

    ...mapActions(["logout"]),


    handleActiveAuth() {
      this.setActiveSignin(true);
    },
    handleLogout() {
      this.logout();
      this.toggleAuth = false;
    },
    handleChangePassword() {
      this.toggleAuth = false;
      this.setActiveSignin(true);
      this.$emit('resetPassword');
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
.auth-info {
  z-index:1000;
  top:30px;
  right:50px;
  white-space:nowrap;
  transform: translateX(50%);
  background:black;
  padding:10px;
  text-align: center;
  color:white;
}
</style>>