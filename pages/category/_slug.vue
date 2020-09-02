<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock class="mt-5" />

    <MainBlock class="mt-10" />
  </div>
</template>

<script>
// components

import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import CategoryBlock from "../../components/CategoryPage/CategoryBlock/CategoryBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";

export default {
  components: {
    AdsBlock,
    CategoryBlock,
    MainBlock
  }
};
</script>

<style>
</style>