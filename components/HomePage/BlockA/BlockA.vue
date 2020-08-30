<template>
  <Container1440>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6 xs:col-span-12 bg-yellow-300" style="height: 500px">Tin chính</div>
      <div class="col-span-6 xs:col-span-12 grid grid-cols-12 gap-4">
        <div class="col-span-6 xs:col-span-12 bg-yellow-300" style="height: 500px">Tin còn lại</div>
        <div class="col-span-6 xs:col-span-12 bg-blue-300" style="height: 500px">Tin nhanh, quảng cáo, cafe khuyến nông</div>
      </div>
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
</style>