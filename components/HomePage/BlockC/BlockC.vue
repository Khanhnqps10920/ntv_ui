<template>
  <Container1640 class="wrapper">
    <!--Mobile Title-->
    <!-- <div class="hidden xs:block">
      <h4 class="mb-4 mt-6 relative h-12">
        <span class="font-extrabold text-2xl text-purple-600 ml-4">Politics</span>
        <div class="text-6xl absolute uppercase whitespace-no-wrap text-gray-300 lastest">Lastest</div>
      </h4>
    </div>-->
    <!--Title-->
    <div class="mb-6">
      <div class="title-bar bg-purple-700 pt-12 pb-20">
        <Container1440>
          <h1 class="text-white text-4xl font-extrabold">MUST READ</h1>
          <p class="text-white mt-4">Everything you need to know about the re-reboot of your favourite childhood flick.</p>
        </Container1440>
      </div>
    </div>
    <!--Main News-->
    
    <!--Rest News Mobile-->
    <Container1440>
      <div class="grid grid-cols-12 gap-4">
        <div class="xs:col-span-6">
          <BlockItem />
        </div>
        <div class="xs:col-span-6">
          <BlockItem />
        </div>
        <div class="xs:col-span-6">
          <BlockItem />
        </div>
        <div class="xs:col-span-6">
          <BlockItem />
        </div>
      </div>
    </Container1440>
  </Container1640>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import Container1440 from "@/components/containers/Container1440";
import BlockItem from "@/components/BlockItem/BlockItem";
export default {
  components: {
    Container1640,
    Container1440,
    BlockItem
  }
};
</script>
<style scoped>
@media (max-width: 767px) {
  .lastest {
    top: -20px;
    z-index: -1;
  }
  .wrapper {
    padding-left : 0px;
    padding-right : 0px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  
}
@media (max-width: 1140px) and (min-width: 1019px) {
  
}
@media (min-width: 1141px) {
 
}
</style>
