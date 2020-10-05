<template>
  <div>
    <AdsBlock class="mt-10" />

    <SearchBlock class="mt-5" />

    <MainBlock
      class="mt-10"
      :TinMoiNhat="TinMoi"
      :posts="posts"
      :limit="limit"
    />
  </div>
</template>

<script>
// components

import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";
import SearchBlock from "../../components/Search/SearchBlock.vue";
import { postByCategories } from "@/assets/data/data.json";

export default {
  components: {
    AdsBlock,
    MainBlock,
    SearchBlock,
  },
  data() {
    return {
      skip: 0,
      limit: 10, //news per page
      posts: [],
      total: "",
    };
  },
  async asyncData(context) {
    let TinMoi = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f", //to do
      },
      nextActions: (res) => {
        TinMoi = [...res.result];
      },
      //change ID follow admin for BlockAThiTruongTaiChinh
    });
    return {
      TinMoi,
    };
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
      },
      errorActions: (e) => {
        console.log(e);
      },
    });
  },
};
</script>

<style>
</style>