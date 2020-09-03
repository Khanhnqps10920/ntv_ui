<template>
  <div>
    <AdsBlock class="mt-10" />

    <AuthorBlock class="mt-5" />

    <MainBlock class="mt-10" />
  </div>
</template>

<script>
// components

import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";
import AuthorBlock from "../../components/AuthorPage/AuthorBlock.vue";
export default {
  components: {
    AdsBlock,
    MainBlock,
    AuthorBlock,
  },
};
</script>

<style>
</style>