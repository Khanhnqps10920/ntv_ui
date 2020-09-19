<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock class="mt-5" :cateName="cateName" />

    <MainBlock class="mt-10" />
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
  async asyncData(context) {
    const id = context.route.params.slug.slice(
      context.route.params.slug.indexOf("=") + 1
    );
  },
  data() {
    return {};
  },
};
</script>


<style>
</style>