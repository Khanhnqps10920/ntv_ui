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
      <div class="title-bar bg-purple-700">
        <Container1440>
          <h1 class="text-white text-4xl font-extrabold">MUST READ</h1>
          <p
            class="text-white mt-4"
          >Everything you need to know about the re-reboot of your favourite childhood flick.</p>
        </Container1440>
      </div>
    </div>

    <Container1440 class="wrapper1440">
      <div class="grid grid-cols-12 gap-4">
        <!--Main News-->
        <div class="xs:col-span-12 col-span-5">
          <div class="bg-blue-300 main-new" style="height : 500px;">Main New</div>
        </div>
        <!--Rest News-->
        <div class="xs:col-span-12 col-span-7 rest-new">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6">
              <BlockItem />
            </div>
            <div class="col-span-6">
              <BlockItem />
            </div>
            <div class="col-span-6">
              <BlockItem />
            </div>
            <div class="col-span-6">
              <BlockItem />
            </div>
          </div>
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
.wrapper1440 {
  padding-left: 0px;
  padding-right: 0px;
}
@media (max-width: 767px) {
  .lastest {
    top: -20px;
    z-index: -1;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .main-new {
    margin-top: -70px;
  }
  .title-bar {
    height: 200px;
    max-height: 200px;
    padding-top: 50px;
    padding-bottom: 75px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .rest-new {
    margin-top: -50px;
  }
  .main-new {
    margin-top: -50px;
  }
  .wrapper1440 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .title-bar {
    height: 130px;
    max-height: 130px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .title-bar {
    height: 160px;
    max-height: 160px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (min-width: 1141px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
  /* .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  } */
  .title-bar {
    height: 160px;
    max-height: 160px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
</style>
