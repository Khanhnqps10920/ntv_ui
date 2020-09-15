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
              :to="'/category/' + tag.alias"
              v-for="(tag,i) in cateTags"
              :key="i"
              class="mr-5 sm:mr-3 font-bold sm:text-xs md:text-xs lg:text-sm hover:text-hovercolor"
            >
              <span @mouseover="onHoverTag(tag.subs, tag.id)">
                {{tag.name}}
                <span v-if="tag.subs.length">
                  <i class="fas fa-angle-down"></i>
                </span>
              </span>
            </nuxt-link>
          </div>
        </div>
      </Container1640>
      <HoverModal
        v-if="toggleHoverModal"
        :subs="subs"
        :currentPosts="currentPosts"
        @hoverSub="hoverSub"
        class="absolute z-20"
        @next="next"
        @prev="prev"
      />
      <!-- <HoverModal
        v-if="toggleHoverModal"
        :subs="subs"
        :currentPosts="currentPosts"
        class="absolute z-10"
      />-->
    </div>
  </div>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import HoverModal from "@/components/NaviDesktop/HoverModal";
import { postByCategories } from "@/assets/data/data.json"; //fake data

export default {
  data() {
    return {
      subs: [],
      toggleHoverModal: false,
      allPosts: [],
      n: 4,
    };
  },
  components: {
    Container1640,
    HoverModal,
  },
  props: {
    menuTags: {
      type: Array,
      required: true,
    },
  },
  computed: {
    cateTags() {
      return this.menuTags;
    },
    currentPosts() {
      return this.allPosts.slice(this.n - 4, this.n);
    },
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
    hoverSub() {
      //dispatch call api post list theo cates
      this.allPosts = postByCategories.result.posts;
      this.n = 4;
    },
    onHoverTag(subs, id) {
      if (subs.length) {
        this.subs = subs;
        this.toggleHoverModal = true;
        this.allPosts = postByCategories.result.posts;
      } else {
        this.toggleHoverModal = false;
      }
    },
  },
};
</script>