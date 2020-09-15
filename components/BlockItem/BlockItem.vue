<template>
  <div class="block-item">
    <div class="block-item__img-container relative">
      <nuxt-link
        :to="`/category/${post.cateAlias}`"
        class="block-item__category absolute"
      >{{post.cateName}}</nuxt-link>
      <nuxt-link to="/post" class="block-item__img">
        <img :src="post.image" alt="post-img" />
      </nuxt-link>
    </div>
    <h5 class="block-item__title">
      <nuxt-link :to="post.alias">{{post.description}}</nuxt-link>
    </h5>
    <div class="block-item__date">
      <span class="block-item__date-author">
        <nuxt-link to="/">{{post.author}}</nuxt-link>
        <span>-</span>
      </span>
      <span class="block-item__date-time">{{post.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {
        return {
          id: "5",
          name:
            "Chuẩn bị cho cách ly 10.000 người, tăng chuyến bay cho chuyên gia, nhà đầu tư",
          image:
            "http://nongthonviet.com.vn/dataimages/202009//original/images1470021_photo_1_15991951422081134227344.jpg",
          date: "14-09-2020",
          author: "khánh",
          cateName: "Thời sự",
          cateAlias: "thoi-su",
          cateId: "1",
          description:
            "Thủ tướng yêu cầu có phương án cụ thể cho từng chuyến bay thương mại, tăng dần tần suất chuyến bay đón công dân về nước....",
          alias: "chuan-bi-cho-cach-ly-10000-nguoi"
        };
      }
      // required : true
    }
  },
};
</script>

<style scoped>
/* block item mobile */
.block-item {
  /* padding-bottom: 18px; */
  /* margin-bottom: 18px; */
}

/* category */

.block-item__category {
  display: inline-block;
  padding: 3px 4px 2px;
  background-color: var(--maincolor);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  bottom: 0;
  font-size: 10px;
}

/* img */
.block-item__img-container {
  width: 100%;
  height: 175px;
}

.block-item__img {
  width: 100%;
  height: 100%;
}

.block-item__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* title */
.block-item__title {
  margin-top: 13px;
  font-size: 17px;
  line-height: 1.1;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 6px;
}

.block-item__title a:hover {
  color: var(--hovercolor);
}

/* date  */

.block-item__date {
  font-size: 13px;
  line-height: 1;
  font-style: italic;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 14px;
}

@media (min-width: 767px) {
  .block-item__title {
    font-size: 17px;
  }

  /* img */
  .block-item__img-container {
    height: 150x;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .block-item {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  /* title */
  .block-item__title {
    font-size: 12px;
  }

  /* img */
  .block-item__img-container {
    height: 120px;
  }

  /* author */

  .block-item__date-author {
    display: none;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  /* img */
  .block-item__img-container {
    height: 150px;
  }

  /* title */
  .block-item__title {
    font-size: 17px;
  }
}
@media (min-width: 1141px) {
  .block-item__img-container {
    height: 170px;
  }

  /* title */
  .block-item__title {
    font-size: 20px;
  }
}
</style>