<template>
  <div>
    <BlockA class="mt-10" :posts="blockANews" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" :posts="blockBNews"/>
    <BlockC class="mt-10" />
    <AdsHomeMiddle />
    <BlockB class="mt-10" />
    <AdsHomeMiddle />
    <BlockC class="mt-10" />
    <AdsHomeBottom />
  </div>
</template>

<script>
// import data from "../assets/data/data.json";

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
    const data = await context.store.dispatch("getMainNew");
    const post = data.data.result;
    const temp = await context.store.dispatch("getDataHomePage")
    const postOnHomePage = temp.data.result
    const blockANews = postOnHomePage.slice(0, 4);
    const blockBNews = postOnHomePage.slice(4);
    context.store.commit('setPostMenuDesktop', postOnHomePage)
    return {
      post,
      blockANews,
      blockBNews
    };
  }
};
</script>

<style></style>
