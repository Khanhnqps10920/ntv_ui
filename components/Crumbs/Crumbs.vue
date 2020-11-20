<template>
  <div class="hidden md:block lg:block xl:block 2xl:block mb-8 mt-0 mx-auto">
    <div class="flex">
      <div class="crumb mr-2">
        <nuxt-link to="/">Trang Chủ</nuxt-link>
        <i class="text-xs fas fa-chevron-right"></i>
      </div>
      <div class="crumb mr-2" v-for="(link, index) in links" :key="index">
        <nuxt-link :to="link.to">{{ link.name }}</nuxt-link>
        <i class="text-xs fas fa-chevron-right" v-if="!link.last"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scope>
.crumb a:hover {
  color: var(--hovercolor);
}

.crumb a {
  text-transform: capitalize;
}

.nuxt-link-exact-active {
  color: var(--maincolor);
}
</style>
