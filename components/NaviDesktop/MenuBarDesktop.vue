<template>
  <div class="relative z-10">
    <div
      class="w-full fixed top-0 left-0 bg-white shadow"
      style="opacity: 95%"
      @mouseleave="toggleHoverModal = false"
    >
      <Container1640>
        <div class="flex sm:flex-wrap items-center text-black h-16">
          <!-- <Logo /> -->
          <div>
            <!-- <nuxt-link
              to="/"
              class="logo block mt-1 md:text-2xl lg:text-2xl uppercase mr-5"
            >{{webname}}</nuxt-link>-->
            <nuxt-link
              to="/"
              class="logo block mt-1 md:text-2xl lg:text-2xl uppercase mr-5"
            >Nông Nghiệp 365</nuxt-link>
          </div>
          <div class="flex flex-wrap items-center">
            <nuxt-link
              :to="`/category/${tag.alias}-id=${tag.id}`"
              v-for="(tag, i) in menuTags"
              :key="i"
              class="mr-5 sm:mr-3 mt-1 mb-1 font-bold sm:text-xs md:text-xs lg:text-sm hover:text-hovercolor"
            >
              <span @mouseover="onHoverTag(tag.subCates, tag.id)">
                {{ tag.name }}
                <span v-if="tag.subCates.length">
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
      toggleHoverModal: false,
      allPosts: [],
      n: 4
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
    currentPosts() {
      return this.allPosts.slice(this.n - 4, this.n);
    },
    webname() {
      return process.env.Webname;
    }
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
    async onHoverTag(subs, id) {
      if (subs && subs.length) {
        this.subs = subs;
        this.toggleHoverModal = true;
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
      } else {
        this.toggleHoverModal = false;
      }
    }
  }
};
</script>

<style>
</style>