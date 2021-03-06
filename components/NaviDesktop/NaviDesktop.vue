<template>
  <div class="xs:hidden">
    <transition name="fade-slide">
      <MenuBarDesktop v-if="showMenu" :menuTags="categories" />
    </transition>
    <SubNavi @resetPassword="handleResetPassword" />
    <NaviInfo />
    <div @mouseleave="toggleHoverModal = false" class="relative">
      <TagBar
        class="mt-8"
        :menuTags="categories"
        @onHover="onHover"
        @onLeaveHovered="toggleHoverModal = false"
      />
      <HoverModal
        v-if="toggleHoverModal"
        :subs="subs"
        :currentPosts="currentPosts"
        @hoverSub="hoverSub"
        class="absolute z-20"
        @next="next"
        @prev="prev"
      />
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
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      toggleHoverModal: false,
      subs: "",
      allPosts: [],
      n: 4
    };
  },
  computed: {
    currentPosts() {
      if (this.allPosts.length) {
        return this.allPosts.slice(this.n - 4, this.n);
      }
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
    next() {
      if (this.n < this.allPosts.length) {
        this.n += 4;
      }
    },
    prev() {
      if (this.n > 4) {
        this.n -= 4;
      }
    },
    async onHover(subs, id) {
      this.toggleHoverModal = true;
      this.subs = subs;
      await this.$store.dispatch("getTopHotNewsByCategory", {
        urlQuery: {
          categoryId: id,
          skip: 0,
          limit: 12
        },
        nextActions: res => {
          this.allPosts = res.result;
        },
        errorActions: res => {
          this.allPosts = res.result;
        }
      });
      this.n = 4;
    },
    async hoverSub(id) {
      await this.$store.dispatch("getTopHotNewsByCategory", {
        urlQuery: {
          categoryId: id,
          skip: 0,
          limit: 12
        },
        nextActions: res => {
          this.allPosts = res.result;
        }
      });
      this.n = 4;
    },
    onScroll() {
      if (window.pageYOffset < OFFSET) {
        this.showMenu = false;
      }
      if (window.pageYOffset > OFFSET) {
        this.showMenu = true;
      }
    },
    handleResetPassword() {
      this.$emit('resetPassword');
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