<template>
  <div class="category">
    <container1440>
      <div class="category__wrapper">
        <p class="category__title">Category</p>

        <h1 class="category__name">Sport</h1>

        <ul class="category__list">
          <li class="category__list-item">
            <nuxt-link to="/category">Business</nuxt-link>
          </li>

          <li class="category__list-item">
            <nuxt-link to="/category">Magazine</nuxt-link>
          </li>

          <li class="category__list-item">
            <nuxt-link to="/category">News</nuxt-link>
          </li>

          <li class="category__list-item">
            <nuxt-link to="/category">Sport</nuxt-link>
          </li>
        </ul>
      </div>
    </container1440>
  </div>
</template>

<script>
import Container1440 from "../../containers/Container1440.vue";

export default {
  components: {
    Container1440,
  },
};
</script>

<style scoped>
.category {
  text-align: center;
}

.category__title {
  color: #919191;
  font-family: "Source Sans Pro";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.category__name {
  font-family: "Gelasio", serif;
  font-size: 36px;
  line-height: 38px;
  font-weight: 700;
  text-transform: none;
}

.category__list {
  margin-top: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.category__list .category__list-item {
  margin: 0 5px;
}

.category__list .category__list-item a {
  padding: 3px 4px 2px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #000000;
  color: #ffffff;
}

.category__list .category__list-item a:hover {
  opacity: 0.9;
}
</style>