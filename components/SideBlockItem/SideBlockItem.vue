<template>
  <div class="side-item">
    <div class="side-item__info">
      <h3 class="side-item__title">
        <nuxt-link to="/post">Jen Kendall Kicked off American Airlines First Flight</nuxt-link>
      </h3>
      <p class="side-item__date">December 10, 2019</p>
    </div>

    <div class="side-item__img">
      <img src="@/assets/imgs/default.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.side-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}

.side-item .side-item__info {
  width: 70%;
}

.side-item .side-item__date {
  font-family: Source Sans Pro;
  font-size: 13px;
  line-height: 1;
  font-style: italic;
  font-weight: 400;
}

.side-item .side-item__info h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
  line-height: 20px;
}

.side-item .side-item__info h3 a:hover {
  color: #4c4084;
}

.side-item .side-item__img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.side-item .side-item__img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* responsive */
@media (max-width: 767px) {
}

@media (min-width: 768px) {
}

@media (max-width: 1018px) and (min-width: 768px) {
  .side-item {
    margin-bottom: 15px;
  }

  .side-item .side-item__info h3 {
    font-size: 12px;
    line-height: 16px;
  }

  .side-item .side-item__img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 1140px) and (min-width: 1019px) {
  /* title */
  .side-item .side-item__info h3 {
    line-height: 16px;
  }

  /* img */

  .side-item .side-item__img {
    width: 50px;
    height: 50px;
  }
}

@media (min-width: 1141px) {
}
</style>