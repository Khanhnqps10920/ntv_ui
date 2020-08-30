<template>
  <Container1440>
    <div class="flex xs:block">
      <div class="bg-blue-300 blockb-left xs:static sticky top-fiftyfive">BlockB Left</div>
      <div class="flex-grow">
        <div class="bg-blue-300 mx-4 xs:mx-0 xs:mt-4" style="height : 2000px;">Middle BlockB</div>
      </div>
      <div class="bg-blue-300 blockb-right xs:mt-4">BlockB Right</div>
    </div>
  </Container1440>
</template>

<script>
import Container1440 from "@/components/containers/Container1440";
export default {
  components: {
    Container1440
  }
};
</script>

<style scoped>
.blockb-left {
  width: auto;
  height: 500px;
}
.blockb-right {
  width: auto;
  height: 2000px;
}
@media (max-width: 767px) {
  .blockb-left {
    margin-top: 16px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .blockb-left {
    width: 200px;
  }
  .blockb-right {
    width: 200px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .blockb-left {
    width: 230px;
  }
  .blockb-right {
    width: 290px;
  }
}
@media (min-width: 1141px) {
  .blockb-left {
    width: 250px;
  }
  .blockb-right {
    width: 340px;
  }
}
</style>