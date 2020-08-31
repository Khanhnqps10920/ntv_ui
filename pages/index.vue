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
      <SideBarMobile v-if="showSideBar" @closeSideBar="showSideBar = false" />
      <!-- sidebar search -->
      <SearchSideBarMobile v-if="showSearchSideBar" @closeSideBar="showSearchSideBar = false" />
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
/* test code */
</style>
