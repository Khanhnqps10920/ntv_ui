<template>
  <div class="my-12">
    <div class="w-full h-56">

      <img @click="handleAdsClick" v-if="ads.typeMedia === 'image'"  class="cursor-pointer w-full h-full object-cover" :src="ads.media" :alt="ads.title"  />

      <video v-if="ads.typeMedia === 'video'" controls autoplay muted loop>
        <source :src="ads.media" type="video/mp4" >
      </video>

    </div>
  </div>
</template>

<script>

export default {
 
  props: {
    ads: {
      type:Object,
      default: () => ({})
    }
  },

  methods: {
    handleAdsClick() {
      window.location.href = this.ads.link;
    }
  }
};

</script>

<style scoped>
img {
  object-fit: cover;
  object-position: center;
}

video {
  object-fit: cover;
  width: 100%;
}
</style>