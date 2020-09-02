<template>
  <div>
    <!--Navi Desktop-->
    <NaviDesktop />
    <div class="sm:hidden md:hidden lg:hidden">
      <!-- nav mobile -->
      <NaviMobile @openSideBar="showSideBar = true" @openSearchSideBar="showSearchSideBar = true" />
      <!-- sidebar menu -->
      <transition name="slide-left">
        <SideBarMobile v-if="showSideBar" @closeSideBar="showSideBar = false" />
      </transition>
      <!-- sidebar search -->
      <transition name="slide-right">
        <SearchSideBarMobile v-if="showSearchSideBar" @closeSideBar="showSearchSideBar = false" />
      </transition>
    </div>
    <nuxt />
    <Footer />
    <ScrollTop />
  </div>
</template>
<script>
import NaviDesktop from "@/components/NaviDesktop/NaviDesktop";
import NaviMobile from "@/components/NaviMobile/NaviMobile";
import SideBarMobile from "@/components/SidebarMobile/SideBarMobile.vue";
import SearchSideBarMobile from "@/components/SidebarMobile/SearchSideBarMobile.vue";
import Footer from "@/components/Footer/Footer.vue";
import ScrollTop from "@/components/ScrollTop/ScrollTop";

export default {
  components: {
    Footer,
    NaviDesktop,
    NaviMobile,
    SideBarMobile,
    SearchSideBarMobile,
    ScrollTop
  },
  data() {
    return {
      showSearchSideBar: false,
      showSideBar: false
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://kit.fontawesome.com/a767a8054c.js",
          crossorigin: "anonymous"
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Gelasio:wght@400;700&family=Source+Sans+Pro:wght@200&display=swap",
          rel: "stylesheet"
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap",
          rel: "stylesheet"
        },

        {
          link:
            "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  }
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
