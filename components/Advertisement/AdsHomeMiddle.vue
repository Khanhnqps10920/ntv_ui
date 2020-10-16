<template>
  <Container1440 class="my-12">
    <div class="w-full h-48">
      <img @click="handleAdsClick" v-if="ads.typeMedia === 'image'" :src="ads.media" :alt="ads.title" class="cursor-pointer w-full h-full object-cover" />

      <video  v-if="ads.typeMedia === 'video'" controls autoplay muted>
       <source :src="ads.media" type="video/mp4" >
      </video>
    </div>
  </Container1440>
</template>

<script>
import Container1440 from "@/components/containers/Container1440";

export default {
  components: {
    Container1440,
  },
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
video {
  object-fit: cover;
  width: 100%;
}
</style>