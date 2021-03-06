<template>
  <div>
    <div id="fb-root"></div>
    <!-- Auth -->
    <Auth v-if="signinModal" v-on:closeAuth="handleCloseAuth">
      <component :is="authComponent" v-bind="authProps"></component>
    </Auth>
    <!--Navi Desktop-->
    <NaviDesktop @resetPassword="handleResetPassword" :categories="categories" />
    <div class="sm:hidden md:hidden lg:hidden">
      <!-- nav mobile -->
      <NaviMobile
        @resetPassword="handleResetPassword"
        @openSideBar="showSideBar = true"
        @openSearchSideBar="showSearchSideBar = true"
      />
      <!-- sidebar menu -->
      <transition name="slide-left">
        <SideBarMobile v-if="showSideBar" :categories="categories" @closeSideBar="showSideBar = false" />
      </transition>
      <!-- sidebar search -->
      <transition name="slide-right">
        <SearchSideBarMobile
          v-if="showSearchSideBar"
          @closeSideBar="showSearchSideBar = false"
        />
      </transition>
    </div>
    <nuxt />
    <Footer :categories="categories" />
    <ScrollTop />
  </div>
</template>
<script>
// libs
import { mapState } from "vuex";

import NaviDesktop from "@/components/NaviDesktop/NaviDesktop";
import NaviMobile from "@/components/NaviMobile/NaviMobile";
import SideBarMobile from "@/components/SidebarMobile/SideBarMobile.vue";
import SearchSideBarMobile from "@/components/SidebarMobile/SearchSideBarMobile.vue";
import Footer from "@/components/Footer/Footer.vue";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Auth from "@/components/Auth/Auth.vue";
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";
import Forgot from "@/components/Auth/Forgot.vue";
import ResetPassword from "@/components/Auth/ResetPassword.vue";

export default {
  components: {
    Footer,
    NaviDesktop,
    NaviMobile,
    SideBarMobile,
    SearchSideBarMobile,
    ScrollTop,
    Auth,
    Login,
    Register,
    Forgot,
    ResetPassword
  },

  data() {
    return {
      showSearchSideBar: false,
      showSideBar: false,
      categories: [],
      authComponent: "Login",
    };
  },
  methods: {
    handleCloseAuth() {
      this.authComponent = "Login";
    },
    handleResetPassword() {
      this.authComponent = "ResetPassword";
    }
  },

  computed: {
    ...mapState(["signinModal"]),
    authProps() {
      const vm = this;

      // login props
      if (this.authComponent === "Login") {
        return {
          forgot: () => {
            vm.authComponent = "Forgot";
            this.$store.commit("SET_AUTH_ERROR", null);
          },

          register: () => {
            vm.authComponent = "Register";
            this.$store.commit("SET_AUTH_ERROR", null);
          },
        };
      }
      // register props
      if (this.authComponent === "Register") {
        return {
          login: () => {
            vm.authComponent = "Login";
            this.$store.commit("SET_AUTH_ERROR", null);
          },
        };
      }

      // forgot props
      if (this.authComponent === "Forgot") {
        return {
          login: () => {
            vm.authComponent = "Login";
            this.$store.commit("SET_AUTH_ERROR", null);
          },
        };
      }
    },
  },
  async mounted() {
    // get weather
    await this.$store
      .dispatch("getCurrentWeather", {
        urlQuery: {
          id: "1566083",
          appid: "060d473d45f1d22478455e48f344f211",
        },
      })
      .then((res) => {
        this.$store.commit("SET_WEATHER", res.data);
      });

    //get categories list
    this.$store.dispatch("getCategories", {
      nextActions: (res) => {
        this.categories = res.result;
      },
    });

    // try auto login

    this.$store.dispatch("tryAutoLogin");
  },

  head() {
    return {
      script: [
        {
          src: "https://kit.fontawesome.com/a767a8054c.js",
          crossorigin: "anonymous",
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Gelasio:wght@400;700&family=Source+Sans+Pro:wght@200&display=swap",
          rel: "stylesheet",
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap",
          rel: "stylesheet",
        },

        {
          link:
            "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
          rel: "stylesheet",
        },
        {
          async: true,
          defer: true,
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0",
          nonce: "Ef8u8iSh",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slide-left-enter-active {
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transform: translate3d(0, 0, 0);
}
.slide-left-leave-active {
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transform: translate3d(0, 0, 0);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active {
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transform: translate3d(0, 0, 0);
}
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transform: translate3d(0, 0, 0);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
