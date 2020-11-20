<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <a class="button is-white" @click="$router.back()">
          <i class="fas fa-chevron-left"></i>
        </a>
      </div>
      <div class="level-item">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
              <nuxt-link :to="item.path">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      let tmp = [];
      if (this.$route.matched) {
        console.log(this.$route.matched);
        this.$route.matched.forEach(link => {
          tmp.push(
            Object.assign({ meta: { title: "Title not found in meta" } }, link)
          );
        });
      }
      if (tmp.length === 0) {
        tmp.push({ path: "/", meta: { title: "Home" } });
      }
      return tmp;
    }
  }
};
</script>
