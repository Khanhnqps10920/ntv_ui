<template>
  <div>
    <div class="xs:hidden">
      <SubNavi />
      <NaviInfo />
      <TagBar class="mt-8" />
    </div>
    <div class="sm:hidden md:hidden lg:hidden">
      <NaviMobile />
    </div>
    <BlockA class="mt-10" />
    <SocialBlock class="mt-10" />
    <BlockB class="mt-10" />
  </div>
</template>

<script>
import SubNavi from "@/components/NaviDesktop/SubNavi";
import NaviInfo from "@/components/NaviDesktop/NaviInfo";
import TagBar from "@/components/NaviDesktop/TagBar";
import NaviMobile from "@/components/NaviMobile/NaviMobile";
import BlockA from "@/components/HomePage/BlockA/BlockA";
import SocialBlock from "@/components/HomePage/SocialBlock/SocialBlock";
import BlockB from "@/components/HomePage/BlockB/BlockB";

export default {
  components: {
    NaviInfo,
    SubNavi,
    TagBar,
    NaviMobile,
    BlockA,
    SocialBlock,
    BlockB
  }
};
</script>
