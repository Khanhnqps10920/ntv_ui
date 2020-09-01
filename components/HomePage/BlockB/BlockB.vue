<template>
  <Container1440>
    <div class="blockb flex xs:block">
      <div class="blockb-left xs:static sticky top-fiftyfive">
        <h4 class="block-title">Magazine</h4>

        <SideBlockItem v-for="(item,index) in 5" :key="index" :noneImg="true" :isBorder="true" />

        <div class="blockb__button">
          <nuxt-link to="/magazine">View All News</nuxt-link>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="flex-grow">
        <div class="bg-blue-300 mx-4 xs:mx-0 xs:mt-4" style="height : 2000px;">Middle BlockB</div>
      </div>
      <div class="blockb-right xs:mt-4">
        <div class="blockb-right__block">
          <h4 class="block-title">Sport</h4>

          <SideBlockItem v-for="(item,index) in 3" :key="index" :isSquare="true" />

          <div class="blockb__button small">
            <nuxt-link to="/magazine">View All News</nuxt-link>
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div class="blockb-right__block">
          <AdsSide />

          <h4 class="block-title">Culture</h4>
          <SideBlockItem v-for="(item,index) in 2" :key="index" :isSquare="true" />

          <div class="blockb__button small">
            <nuxt-link to="/magazine">View All News</nuxt-link>
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  </Container1440>
</template>

<script>
// components
import Container1440 from "@/components/containers/Container1440";
import SideBlockItem from "../../SideBlockItem/SideBlockItem.vue";
import AdsSide from "../../Advertisement/AdsSide.vue";

export default {
  components: {
    Container1440,
    SideBlockItem,
    AdsSide,
  },
};
</script>

<style scoped>
.blockb {
  align-items: flex-start;
}

.blockb-right__block {
  width: auto;

  margin-bottom: 40px;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 19px;
  padding-right: 19px;

  border: 1px solid #eaeaea;
}

/* block B left*/

.blockb-left {
  width: auto;
  border: 1px solid #eaeaea;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 15px;
  padding-bottom: 20px;
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
  background: #4c4084;
}

/* end block B left*/

@media (max-width: 767px) {
  .blockb-left {
    margin-top: 16px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .blockb-left {
    width: 200px;
  }
  .blockb-right {
    width: 200px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .blockb-left {
    width: 230px;
  }
  .blockb-right {
    width: 290px;
  }
}
@media (min-width: 1141px) {
  .blockb-left {
    width: 250px;
  }
  .blockb-right {
    width: 340px;
  }
}
</style>