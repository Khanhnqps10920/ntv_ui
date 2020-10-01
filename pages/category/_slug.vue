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
      :TinMoiNhat="TinMoiNhat"
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
    MainBlock,
  },
  data() {
    return {
      skip: 0,
      limit: 10, //news per page
      posts: "",
      meta: "",
      total: "",
    };
  },
  async asyncData(context) {
    let TinMoiNhat = [];
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f", //to do
      },
      nextActions: (res) => {
        TinMoiNhat = [...res.result];
      },
      //change ID follow admin for BlockAThiTruongTaiChinh
    });
    return {
      TinMoiNhat,
    };
  },
  async mounted() {
    const id = this.$route.params.slug.slice(
      this.$route.params.slug.indexOf("=") + 1
    );
    const data = await this.$store.dispatch("getNewsInCategoryPage", {
      id: id,
      urlQuery: { skip: this.skip, limit: this.limit },
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
        urlQuery: { skip: this.skip, limit: this.limit },
      });
      this.posts = data.data.result;
      this.meta = data.data.meta;
      this.total = data.data.total;
    },
  },
  head() {
    return {
      titleTemplate: this.meta ? this.meta.category.name : "Nông nghiệp 365",
      title: this.meta ? this.meta.category.name : "Nông nghiệp 365",
    };
  },
};
</script>


<style>
</style>