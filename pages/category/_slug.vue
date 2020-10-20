<template>
  <div>
    <AdsBlock class="mt-10" :ads="adsA" />

    <CategoryBlock
      class="mt-5"
      v-if="category"
      :cateName="category.name"
      :subCates="category.subCates"
      id="content"
    />

    <MainBlock
      @changePage="changePage"
      class="mt-10"
      :posts="posts"
      :totalNews="total"
      :limit="limit"
      :ads="adsB"
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
      limit: 10, //news per page
      posts: [],
      category: null,
      total: 0,
      ads: []
    };
  },

  computed: {
    adsA() {
      return this.ads.find(e => e.section === "CateAds1");
    },
    adsB() {
      return this.ads.find(e => e.section === "CateAds2");
    }
  },
  async mounted() {
    const id = this.$route.params.slug.slice(
      this.$route.params.slug.indexOf("=") + 1
    );
    const data = await this.$store.dispatch("getNewsInCategoryPage", {
      urlQuery: { categoryId: id, skip: this.skip, limit: this.limit }
    });
    this.posts = data.data.result;
    this.total = data.data.total;

    const categoryData = await this.$store.dispatch("getDetailCategory", {
      id
    });

    this.category = { ...categoryData.data.result };

    await this.$store.dispatch("getAds", {
      page: "catePage",

      nextActions: res => {
        this.ads = [...res.result];
      }
    });
  },

  methods: {
    async changePage(p) {
      this.skip = this.limit * (p - 1);
      const id = this.$route.params.slug.slice(
        this.$route.params.slug.indexOf("=") + 1
      );
      const data = await this.$store.dispatch("getNewsInCategoryPage", {
        urlQuery: { categoryId: id, skip: this.skip, limit: this.limit }
      });
      this.posts = data.data.result;
      // this.meta = data.data.meta;
      this.total = data.data.total;
      if (window.pageYOffset > 0) {
        let elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
      }
    }
  },
  head() {
    return {
      titleTemplate: this.meta ? this.meta.category.name : "Nông nghiệp 365",
      title: this.meta ? this.meta.category.name : "Nông nghiệp 365"
    };
  }
};
</script>


<style>
</style>