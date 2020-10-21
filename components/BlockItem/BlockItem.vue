<template>
  <div class="block-item">
    <div class="block-item__img-container relative">
      <nuxt-link
        v-if="post.categoryName && post.categoryAlias && post.categoryId"
        :to="`/category/${post.categoryAlias}-id=${post.categoryId}`"
        class="block-item__category absolute"
      >{{post.categoryName}}</nuxt-link>
      <nuxt-link :to="postLink" class="block-item__img">
        <img :src="post.image" alt="post-img" />
      </nuxt-link>
    </div>
    <h5 class="block-item__title line-clamp-title">
      <nuxt-link :to="postLink">{{post.excerpt}}</nuxt-link>
    </h5>
    <div class="block-item__date">
      <span class="block-item__date-author">
        <a>{{ post.authorName }}</a>
        <span>-</span>
      </span>
      <span class="block-item__date-time">{{post.publishedDate | datetime('DD/MM/YYYY')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postLink() {
      if (!this.post.type)
        return "/post/" + this.post.alias+ `-id=${this.post.id}`;

      return this.post.type === "LongForm"
        ? "/longform/" + this.post.alias + `-id=${this.post.id}`
        : "/post/" + this.post.alias + `-id=${this.post.id}`;
    }
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  }
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
  text-overflow: ellipsis;
  overflow: hidden;
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