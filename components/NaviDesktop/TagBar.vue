<template>
  <div
    class="h-16 border-gray-200 border-t-2 border-b-2 border-solid flex justify-center items-center"
  >
    <div
      v-for="(tag, i) in menuTags"
      :key="i"
      class="tag uppercase px-3 sm:px-2 font-bold sm:text-xs md:text-sm lg:text-md font-sans"
    >{{tag.name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTags: [
        { name: "Trang chủ" },
        { name: "Thời sự" },
        { name: "Nông nghiệp" },
        { name: "Thị Trường - Tài Chính" },
        { name: "Cà phê khuyến nông" },
        { name: "Kho chuyện" },
        { name: "Sống xanh" },
        { name: "Tư vấn" },
        { name: "Thế giới" }
      ]
    };
  }
};
</script>

<style scoped>
@media (max-width: 1018px) and (min-width: 768px) {
  .tag {
    font-size: 9px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .tag {
    font-size: 11px;
  }
}
@media (min-width: 1141px) {
  .tag {
    font-size: 12px;
  }
}
</style>