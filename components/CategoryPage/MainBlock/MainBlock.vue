<template>
  <container1240>
    <div class="main-block flex xs:block mb-5">
      <!-- main block -->
      <div class="main-block__main flex-grow">
        <MainBlockItem v-for="(item,index) in 5" :key="index" />
      </div>

      <!--  -->

      <!-- right block -->
      <div class="main-block__right sticky top-fiftyfive xs:static xs:mt-5">
        <div class="main-block__right-block">
          <h4 class="block-title">Latest News</h4>

          <SideBlockItem v-for="(item,index) in 5" :key="index" :isSquare="true" />
        </div>

        <AdsSide class="mt-5" />
      </div>

      <!--  -->
    </div>
  </container1240>
</template>

<script>
// components
import SideBlockItem from "../../SideBlockItem/SideBlockItem.vue";
import Container1240 from "../../containers/Container1240.vue";
import AdsSide from "../../Advertisement/AdsSide.vue";
import MainBlockItem from "../../MainBlockItem/MainBlockItem.vue";

export default {
  components: {
    Container1240,
    SideBlockItem,
    MainBlockItem,
    AdsSide,
  },
};
</script>

<style scoped>
/* main block */
.main-block {
  align-items: flex-start;
}

/* end main block */

/* main block main content */

.main-block__main {
  padding-right: 24px;
  padding-left: 24px;
}

/* end main block main */

/* main block right */

.main-block__right {
  /* max-width: 370px; */
  padding-right: 24px;
  padding-left: 24px;
}

.main-block__right-block {
  width: auto;
  border: 1px solid #eaeaea;
  padding-right: 19px;
  padding-left: 19px;
  padding-top: 15px;
  padding-bottom: 20px;
}

/* end main block right */

/* responsive */

/* tablet */

@media (max-width: 1018px) and (min-width: 768px) {
  .main-block__right {
    min-width: 200px;
  }

  .main-block__right {
    max-width: 300px;
  }
}

/* mobile */

/* other */

@media (max-width: 1140px) and (min-width: 1019px) {
  .main-block__right {
    max-width: 290px;
  }
}

@media (min-width: 1141px) {
  .main-block__right {
    max-width: 370px;
  }
}
</style>