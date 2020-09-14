<template>
  <div class="xs:hidden">
    <transition name="fade-slide">
      <MenuBarDesktop
        v-if="showMenu"
        :menuTags="categories"
        @onHover="onHover"
        @onLeaveHovered="toggleHoverModal = false"
      />
    </transition>
    <SubNavi />
    <NaviInfo />
    <div @mouseleave="toggleHoverModal = false" class="relative z-10">
      <TagBar
        class="mt-8"
        :menuTags="categories"
        @onHover="onHover"
        @onLeaveHovered="toggleHoverModal = false"
      />
      <HoverModal v-if="toggleHoverModal" :subs="subs" :currentPosts="currentPosts" class="absolute z-10" />
    </div>
  </div>
</template>

<script>
const OFFSET = 240;
import SubNavi from "@/components/NaviDesktop/SubNavi";
import NaviInfo from "@/components/NaviDesktop/NaviInfo";
import TagBar from "@/components/NaviDesktop/TagBar";
import MenuBarDesktop from "@/components/NaviDesktop/MenuBarDesktop";
import HoverModal from "@/components/NaviDesktop/HoverModal";
export default {
  data() {
    return {
      showMenu: false,
      toggleHoverModal: false,
      subs: "",
      currentPosts : []
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    }
  },
  components: {
    SubNavi,
    NaviInfo,
    TagBar,
    MenuBarDesktop,
    HoverModal
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
    onHover(subs, id) {
      this.toggleHoverModal = true;
      this.subs = subs;
      // find default posts follow cate
      const key = String(id)
      const defaultPosts = this.$store.getters.getDefaultPostOnMenu
      this.currentPosts = defaultPosts[key]
    },
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