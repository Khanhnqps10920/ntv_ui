<template>
  <Container1440>
    <div class="post grid grid-cols-12 gap-4 relative">
      <!-- main -->
      <div class="col-span-9 xs:col-span-12 xs:mt-6">
        <div class="post__main">
          <div class="post__main--category mb-5">
            <nuxt-link to="/category">Magazine</nuxt-link>
          </div>
          <h1 class="post__main--title">Jen Kendall Kicked off American Airlines First Flight</h1>

          <div class="post__main--info my-5">
            <!-- info -->
            <div class="post__main--info-wrapper">
              <div class="post__main--info-name">
                <span>By</span>
                <nuxt-link to="/author">Emilio Montes</nuxt-link>
              </div>

              <span class="post__main--info-time ml-6">December 10, 2019</span>

              <div class="post__main--info-icon ml-6">
                <i class="far fa-comment-alt"></i>
                <span>0</span>
              </div>

              <div class="post__main--info-icon ml-6">
                <i class="fas fa-eye"></i>
                <span>0</span>
              </div>
            </div>

            <!-- social -->
            <div class="post__main--social-wrapper xs:mt-6">
              <div class="post__main--info-social">
                <ShareFacebook />
              </div>
            </div>
          </div>

          <div class="post__main--img">
            <img src="@/assets/imgs/default.png" alt="post-img" />
          </div>
        </div>
      </div>

      <!-- side -->
      <div class="col-span-3 xs:col-span-12">
        <div class="post__side sticky top-fiftyfive">
          <AdsSide />

          <p class="block-title">
            <span>Latest article</span>
          </p>

          <SideWrapper>
            <SideBlockItem v-for="(item,index) in 4" :key="index" :isSquare="true" />
          </SideWrapper>
        </div>
      </div>
    </div>
  </Container1440>
</template>

<script>
import Container1440 from "../containers/Container1440.vue";
import AdsSide from "../Advertisement/AdsSide.vue";
import SideWrapper from "../SideWrapper/SideWrapper.vue";
import SideBlockItem from "../SideBlockItem/SideBlockItem.vue";
import ShareFacebook from "@/components/SocialShareButton/ShareFacebook.vue";

export default {
  components: {
    Container1440,
    AdsSide,
    SideWrapper,
    SideBlockItem,
    ShareFacebook,
  },
};
</script>

<style>
/* main */

.post__main {
  padding-left: 15px;
  padding-right: 15px;
}

/* category */
.post__main--category a {
  padding: 3px 4px 2px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #000000;
  color: #ffffff;
  transition: 0.4s ease;
}

.post__main--category a:hover {
  opacity: 0.9;
}

/* title */

.post__main--title {
  font-size: 41px;
  font-weight: 700;
  line-height: 1.1;
}

/* info */
.post__main--info {
  display: flex;
  align-items: center;
  width: 100%;
}

.post__main--info > div {
  width: 50%;
}

.post__main--info .post__main--info-wrapper {
  display: flex;
  font-size: 13px;
  font-style: italic;
  color: #444;
}

.post__main--info-name a {
  font-weight: bold;
}

/* social */

.post__main--social-wrapper {
  text-align: right;
}

/* img */

.post__main--img {
  width: 100%;
  height: 800px;
}

.post__main--img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/*  */

/* responsice  */

@media (max-width: 767px) {
  .post__main--title {
    font-size: 24px;
  }

  .post__main--info {
    display: block;
  }

  .post__main--info > div {
    width: 100%;
    text-align: left;
  }
}

@media (max-width: 1018px) and (min-width: 768px) {
  .post__main--title {
    font-size: 24px;
  }

  .post__main--info {
    display: block;
  }

  .post__main--info > div {
    width: 100%;
    text-align: left;
  }
}
</style>