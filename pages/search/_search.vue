<template>
  <div>
    <AdsBlock class="mt-10" />

    <SearchBlock class="mt-5" />

    <MainBlock class="mt-10" :itemList="postByCategories.result.posts" />
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
    SearchBlock
  },
  asyncData() {
    return {
      postByCategories
    };
  }
};
</script>

<style>
</style>