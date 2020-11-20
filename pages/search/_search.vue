<template>
  <div>
    <Crumbs class="container mt-8" :links="links" />
    <AdsBlock class="mt-10" :ads="adsA" />

    <SearchBlock class="mt-5" id="content" />

    <MainBlock
      @changePage="changePage"
      class="mt-10"
      :posts="posts"
      :limit="limit"
      :totalNews="total"
      :ads="adsB"
    />
  </div>
</template>

<script>
// components

import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";
import SearchBlock from "../../components/Search/SearchBlock.vue";
import { postByCategories } from "@/assets/data/data.json";
import Crumbs from "../../components/Crumbs/Crumbs.vue";

export default {
  components: {
    AdsBlock,
    MainBlock,
    SearchBlock,
    Crumbs,
  },
  data() {
    return {
      skip: 0,
      limit: 10, //news per page
      posts: [],
      total: 0,
      ads: [],
      links: [],
    };
  },

  methods: {
    async changePage(p) {
      const keyword = this.$route.params.search;

      this.skip = this.limit * (p - 1);
      const data = await this.$store.dispatch("searchPosts", {
        urlQuery: {
          keyword,
          skip: this.skip,
          limit: this.limit,
        },
      });
      this.posts = data.data.result;
      // this.meta = data.data.meta;
      this.total = data.data.total;
      if (window.pageYOffset > 0) {
        let elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
      }
    },
  },

  computed: {
    adsA() {
      return this.ads ? this.ads.find((e) => e.section === "CateAds1") : {};
    },
    adsB() {
      return this.ads ? this.ads.find((e) => e.section === "CateAds2") : {};
    },
  },

  async mounted() {
    const keyword = this.$route.params.search;

    await this.$store.dispatch("searchPosts", {
      urlQuery: {
        keyword,
        skip: this.skip,
        limit: this.limit,
      },
      nextActions: (res) => {
        this.posts = [...res.result];
        this.total = res.totalNews;
      },
      errorActions: (e) => {},
    });

    await this.$store.dispatch("getAds", {
      page: "catePage",

      nextActions: (res) => {
        this.ads = [...res.result];
      },
    });
    this.links = [
      {
        name: "Tìm Kiếm",
        to: this.$route.path,
        last: true,
      },
    ];
  },
};
</script>

<style>
</style>