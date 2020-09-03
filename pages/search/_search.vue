<template>
  <div>
    <AdsBlock class="mt-10" />

    <SearchBlock class="mt-5" />

    <MainBlock class="mt-10" />
  </div>
</template>

<script>
// components

import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";
import SearchBlock from "../../components/Search/SearchBlock.vue";

export default {
  components: {
    AdsBlock,
    MainBlock,
    SearchBlock,
  },
};
</script>

<style>
</style>