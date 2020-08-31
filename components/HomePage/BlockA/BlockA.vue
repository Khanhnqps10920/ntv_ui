<template>
  <Container1440>
    <div class="flex xs:block">
      <div class="grid grid-cols-12 gap-4 flex-grow">
        <div class="col-span-8 xs:col-span-12 bg-yellow-300" style="height: 500px">Tin chính</div>
        <div class="col-span-4 xs:col-span-12 bg-yellow-300" style="height: 500px">Tin còn lại</div>
      </div>
      <div class="bg-blue-300 blocka-right">Tin Nhanh, Quảng cáo, Cafe khuyến nông</div>
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
.blocka-right {
  width: auto;
  height: 500px;
}
@media (max-width: 767px) {
  .blocka-right {
    margin-top: 16px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .blocka-right {
    width: 200px;
    margin-left: 16px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .blocka-right {
    width: 250px;
    margin-left: 16px;
  }
}
@media (min-width: 1141px) {
  .blocka-right {
    width: 300px;
    margin-left: 16px;
  }
}
</style>