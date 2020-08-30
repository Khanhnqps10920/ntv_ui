<template>
  <Container1440>
    <div class="grid grid-cols-12 sm:grid-cols-10 gap-4">
      <div class="col-span-2 xs:col-span-12 sm:col-span-3 bg-blue-300" style="height: 300px">Sticky Box</div>
      <div class="col-span-7 xs:col-span-12 sm:col-span-4 bg-blue-300" style="hieght: 700px">Middle Block</div>
      <div class="col-span-3 xs:col-span-12 sm:col-span-3 bg-blue-300" style="height: 700px">Right Box</div>
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