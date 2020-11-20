<template>
  <Container1440>
    <div class="blocka flex xs:block">
      <div class="grid grid-cols-12 gap-4 flex-grow">
        <!-- main post -->
        <div class="col-span-8 xs:col-span-12" v-if="mainNew">
          <div class="blocka__main">
            <nuxt-link
              v-if="
                mainNew.categoryName &&
                mainNew.categoryAlias &&
                mainNew.categoryId
              "
              :to="`/category/${mainNew.categoryAlias}-id=${mainNew.categoryId}`"
              class="blocka__main--category"
              >{{ mainNew.categoryName }}</nuxt-link
            >

            <h3 class="blocka__main--title line-clamp-title">
              <nuxt-link :to="postLink">
                {{ mainNew.title }}
              </nuxt-link>
            </h3>

            <div class="blocka__main--date">
              <span class="blocka__main--date-author">
                <span>{{ mainNew.authorName }}</span>
                <span>-</span>
              </span>
              <span class="blocka__main-date-time">
                {{ mainNew.publishedDate | datetime("DD/MM/YYYY") }}
              </span>
            </div>

            <div class="blocka__main--img">
              <nuxt-link :to="postLink">
                <img :src="mainNew.image" alt="post-img" />
              </nuxt-link>
            </div>

            <div class="blocka__main-description line-clamp-excerpt">
              {{ mainNew.excerpt }}
            </div>
          </div>
        </div>

        <!-- other post -->
        <div class="col-span-4 xs:col-span-12 other-post">
          <BlockItem
            v-for="(post, index) in restNew"
            :key="index"
            :post="post"
          />
        </div>
      </div>

      <!-- ads -->
      <div class="blocka-right">
        <div class="blocka-right__section" v-if="TinNhanh.length">
          <h4 class="section-title">{{ titleHomeA_Right1 }}</h4>
          <SideBlockItem :post="TinNhanh[0]" />
        </div>

        <!-- ads -->
        <!-- <AdsSide /> -->

        <!-- gold api -->
        <div class="gold-wrapper">
          <iframe
            id="fr33"
            style="border: none"
            src="//tygia.com/api2.php?auto=1&amp;change=0&amp;flag=1&amp;column=2&amp;titlecolor=333333&amp;upcolor=008800&amp;downcolor=aa0000&amp;textcolor=333333&amp;gbcolor=ffffff&amp;title=0&amp;chart=0&amp;gold=1&amp;rate=1&amp;ngoaite=USD,JPY,EUR,GBP,AUD&amp;expand=0&amp;color=B4D0D0&amp;nganhang=VIETCOM&amp;fontsize=80&amp;css=%23SJC_N_ng{display:%20table-row%20!important;}%23wgold{display:none}"
            width="100%"
            height="310"
          ></iframe>
        </div>

        <div class="blocka-right__section" v-if="ThiTruongTaiChinh.length">
          <h4 class="section-title">Thị trường - tài chính</h4>
          <SideBlockItem
            v-for="(post, index) in ThiTruongTaiChinh.slice(0, 3)"
            :post="post"
            :key="index"
            :isSquare="true"
          />
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
    AdsSide,
  },
  props: {
    News: {
      type: Array,
      default: () => {
        return [];
      },
    },
    TinNhanh: {
      type: Array,
      default: () => {
        return [];
      },
    },
    titleHomeA_Right1: {
      type: String,
      default: "Tin Nhanh",
    },
    ThiTruongTaiChinh: {
      type: Array,
      default: () => {
        return [];
      },
    },
    titleHomeA_Right2: {
      type: String,
      default: "Thị Trường Tài Chính",
    },
  },
  computed: {
    mainNew() {
      return this.News[0];
    },

    restNew() {
      return this.News.slice(1, 4);
    },

    postLink() {
      if (!this.mainNew.type)
        return "/post/" + this.mainNew.alias + `-id=${this.mainNew.id}`;
      return this.mainNew.type === "LongForm"
        ? "/longform/" + this.mainNew.alias + `-id=${this.mainNew.id}`
        : "/post/" + this.mainNew.alias + `-id=${this.mainNew.id}`;
    },
  },
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
  margin-top: 60px;
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
  font-size: 20px;
  line-height: 1.1;
  font-weight: 700;
  margin: 6px 0 2px;
}

.blocka__main .blocka__main--title a:hover {
  color: var(--hovercolor);
}

/* date */
.blocka__main .blocka__main--date {
  font-size: 12px;
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
  font-size: 14px;
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
    font-size: 16px;
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
    font-size: 20px;
  }

  .section-title {
    font-size: 16px;
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
    font-size: 20px;
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
    font-size: 20px;
  }
}
</style>
