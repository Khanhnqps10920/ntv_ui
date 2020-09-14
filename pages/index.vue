<template>
  <div>
    <BlockA class="mt-10" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" />
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
    AdsHomeBottom,
  },

  data() {
    return {};
  },

  async created() {},

  // async asyncData(context) {
  //   await context.store.dispatch("getPostInCategory", {
  //     urlQuery: { a: 1, b: 2, c: 3 },
  //     nextActions: res => {
  //       console.log(res);
  //     },
  //     errorActions: err => {
  //       console.log(err);
  //     }
  //   });
  // }

  // test api
};
</script>

<style></style>
