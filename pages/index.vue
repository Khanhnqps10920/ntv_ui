<template>
  <div>
    <div class="xs:hidden">
      <SubNavi />
      <NaviInfo />
      <TagBar class="mt-8" />
    </div>
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
    <BlockA class="mt-10" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" />

    <Footer />
  </div>
</template>

<script>
// components
import SubNavi from "@/components/NaviDesktop/SubNavi";
import NaviInfo from "@/components/NaviDesktop/NaviInfo";
import TagBar from "@/components/NaviDesktop/TagBar";
import NaviMobile from "@/components/NaviMobile/NaviMobile";
import SideBarMobile from "@/components/SidebarMobile/SideBarMobile.vue";
import SearchSideBarMobile from "@/components/SidebarMobile/SearchSideBarMobile.vue";
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    NaviInfo,
    SubNavi,
    TagBar,
    NaviMobile,
    SideBarMobile,
    SearchSideBarMobile,
    BlockA,
    SocialBlock,
    BlockB,
    Footer
  },

  data() {
    return {
      showSearchSideBar: false,
      showSideBar: false
    };
  },
  methods: {}
};
</script>

<style>
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
