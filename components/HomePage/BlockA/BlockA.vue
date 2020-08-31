<template>
  <Container1440>
    <div class="blocka flex xs:block">
      <div class="grid grid-cols-12 gap-4 flex-grow">
        <!-- main post -->
        <div class="col-span-8 xs:col-span-12">
          <div class="blocka__main">
            <nuxt-link to="/news" class="blocka__main--category">News</nuxt-link>

            <h3 class="blocka__main--title">
              <nuxt-link to="/page">Customer Engagement Marketing: A New Strategy for the Economy</nuxt-link>
            </h3>

            <div class="blocka__main--date">
              <span class="blocka__main--date-author">
                <nuxt-link to="/author">Emilio Khanh</nuxt-link>
                <span>-</span>
              </span>
              <span class="blocka__main-date-time">December 10, 2019</span>
            </div>

            <div class="blocka__main--img">
              <nuxt-link to="post">
                <img src="@/assets/imgs/postimg.jpg" alt="post-img" />
              </nuxt-link>
            </div>

            <div
              class="blocka__main-description"
            >The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly, what was expected of her...</div>
          </div>
        </div>

        <!-- other post -->
        <div class="col-span-4 xs:col-span-12">
          <BlockItem v-for="(i,index) in 3" :key="index" />
        </div>
      </div>

      <!-- ads -->
      <div class="bg-blue-300 blocka-right">Tin Nhanh, Quảng cáo, Cafe khuyến nông</div>
    </div>
  </Container1440>
</template>

<script>
import Container1440 from "@/components/containers/Container1440";
import BlockItem from "../../BlockItem/BlockItem.vue";

export default {
  components: {
    Container1440,
    BlockItem,
  },
};
</script>

<style scoped>
.blocka-right {
  width: auto;
  height: 500px;
}

.blocka {
  margin-top: 70px;
}

/* main */
.blocka__main {
  margin-bottom: 32px;
}

.blocka__main .blocka__main--category {
  display: inline-block;
  padding: 3px 4px 2px;
  background-color: #4c4084;
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
  color: #4c4084;
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
    height: 600px;
  }

  /* title */
  .blocka__main .blocka__main--title {
    font-size: 32px;
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
}
@media (min-width: 1141px) {
  .blocka-right {
    width: 300px;
    min-width: 300px;
    margin-left: 16px;
  }
}
</style>