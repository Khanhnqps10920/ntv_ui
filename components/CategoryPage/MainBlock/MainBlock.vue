<template>
  <container1240>
    <div class="main-block flex xs:block mb-5">
      <!-- main block -->
      <div class="main-block__main flex-grow">
        <MainBlockItem
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
          :is1240="true"
        />
        <p class="text-lg bold" v-if="!posts.length">
          Không có bài viết
        </p>

        <Pagination
          v-if="totalNews > 0"
          :totalNews="totalNews"
          :limit="limit"
          @changePage="changePage"
        />
      </div>

      <!-- right block -->
      <div class="main-block__right sticky top-fiftyfive xs:static xs:mt-5">
        <div class="main-block__right-block">
          <h4 class="block-title">Tin Mới Nhất</h4>

          <SideBlockItem
            v-for="(post, index) in TinMoiNhat"
            :post="post"
            :key="index"
            :isSquare="true"
          />
        </div>

        <AdsSide :ads="ads" class="mt-5" />
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
import Pagination from "../../Pagination/Pagination.vue";

export default {
  components: {
    Container1240,
    SideBlockItem,
    MainBlockItem,
    AdsSide,
    Pagination,
  },
  props: {
    posts: {
      type: Array,
    },
    totalNews: {
      type: Number,
    },
    limit: {
      type: Number,
    },
    ads: {
      type:Object,
      default: () => ({})
    }
    // TinMoiNhat: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   },
    // },
  },
  data() { 
    return {
      TinMoiNhat: [],
    }
  },
  methods: {
    changePage(p) {
      console.log('chanpage');
      this.$emit("changePage", p);
    },
  },

  async created() {
    await this.$store.dispatch('getTopHotNewsByCategory', {
      urlQuery: {
        skip: 1,
        limit: 4
      },
      nextActions: res => {
        this.TinMoiNhat = [...res.result]
      }
    });

  
  }


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
@media  (max-width: 768px) {
   .main-block__main {
    padding-right: 14px;
    padding-left: 14px;
  }
} 
/* tablet */

@media (max-width: 1018px) and (min-width: 768px) {
  .main-block__right {
    min-width: 250px;
    padding-right: 14px;
    padding-left: 14px;
  }

  /* main block */
  .main-block__main {
    padding-right: 14px;
    padding-left: 14px;
  }
}

/* mobile */

/* other */

@media (max-width: 1140px) and (min-width: 1019px) {
  .main-block__right {
    min-width: 250px;
    max-width: 290px;
    padding-right: 20px;
    padding-left: 20px;
  }

  .main-block__main {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (min-width: 1141px) {
  .main-block__right {
    min-width: 350px;
    max-width: 370px;
  }
}
</style>