<template>
  <div class="xs:col-span-12 sm:col-span-6 col-span-5 flex flex-col main-height">
    <div class="bg-blue-300 h-auto relative flex-grow">
      <nuxt-link to="/category" class="block-item__category absolute">Business</nuxt-link>
      <nuxt-link to="/post" class="block-item__img">
        <img src="@/assets/imgs/postimg.jpg" alt="post-img" />
      </nuxt-link>
    </div>
    <div>
      <h3 class="block-item__title">
        <nuxt-link to="/post">Việt Nam nêu các vấn đề của nông nghiệp tại Hội nghị FAO khu vực</nuxt-link>
      </h3>

      <div class="block-item__date">
        <span class="block-item__date-author">
          <nuxt-link to="/author">Nguyễn Tâm</nuxt-link>
          <span>-</span>
        </span>
        <span class="block-item__date-time">Ngày 10 tháng 9, 2020</span>
      </div>
    </div>
  </div>
</template>
 

<style scoped>
.main-height {
  height: calc(100% + 70px);
}
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
    font-size: 21px;
  }

  /* img */
  .block-item__img-container {
    height: 150x;
  }
}
@media (max-width: 1018px) and (min-width: 768px) {
  .block-item__title {
    font-size: 21px;
  }
  .block-item {
    padding-bottom: 10px;
    margin-bottom: 10px;
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
    font-size: 21px;
  }
}
@media (min-width: 1141px) {
  .block-item__img-container {
    height: 170px;
  }

  /* title */
  .block-item__title {
    font-size: 32px;
  }
}
</style>