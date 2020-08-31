<template>
  <Container1640 style="padding-left: 0px; padding-right : 0px;">
    <!--Mobile Title-->
    <div class="hidden xs:block">
      <h4 class="mb-4 mt-6 relative h-12">
        <span class="font-extrabold text-2xl text-purple-600 ml-4">Politics</span>
        <div class="text-6xl absolute uppercase whitespace-no-wrap text-gray-300 lastest">Lastest</div>
      </h4>
    </div>
    <!--Desktop Title-->
    <div class="xs:hidden mb-6">
      <div class="title-bar bg-purple-700">
        <Container1440>
          <h1 class="text-white text-5xl">MUST READ</h1>
          <span>Everything you need to know about the re-reboot of your favourite childhood flick.</span>
        </Container1440>
      </div>
    </div>
    <!--New-->
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12"></div>
    </div>
    <div></div>
  </Container1640>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import Container1440 from "@/components/containers/Container1440";
export default {
  components: {
    Container1640,
    Container1440
  }
};
</script>
<style scoped>
@media (max-width: 767px) {
  .lastest {
    top: -20px;
    z-index: -1;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .title-bar {
    height: 130px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .title-bar {
    height: 160px;
  }
}
@media (min-width: 1141px) {
  .title-bar {
    height: 160px;
  }
}
</style>
