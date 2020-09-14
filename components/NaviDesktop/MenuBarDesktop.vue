<template>
  <div class="relative z-10">
    <div
      class="w-full fixed top-0 left-0 bg-white shadow"
      style="opacity : 95%"
      @mouseleave="toggleHoverModal = false"
    >
      <Container1640>
        <div class="flex sm:flex-wrap items-center text-black h-16">
          <!-- <Logo /> -->
          <div>
            <nuxt-link
              to="/"
              class="logo block md:text-2xl lg:text-2xl uppercase font-sans mr-5"
            >Nông Thôn Việt</nuxt-link>
          </div>
          <div class="flex">
            <nuxt-link
              to="/"
              v-for="(tag,i) in cateTags"
              :key="i"
              class="mr-5 sm:mr-3 font-bold sm:text-xs md:text-xs lg:text-sm hover:text-hovercolor"
            >
              <span @mouseover="onHoverTag(tag.subs)">
                {{tag.name}}
                <span v-if="tag.subs.length">
                  <i class="fas fa-angle-down"></i>
                </span>
              </span>
            </nuxt-link>
          </div>
        </div>
      </Container1640>
      <HoverModal v-if="toggleHoverModal" :subs="subs" class="absolute z-10" />
    </div>
  </div>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import HoverModal from "@/components/NaviDesktop/HoverModal";
export default {
  data() {
    return {
      subs: [],
      toggleHoverModal: false
    };
  },
  components: {
    Container1640,
    HoverModal
  },
  props: {
    menuTags: {
      type: Array,
      required: true
    }
  },
  computed: {
    cateTags() {
      return this.menuTags;
    }
  },
  methods: {
    onHoverTag(subs) {
      if (subs.length) {
        this.subs = subs;
        this.toggleHoverModal = true;
      } else {
        this.toggleHoverModal = false;
      }
    }
  }
};
</script>