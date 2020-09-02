<template>
  <div class="xs:hidden">
    <transition name="fade-slide">
      <MenuBarDesktop v-if="showMenu" :menuTags="menuTags" />
    </transition>
    <SubNavi />
    <NaviInfo />
    <TagBar class="mt-8" :menuTags="menuTags"/>
  </div>
</template>

<script>
const OFFSET = 240;
import SubNavi from "@/components/NaviDesktop/SubNavi";
import NaviInfo from "@/components/NaviDesktop/NaviInfo";
import TagBar from "@/components/NaviDesktop/TagBar";
import MenuBarDesktop from "@/components/NaviDesktop/MenuBarDesktop";
export default {
  data() {
    return {
      showMenu: false,
      menuTags: [
        { name: "Trang chủ" },
        { name: "Thời sự" },
        { name: "Nông nghiệp" },
        { name: "Thị Trường - Tài Chính" },
        { name: "Cà phê khuyến nông" },
        { name: "Kho chuyện" },
        { name: "Sống xanh" },
        { name: "Tư vấn" },
        { name: "Thế giới" }
      ]
    };
  },
  components: {
    SubNavi,
    NaviInfo,
    TagBar,
    MenuBarDesktop
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < OFFSET) {
        this.showMenu = false;
      }
      if (window.pageYOffset > OFFSET) {
        this.showMenu = true;
      }
    }
  }
};
</script>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s;
  top: 0px;
}
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  top: -100px;
}
</style>