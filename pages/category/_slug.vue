<template>
  <div>
    <AdsBlock class="mt-10" />

<<<<<<< HEAD
    <CategoryBlock class="mt-5" :cateName="category" />
=======
    <CategoryBlock class="mt-5" :cateName="postByCategories.category" />
>>>>>>> dc88759805639e8f998663df73851591714a4114

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
<<<<<<< HEAD
    ...mapGetters(["getCategory"]),
    category() {
      return this.$route.params.slug.toUpperCase();
    },

=======
>>>>>>> dc88759805639e8f998663df73851591714a4114
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