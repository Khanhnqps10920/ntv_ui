<template>
  <div>
    <BlockA class="mt-10" :News="TopNews" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" :News="NewsBlockB" />
    <BlockC class="mt-10" :News="NewsBlockC" />
    <AdsHomeMiddle />
    <BlockB class="mt-10" :News="NewsBlockB" />
    <AdsHomeMiddle />
    <BlockC class="mt-10" :News="NewsBlockC" />
    <AdsHomeBottom />
  </div>
</template>

<script>
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import BlockC from "@/components/HomePage/BlockC/BlockC.vue";
import AdsHomeMiddle from "@/components/Advertisement/AdsHomeMiddle";
import AdsHomeBottom from "@/components/Advertisement/AdsHomeBottom";

// import axios from "axios";
export default {
  components: {
    BlockA,
    SocialBlock,
    BlockB,
    BlockC,
    AdsHomeMiddle,
    AdsHomeBottom
  },
  async asyncData(context) {
    // get TopNewsInHomepage
    let TopNews = [];
    let NewsBlockB = [];
    let NewsBlockC = [];
    await context.store.dispatch("getTopNewsInHomepage", {
      nextActions: res => {
        TopNews = [...res.result];
      }
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockB  = [...res.result]
      } //change ID follow admin for Block B
    });
    await context.store.dispatch("getLatestNewsCategory", {
      urlQuery: {
        categoryId: "5f5aee09e6caa34e9b9c774f" //to do
      },
      nextActions: res => {
        NewsBlockC = [...res.result]
      }
      //change ID follow admin for Block C
    });
    return {
      TopNews,
      NewsBlockB,
      NewsBlockC
    }
  }
};
</script>

<style></style>
