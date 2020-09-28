<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock
      class="mt-5"
      v-if="meta"
      :cateName="meta.category.name"
      :subCates="meta.category.subCates"
    />

    <MainBlock
      @changePage="changePage"
      class="mt-10"
      v-if="posts.length"
      :posts="posts"
      :totalNews="total"
      :limit="limit"
    />
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
    MainBlock
  },
  data() {
    return {
      skip: 0,
      limit: 1, //news per page
      posts: "",
      meta: "",
      total: ""
    };
  },
  async mounted() {
    const id = this.$route.params.slug.slice(
      this.$route.params.slug.indexOf("=") + 1
    );
    const data = await this.$store.dispatch("getNewsInCategoryPage", {
      id: id,
      urlQuery: { skip: this.skip, limit: this.limit }
    });
    this.posts = data.data.result;
    this.meta = data.data.meta;
    this.total = data.data.total;
  },
  methods: {
    async changePage(p) {
      this.skip = this.limit * (p - 1);
      const id = this.$route.params.slug.slice(
        this.$route.params.slug.indexOf("=") + 1
      );
      const data = await this.$store.dispatch("getNewsInCategoryPage", {
        id: id,
        urlQuery: { skip: this.skip, limit: this.limit }
      });
      this.posts = data.data.result;
      this.meta = data.data.meta;
      this.total = data.data.total;
    }
  }
};
</script>


<style>
</style>