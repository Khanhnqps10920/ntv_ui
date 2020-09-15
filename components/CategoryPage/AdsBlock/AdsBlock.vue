<template>
  <div class="ads-block">
    <div class="ads-block__item">
      <span class="ads-block__item-title">- Advertisement -</span>

      <a href="#" class="ads-block__img">
        <img
          src="https://demo.tagdiv.com/newspaper_pulses_pro/wp-content/uploads/2019/12/corhaz-3.jpg"
          alt="ads"
        />
      </a>
    </div>
  </div>
</template>

<script>
import AdsSide from "../../Advertisement/AdsSide.vue";

export default {
  components: {
    AdsSide,
  },
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
</style>