<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock class="mt-5" :cateName="cateName" />

    <MainBlock class="mt-10" :itemList="posts.result.posts" />
  </div>
</template>

<script>
import data from "@/assets/data/data.json";

import { mapGetters } from "vuex";

// components
import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import CategoryBlock from "../../components/CategoryPage/CategoryBlock/CategoryBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";

export default {
  components: {
    AdsBlock,
    CategoryBlock,
    MainBlock,
  },

  computed: {
    ...mapGetters(["getCategory"]),
    category() {
      return this.getCategory(this.$route.params.slug);
    },

    cateName() {
      return this.category ? this.category.name.toUpperCase() : "Category";
    },
  },
  data() {
    return {
      posts: [],
    };
  },

  created() {
    // posts
    this.posts = data.postByCategories;
  },
};
</script>


<style>
</style>