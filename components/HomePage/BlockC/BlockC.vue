<template>
  <Container1640 class="wrapper">
    <div class="mb-6">
      <div class="title-bar" style="background:var(--maincolor)" v-if="mainNew">
        <Container1440>
          <h1
            class="text-white text-6xl sm:text-3xl sm:mt-3 xs:text-4xl xs:mt-3 font-extrabold font-sans mt-5"
          >Tin Nóng</h1>
          <p
            class="text-white mt-4 sm:mt-2 sm:text-sm xs:mt-2 xs:text-sm"
          >{{mainNew.title}}</p>
        </Container1440>
      </div>
    </div>

    <Container1440 class="wrapper1440">
      <div class="grid grid-cols-12 gap-4">
        <!--Main News-->
        <MainItem class="main-new" :post="mainNew"/>
        <!--Rest News-->
        <div class="xs:col-span-12 sm:col-span-6 col-span-7 rest-new">
          <div class="grid grid-cols-12 gap-4">
            <div v-for="(post,i) in restNew" :key="i" class="col-span-6">
              <BlockItem :post="post" />
            </div>
          </div>
        </div>
      </div>
    </Container1440>
  </Container1640>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import Container1440 from "@/components/containers/Container1440";
import BlockItem from "@/components/BlockItem/BlockItem";
import MainItem from "@/components/BlockItem/MainItem";

export default {
  components: {
    Container1640,
    Container1440,
    BlockItem,
    MainItem
  },
  props: {
    News: {
      type: Array,
      required: true
    }
  },
  computed: {
    mainNew() {
      return this.News[0];
    },
    mainNewCate() {
      /* (2)
      return this.$store.dispatch('getDetailCategory', {
        id : this.News[0].id,
        nextActions : (res) => {
          return res.data
        }
      })
      */
      return {
        id: "2",
        name: "Tạp chí",
        alias: "tap-chi",
        parentId: "-",
        subCates: []
      }; //(1)
    },
    restNew() {
      return this.News.slice(1, 5);
    }
  }
};
</script>
<style scoped>
.wrapper1440 {
  padding-left: 0px;
  padding-right: 0px;
}
@media (max-width: 767px) {
  .lastest {
    top: -20px;
    z-index: -1;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .main-new {
    margin-top: -70px;
  }
  .title-bar {
    height: 200px;
    max-height: 200px;
    padding-top: 50px;
    padding-bottom: 75px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .rest-new {
    margin-top: -50px;
    height: calc(100% + 50px);
  }
  .main-new {
    margin-top: -50px;
  }
  .title-bar {
    height: 130px;
    max-height: 130px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
  .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .title-bar {
    height: 200px;
    max-height: 200px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
@media (min-width: 1141px) {
  .main-new {
    margin-top: -70px;
  }
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
  /* .wrapper1440 {
    padding-left: 20px;
    padding-right: 20px;
  } */
  .title-bar {
    height: 200px;
    max-height: 2000px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
</style>
