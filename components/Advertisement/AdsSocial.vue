<template>
  <img @click="handleAdsClick" v-if="ads.typeMedia === 'image'" :src="ads.media" :alt="ads.title" class="cursor-pointer w-full h-full" />
</template>

<script>
export default {
  props: {
    ads: {
      type: Object,
      default: () => ({})
    }
  },

  created() {
    console.log('ads nè', this.ads)
  },
  methods: {
    handleAdsClick() {
      window.location.href = this.ads.link;
    }
  }
}
</script>

<style>

</style>