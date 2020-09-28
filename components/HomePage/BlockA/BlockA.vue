<template>
  <Container1440>
    <div class="blocka flex xs:block">
      <div class="grid grid-cols-12 gap-4 flex-grow">
        <!-- main post -->
        <div class="col-span-8 xs:col-span-12" v-if="mainNew && mainNewCate">
          <div class="blocka__main">
            <nuxt-link
              :to="`/category/${mainNewCate.alias}-id=${mainNewCate.id}`"
              class="blocka__main--category"
            >{{mainNewCate.name}}</nuxt-link>

            <h3 class="blocka__main--title line-clamp-title">
              <nuxt-link :to="`/post/${mainNew.alias}-id=${mainNew.id}`">
              {{mainNew.title}}</nuxt-link>
            </h3>

            <div class="blocka__main--date">
              <span class="blocka__main--date-author">
                <nuxt-link to="/author">Nguyễn Tâm</nuxt-link>
                <span>-</span>
              </span>
              <span
                class="blocka__main-date-time"
              >{{mainNew.publishedDate | x2datetime('DD/MM/YYYY')}}</span>
            </div>

            <div class="blocka__main--img">
              <nuxt-link :to="`/post/${mainNew.alias}-id=${mainNew.id}`">
                <img :src="mainNew.image" alt="post-img" />
              </nuxt-link>
            </div>

            <div class="blocka__main-description line-clamp-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam excepturi quasi saepe sit cupiditate temporibus cumque? Voluptatem reprehenderit earum tenetur consequuntur, quos placeat aut eaque obcaecati modi repellendus ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam excepturi quasi saepe sit cupiditate temporibus cumque? Voluptatem reprehenderit earum tenetur consequuntur, quos placeat aut eaque obcaecati modi repellendus ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam excepturi quasi saepe sit cupiditate temporibus cumque? Voluptatem reprehenderit earum tenetur consequuntur, quos placeat aut eaque obcaecati modi repellendus ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam excepturi quasi saepe sit cupiditate temporibus cumque? Voluptatem reprehenderit earum tenetur consequuntur, quos placeat aut eaque obcaecati modi repellendus ea?</div>
          </div>
        </div>

        <!-- other post -->
        <div class="col-span-4 xs:col-span-12 other-post">
          <BlockItem v-for="(post,index) in restNew" :key="index" :post="post" />
        </div>
      </div>

      <!-- ads -->
      <div class="blocka-right">
        <div class="blocka-right__section">
          <h4 class="section-title">Tin nhanh</h4>
          <SideBlockItem />
        </div>

        <!-- ads -->
        <AdsSide />

        <div class="blocka-right__section">
          <h4 class="section-title">Thị trường - tài chính</h4>
          <SideBlockItem v-for="(item,index) in 3" :key="index" />
        </div>
      </div>
    </div>
  </Container1440>
</template>

<script>
import Container1440 from "@/components/containers/Container1440";
import BlockItem from "../../BlockItem/BlockItem.vue";
import SideBlockItem from "../../SideBlockItem/SideBlockItem.vue";
import AdsSide from "../../Advertisement/AdsSide.vue";

export default {
  components: {
    Container1440,
    BlockItem,
    SideBlockItem,
    AdsSide
  },
  data() {
    return {
      mainNewCate: ""
    };
  },
  props: {
    News: {
      type: Array,
      required: true
    }
  },
  async mounted() {
    if (this.News.length) {
      const data = await this.$store.dispatch("getDetailCategory", {
        id: this.News[0].categoryId
      });
      this.mainNewCate = data.data.result;
    }
  },
  computed: {
    mainNew() {
      return this.News[0];
    },
    restNew() {
      return this.News.slice(1, 4);
    }
  }
};
</script>

<style scoped>
/* common style */
.blocka-right {
  min-width: 200 !important;
}

.other-post {
}

.blocka {
  margin-top: 70px;
}

.section-title {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 16px;
  color: var(--maincolor);
}

/* main */
.blocka__main {
  margin-bottom: 32px;
}

.blocka__main .blocka__main--category {
  display: inline-block;
  padding: 3px 4px 2px;
  background-color: var(--maincolor);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 10px;
  color: #fff;
}

/* title */
.blocka__main .blocka__main--title {
  font-size: 21px;
  line-height: 1.1;
  font-weight: 700;
  margin: 6px 0 2px;
}

.blocka__main .blocka__main--title a:hover {
  color: var(--hovercolor);
}

/* date */
.blocka__main .blocka__main--date {
  font-size: 13px;
  line-height: 1;
  font-style: italic;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 14px;
}

/* img */
.blocka__main .blocka__main--img {
  width: 100%;
  height: 300px;
}

.blocka__main .blocka__main--img a {
  width: 100%;
  height: 100%;
  position: relative;
}

.blocka__main .blocka__main--img a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* description */

.blocka__main .blocka__main-description {
  display: block;
  margin-top: 13px;
  color: #555555;
  font-size: 15px;
  line-height: 1.3;
}

@media (max-width: 767px) {
  .blocka-right {
    margin-top: 16px;
  }
}

@media (min-width: 768px) {
  .blocka {
    margin-top: 0;
  }
  /* img */
  .blocka__main .blocka__main--img {
    height: 550px;
  }

  /* title */
  .blocka__main .blocka__main--title {
    font-size: 36x;
  }

  .section-title {
    font-size: 17px;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .blocka-right {
    width: 200px;
    min-width: 200px;

    margin-left: 16px;
  }

  /* img */
  .blocka__main .blocka__main--img {
    height: 450px;
  }

  /* title */
  .blocka__main .blocka__main--title {
    font-size: 21px;
  }

  .section-title {
    font-size: 17px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .blocka-right {
    width: 250px;
    min-width: 250px;

    margin-left: 16px;
  }

  .blocka__main .blocka__main--img {
    height: 500px;
  }

  .blocka__main .blocka__main--title {
    font-size: 36px;
  }

  .section-title {
    font-size: 19px;
  }
}
@media (min-width: 1141px) {
  .blocka-right {
    width: 300px;
    min-width: 300px;

    margin-left: 16px;
  }

  .blocka__main .blocka__main--title {
    font-size: 36px;
  }

  .section-title {
    font-size: 19px;
  }
}
</style>