<template>
  <div>
    <div class="xs:hidden">
      <SubNavi />
      <NaviInfo />
      <TagBar class="mt-8" />
    </div>
    <div class="sm:hidden md:hidden lg:hidden">
      <!-- nav mobile -->
      <NaviMobile :openSideBar="handleOpenSideBar" :openSearchSideBar="handleActiveSearchSideBar" />

      <!-- sidebar menu -->
      <SideBarMobile :isActive="sidebarActive" :closeSideBar="handleCloseSideBar" />

      <!-- sidebar search -->
      <SearchSideBarMobile :isActive="searchActive" :closeSideBar="handleActiveSearchSideBar" />
    </div>
  </div>
</template>

<script>
import SubNavi from "@/components/NaviDesktop/SubNavi";
import NaviInfo from "@/components/NaviDesktop/NaviInfo";
import TagBar from "@/components/NaviDesktop/TagBar";
import NaviMobile from "@/components/NaviMobile/NaviMobile";
import SideBarMobile from "@/components/SidebarMobile/SideBarMobile.vue";
import SearchSideBarMobile from "../components/SidebarMobile/SearchSideBarMobile.vue";

export default {
  components: {
    NaviInfo,
    SubNavi,
    TagBar,
    NaviMobile,
    SideBarMobile,
    SearchSideBarMobile,
  },

  data() {
    return {
      sidebarActive: false,
      searchActive: false,
    };
  },
  methods: {
    handleCloseSideBar() {
      this.sidebarActive = false;
    },

    handleOpenSideBar() {
      this.sidebarActive = true;
    },

    handleActiveSearchSideBar() {
      this.searchActive = !this.searchActive;
    },
  },
};
</script>

<style>
/* test code */
body {
  height: 2000px;
}
</style>
