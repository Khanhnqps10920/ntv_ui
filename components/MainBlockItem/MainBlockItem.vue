<template>
  <div class="main-item">
    <div class="main-item__container">
      <div class="main-item__img">
        <nuxt-link class="main-item__category" to="/category">Politics</nuxt-link>
        <nuxt-link to="/post" class="main-item__img-wrapper">
          <img src="@/assets/imgs/default.png" alt="post-img" />
        </nuxt-link>
      </div>

      <div class="main-item__info">
        <h3 class="main-item__info--title">
          <nuxt-link to="/post">Customer Engagement Marketing: A New Strategy for the Economy</nuxt-link>
        </h3>
        <div class="main-item__date">
          <span class="main-item__date-author">
            <nuxt-link to="/author">Emilio Khanh</nuxt-link>
            <span>-</span>
          </span>
          <span class="main-item__date-time">December 10, 2019</span>
        </div>
        <div
          class="main-item__text"
        >The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly,...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-item {
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.main-item .main-item__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.main-item .main-item__img {
  width: 40%;
  position: relative;
}

.main-item .main-item__category {
  position: absolute;
  bottom: 0;
  padding: 3px 4px 2px;
  background-color: #4c4084;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  font-size: 10px;
}

.main-item .main-item__img-wrapper {
  width: 100%;
  height: 100%;
}

.main-item .main-item__img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.main-item .main-item__info {
  width: 56.5%;
  padding: 10px 0 0 0;
  border-top: 1px solid #eaeaea;
}

.main-item__info .main-item__info--title {
  color: #000000;

  font-size: 23px;
  font-weight: 700;
  font-family: "Gelasio", serif;
  margin-bottom: 6px;
  line-height: 22px;
}

.main-item__info .main-item__info--title a:hover {
  color: #4c4084;
}

.main-item__info .main-item__date {
  font-size: 13px;
  line-height: 1;
  font-style: italic;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 12px;
}

.main-item__info .main-item__text {
  color: #555555;
  column-count: 1;
  column-gap: 48px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  line-height: 1.3;
}

/* mobile */
@media (max-width: 767px) {
  .main-item .main-item__container {
    align-items: stretch;
  }

  .main-item .main-item__img {
    width: 28%;
  }

  .main-item .main-item__info {
    width: 69%;
  }

  .main-item .main-item__info--title {
    font-size: 16px;
    line-height: 1.1;
  }

  .main-item .main-item__text {
    display: none;
  }

  .main-item__date-author {
    display: none;
  }
}

/* tablet */
@media (max-width: 1018px) and (min-width: 768px) {
  .main-item {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .main-item .main-item__container {
    align-items: stretch;
  }

  .main-item .main-item__img {
    width: 35%;
  }

  .main-item .main-item__info {
    width: 62%;
  }

  .main-item .main-item__info--title {
    font-size: 13px;
    line-height: 1.1;
  }

  .main-item .main-item__text {
    display: none;
  }

  .main-item__date-author {
    display: none;
  }
}

/* desktop */
@media (max-width: 1140px) and (min-width: 1019px) {
  .main-item .main-item__container {
    align-items: flex-start;
  }

  .main-item .main-item__info--title {
    font-size: 15px;
    line-height: 1.1;
  }

  .main-item .main-item__text {
    display: none;
  }

  .main-item__date-author {
    display: none;
  }
}
</style>