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
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import BlockC from "@/components/HomePage/BlockC/BlockC.vue";
import AdsHomeMiddle from "@/components/Advertisement/AdsHomeMiddle";
import AdsHomeBottom from "@/components/Advertisement/AdsHomeBottom";
export default {
  components: {
    BlockA,
    SocialBlock,
    BlockB,
    BlockC,
    AdsHomeMiddle,
    AdsHomeBottom
  },

  data() {
    return {};
  },
  async asyncData(context) {
    await context.store.dispatch('getPostInCategory').then((res) => {
      console.log(res)
    })
  },
  // async mounted(){
  //   await this.$store.dispatch('getPostInCategory').then((res) => {
  //     console.log(res)
  //   })
  // }
};
</script>

<style>
</style>
