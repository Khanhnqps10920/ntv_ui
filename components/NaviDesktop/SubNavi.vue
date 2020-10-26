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

        <!-- users -->
        <!-- <div v-if="user" class="flex items-center relative">
          <p @click="toggleInfo = !toggleInfo" class="hover:text-hovercolor cursor-pointer mr-5 text-xs capitalize">
            {{ user.name }}
          </p>
     

          <div class="auth-info absolute" v-if="toggleInfo">
            <a
              class="hover:text-hovercolor text-xs cursor-pointer"
              @click="handleChangePassword"
            >Đổi mật khẩu
            </a>  
            <a
              @click="handleLogout"
              class="hover:text-hovercolor text-xs cursor-pointer mt-3"
            >Logout
            </a >
          </div>
        </div>

        <a
          v-if="!user"
          @click="activeSigninModal"
          class="hover:text-hovercolor cursor-pointer"
          >Đăng nhập / Đăng ký</a
        > -->
      </div>
    </Container1640>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

import Container1640 from "@/components/containers/Container1640";
export default {
  data(){
    return {
      toggleInfo: false
    }
  }
  ,
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

    handleLogout() {
      this.logout();

      this.toggleInfo = false;
    },

    handleChangePassword() {
      this.setActiveSignin(true);
      this.$emit('resetPassword');
      this.toggleInfo = false;
    }
  },
};
</script>

<style scoped>

  .auth-info {
    z-index:1000;
    top:20px;
    right:30px;
    white-space:nowrap;
    transform: translateX(50%);
    background:black;
    padding:10px;
    text-align: center;
  }

  .auth-info a {
    display:block;
  }

</style>