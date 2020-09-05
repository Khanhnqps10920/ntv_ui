<template>
  <div>
    <AdsBlock class="mt-10" />

    <CategoryBlock class="mt-5" :cateName="cateName" />

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
  },
  computed: {
    cateName() {
      switch (this.$route.params.slug) {
        case "thoi-su":
          return "Thời sự";
          break;
        case "nong-nghiep":
          return "Nông nghiệp";
          break;
        case "thi-truong-tai-chinh":
          return "Thị trường tài chính";
          break;
        case "ca-phe-khuyen-nong":
          return "Cà phê khuyến nông";
          break;
        case "kho-chuyen":
          return "Kho chuyện";
          break;
        case "song-xanh":
          return "Sống xanh";
          break;
        case "tu-van":
          return "Tư vấn";
          break;
        case "the-gioi":
          return "Thế giới";
          break;
        default:
          return "";
      }
    }
  }
};
</script>
 { name: "Trang chủ", to: "/" },
        { name: "Thời sự", to: "/category/thoi-su" },
        { name: "Nông nghiệp", to: "/category/nong-nghiep" },
        { name: "Thị Trường-Tài Chính", to: "/category/thi-truong-tai-chinh" },
        { name: "Cà phê khuyến nông", to: "/category/ca-phe-khuyen-nong" },
        { name: "Kho chuyện", to: "/category/kho-chuyen" },
        { name: "Sống xanh", to: "/category/song-xanh" },
        { name: "Tư vấn", to: "/category/tu-van" },
        { name: "Thế giới", to: "/category/the-gioi" },

<style>
</style>