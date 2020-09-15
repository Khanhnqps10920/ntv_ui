<template>
  <Container1440>
    <div class="blockb flex xs:block">
      <!-- left -->
      <div class="blockb-left xs:static sticky top-fiftyfive">
        <h4 class="block-title">Magazine</h4>

        <SideBlockItem v-for="(item,index) in 5" :key="index" :noneImg="true" :isBorder="true" />

        <div class="blockb__button">
          <nuxt-link to="/magazine">Xem tất cả</nuxt-link>
          <i class="fas fa-bars"></i>
        </div>
      </div>

      <!-- main block -->
      <div class="flex-grow main-block">
        <div class="mx-4 xs:mx-0">
          <h4 class="main-block__title">
            <span>Politics</span>
            <div class="main-block__title-sub">Latest</div>
          </h4>

          <MainBlockItem v-for="(item,index) in items.result.posts" :item="item" :key="index" />
        </div>
      </div>

      <!-- right -->
      <div class="blockb-right xs:mt-4">
        <div class="blockb-right__block">
          <h4 class="block-title">Sport</h4>

          <SideBlockItem v-for="(item,index) in 3" :key="index" :isSquare="true" />

          <div class="blockb__button small">
            <nuxt-link to="/category/magazine">Xem tất cả</nuxt-link>
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div class="blockb-right__block">
          <AdsSide />

          <h4 class="block-title">Culture</h4>
          <SideBlockItem v-for="(item,index) in 2" :key="index" :isSquare="true" />

          <div class="blockb__button small">
            <nuxt-link to="/category/magazine">Xem tất cả</nuxt-link>
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  </Container1440>
</template>

<script>
import data from "../../../assets/data/data.json";
// components
import Container1440 from "@/components/containers/Container1440";
import SideBlockItem from "../../SideBlockItem/SideBlockItem.vue";
import AdsSide from "../../Advertisement/AdsSide.vue";
import MainBlockItem from "../../MainBlockItem/MainBlockItem.vue";

export default {
  components: {
    Container1440,
    SideBlockItem,
    AdsSide,
    MainBlockItem,
  },
  data() {
    return {
      items: null,
    };
  },

  created() {
    this.items = data.getDynamicList;
  },
};
</script>

<style scoped>
/* block b custom css */

.blockb {
  align-items: flex-start;
}

.blockb .blockb__button.small {
  display: block;
  width: 50%;
}

.blockb .blockb__button {
  background: #000;
  width: 100%;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  font-size: 11px;
  line-height: 35px;
  letter-spacing: 1px;
  border-radius: 3px;
  transition: 0.3s ease;
}

.blockb .blockb__button:hover {
  background: var(--hovercolor);
}

/* end */

/* main block */

.main-block {
  padding-left: 15px;
  padding-right: 15px;
}

.main-block__title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 26px;
  line-height: 26px;
  padding: 0;
  letter-spacing: -0.6px;
  margin-top: 36px;
  text-align: left;
  position: relative;
}

.main-block__title span {
  font-size: 24px;
  font-weight: 900;
  color: var(--maincolor);
  margin-left: 12px;
}

.main-block__title-sub {
  font-size: 90px;
  text-transform: uppercase;
  position: absolute;
  left: -4px;
  z-index: -1;
  bottom: -20px;
  white-space: nowrap;
  color: #f3f3f3;
  line-height: 1;
  letter-spacing: -7px;
}

/* end main block */

/* block b-right */

.blockb-right__block {
  width: auto;

  margin-bottom: 40px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 19px;
  padding-right: 19px;

  border: 1px solid #eaeaea;
}

/* endblock-b right */

/* block B left*/

.blockb-left {
  min-width: 250px;

  width: auto;
  border: 1px solid #eaeaea;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 15px;
  padding-bottom: 20px;
}

/* end block B left*/

/* mobile */
@media (max-width: 767px) {
  .blockb-right {
    width: auto;
  }
  .main-block {
    margin-top: 45px;
  }

  .main-block__title {
    margin-top: 26px;
    margin-bottom: 16px;
  }

  .main-block__title span {
    margin-left: 12px;
  }

  .main-block__title .main-block__title-sub {
    font-size: 60px;
    bottom: -12px;
  }

  .blockb-left {
    margin-top: 16px;
  }
}

/* tablet */
@media (max-width: 1018px) and (min-width: 768px) {
  .blockb-left {
    min-width: 200px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .blockb-right {
    min-width: 200px;
  }

  .main-block {
    padding-right: 10px;
    padding-left: 10px;
  }

  .blockb .blockb__button.small {
    width: 75%;
  }

  .main-block__title {
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: 26px;
  }

  .main-block__title span {
    font-size: 18px;
  }

  .main-block__title-sub {
    font-size: 70px;
    bottom: -15px;
  }
}

/* other */
@media (max-width: 1140px) and (min-width: 1019px) {
  .blockb-left {
    min-width: 230px;
  }
  .blockb-right {
    min-width: 290px;
  }
}
@media (min-width: 1141px) {
  .blockb-left {
    min-width: 250px;
  }
  .blockb-right {
    min-width: 340px;
  }
}
</style>