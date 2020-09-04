<template>
  <div class="xs:hidden">
    <transition name="fade-slide">
      <MenuBarDesktop v-if="showMenu" :menuTags="menuTags" />
    </transition>
    <SubNavi />
    <NaviInfo />
    <TagBar class="mt-8" :menuTags="categories ? categoriesDefault : menuTags" />
  </div>
</template>

<script>
// libs
import { mapState } from "vuex";

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
        { name: "Trang chủ", to: "/" },
        { name: "Thời sự", to: "/category/thoi-su" },
        { name: "Nông nghiệp", to: "/category/thoi-su" },
        { name: "Thị Trường-Tài Chính", to: "/category/thoi-su" },
        { name: "Cà phê khuyến nông", to: "/category/thoi-su" },
        { name: "Kho chuyện", to: "/category/thoi-su" },
        { name: "Sống xanh", to: "/category/thoi-su" },
        { name: "Tư vấn", to: "/category/thoi-su" },
        { name: "Thế giới", to: "/category/thoi-su" },
      ],
    };
  },
  components: {
    SubNavi,
    NaviInfo,
    TagBar,
    MenuBarDesktop,
  },
  computed: {
    ...mapState(["categories"]),

    categoriesDefault() {
      return this.categories.filter((category) => !category.parent_id);
    },
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
    },
  },

  created() {
    console.log(this.categoriesDefault, "default");
  },
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