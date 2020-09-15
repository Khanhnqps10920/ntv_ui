<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock class="mt-5" :cateName="postByCategories.category" />

    <MainBlock class="mt-10" :itemList="postByCategories.result.posts" />
  </div>
</template>

<script>
import data from "@/assets/data/data.json";

import { mapGetters } from "vuex";

// components
import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import CategoryBlock from "../../components/CategoryPage/CategoryBlock/CategoryBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";
import { postByCategories } from "@/assets/data/data.json";

export default {
  components: {
    AdsBlock,
    CategoryBlock,
    MainBlock
  },
  asyncData() {
    return {
      postByCategories
    };
  },
  computed: {
    cateName() {
      return this.category ? this.category.name.toUpperCase() : "Category";
    }
  },
  data() {
    return {};
  }
};
</script>


<style>
</style>