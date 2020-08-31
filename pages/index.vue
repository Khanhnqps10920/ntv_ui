<template>
  <div>
    <BlockA class="mt-10" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" />
    <BlockC class="mt-10" />
  </div>
</template>

<script>
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";
import BlockC from "@/components/HomePage/BlockC/BlockC.vue";

export default {
  components: {
    BlockA,
    SocialBlock,
    BlockB,
    BlockC
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
