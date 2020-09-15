<template>
  <div class="relative">
    <Container1640>
      <div class="flex mt-8 text-xs">
        <div class="flex-1 text-left self-center">
          <i class="fas fa-cloud-sun-rain"></i>
          <span class="font-bold">{{weatherCelsius}} &#186;C</span>
          <span>Việt Nam</span>

          <a href="https://goldprice.org/" target="_blank">
            <i class="fas fa-coins ml-5"></i>
          </a>
          <span
            class="font-bold"
          >Giá vàng: {{goldRates && goldRates.price ? goldRates.price : "$1,933.52"}}</span>
          <span></span>
        </div>

        <div class="flex-1 text-center">
          <Logo />
          <div class="text-sm mt-1">Thứ Tư, 16 tháng 9, 2020</div>
        </div>
        <div class="flex-1 text-right self-center">
          <nuxt-link to class="hover:text-hovercolor">
            <i class="fab fa-facebook-f mr-3"></i>
          </nuxt-link>
          <nuxt-link to class="hover:text-hovercolor">
            <i class="fab fa-twitter mr-3"></i>
          </nuxt-link>
          <nuxt-link to class="hover:text-hovercolor">
            <i class="fab fa-youtube mr-3"></i>
          </nuxt-link>
          <nuxt-link to class="hover:text-hovercolor">
            <i class="fas fa-search" @click="searchActive=!searchActive"></i>
          </nuxt-link>
        </div>
        <transition name="fade-top" appear v-if="searchActive">
          <SearchHome @closeSearch="searchActive = false" />
        </transition>
      </div>
    </Container1640>
    <div class="overlay" v-if="searchActive" @click="searchActive = false"></div>
  </div>
</template>

<script>
// libs
import { mapState } from "vuex";

import Logo from "@/components/NaviDesktop/Logo";
import Container1640 from "@/components/containers/Container1640";
import SearchHome from "../Search/SearchHome.vue";
export default {
  data() {
    return {
      searchActive: false,
      metals: null,
    };
  },
  components: {
    Container1640,
    Logo,
    SearchHome,
  },

  computed: {
    ...mapState(["weather", "goldRates"]),

    weatherCelsius() {
      return this.weather.main ? this.weather.main.temp - 273.15 : null;
    },
  },

  async created() {},
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
}
.fade-top-enter-active {
  animation: fade-top 0.5s;
}
.fade-top-leave-active {
  animation: fade-top 0.5s reverse;
}

@keyframes fade-top {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
