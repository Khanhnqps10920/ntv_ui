<template>
  <div>
    <Crumbs class="container mt-8" :links="links" />
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
import Crumbs from "../../components/Crumbs/Crumbs.vue";

export default {
  components: {
    AdsBlock,
    CategoryBlock,
    MainBlock,
    Crumbs,
  },
  data() {
    return {
      skip: 0,
      limit: 10, //news per page,
    };
  },

  computed: {
    adsA() {
      return this.ads ? this.ads.find((e) => e.section === "CateAds1") : {};
    },
    adsB() {
      return this.ads ? this.ads.find((e) => e.section === "CateAds2") : {};
    },
  },
  async asyncData(context) {
    const id = context.route.params.slug.slice(
      context.route.params.slug.indexOf("=") + 1
    );
    const data = await context.store.dispatch("getNewsInCategoryPage", {
      urlQuery: { categoryId: id, skip: context.skip, limit: context.limit },
    });
    const posts = data.data.result;
    const total = data.data.total;

    const categoryData = await context.store.dispatch("getDetailCategory", {
      id,
    });

    const category = { ...categoryData.data.result };

    // link
    const links = [
      {
        name: category.name,
        to: context.route.path,
        last: true,
      },
    ];

    let ads;
    await context.store.dispatch("getAds", {
      page: "catePage",

      nextActions: (res) => {
        ads = [...res.result];
      },
    });
    return {
      posts,
      category,
      total,
      ads,
      links,
    };
  },

  methods: {
    async changePage(p) {
      this.skip = this.limit * (p - 1);
      const id = this.$route.params.slug.slice(
        this.$route.params.slug.indexOf("=") + 1
      );
      const data = await this.$store.dispatch("getNewsInCategoryPage", {
        urlQuery: { categoryId: id, skip: this.skip, limit: this.limit },
      });
      this.posts = data.data.result;
      // this.meta = data.data.meta;
      this.total = data.data.total;
      if (window.pageYOffset > 0) {
        let elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
      }
    },
  },

  created() {
    console.log(this.$route);
  },
  head() {
    return {
      titleTemplate: this.category ? this.category.name : process.env.Webname,
      title: this.category ? this.category.name : process.env.Webname,
      meta: [
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: process.env.Webname,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: process.env.Webname,
        },
        {
          hid: "og:url",
          property: "og:url",
          name: "og:url",
          content: process.env.BASE_URL + this.$route.fullPath,
        },
        {
          hid: "og:type",
          property: "og:type",
          name: "og:type",
          content: "article",
        },
        {
          hid: "og:title",
          property: "og:title",
          name: "og:title",
          content: this.category.name,
        },
        {
          hid: "description",
          property: "description",
          name: "description",
          content: this.category.name,
        },
        {
          hid: "og:description",
          property: "og:description",
          name: "og:description",
          content: this.category.name,
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: this.category.name,
        },
      ],
    };
  },
};
</script>

<style></style>
