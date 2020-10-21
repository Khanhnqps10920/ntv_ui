<template>
  <div class="ads-block">
    <div class="ads-block__item">
      <span class="ads-block__item-title">- {{ads.title}} -</span>

      <div class="w-full h-32">
  
        <img class="cursor-pointer w-full h-full object-cover" @click="handleAdsClick" v-if="ads.typeMedia === 'image'" :src="ads.media" :alt="ads.title"  />

        <video v-if="ads.typeMedia === 'video'" controls autoplay muted loop>
          <source :src="ads.media" type="video/mp4" >
        </video>

      </div>
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
.ads-block {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.ads-block::before {
  position: absolute;

  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;

  background: url("https://demo.tagdiv.com/newspaper_pulses_pro/wp-content/uploads/2020/01/xxx_bg_dots_xxx.jpg");
  background-position: top center;
  background-color: rgba(0, 0, 0, 0.5);
}

.ads-block .ads-block__item {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  padding-right: 24px;
  padding-left: 24px;
}

.ads-block .ads-block__item-title {
  color: #bbb;
  font-size: 10px;
  text-align: center;
  display: block;
  line-height: 21px;
}

.ads-block .ads-block__img {
  width: 100%;
}

.ads-block .ads-block__img img {
  width: 100%;
}

 img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

 video {  
  object-fit: cover;
  width: 100%;
  max-height: 200px;
}
</style>