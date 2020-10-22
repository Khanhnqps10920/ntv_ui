<template>
  <div class="w-full h-full">
    <img @click="handleAdsClick" v-if="ads.typeMedia === 'image'" :src="ads.media" :alt="ads.title" class="cursor-pointer w-full h-full object-cover" />

    <video  width="100%" height="100%" v-if="ads.typeMedia === 'video'" controls playsinline autoplay muted loop>
      <source :src="ads.media" type="video/mp4" >
    </video>
  </div>
 
</template>

<script>
export default {
  props: {
    ads: {
      type: Object,
      default: () => ({})
    }
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