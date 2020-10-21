<template>
  <div>
    <AdsBlock class="mt-10" />

    <div class="tag-block mt-2">
      <p class="tag-block__description">TAG</p>
      <h1>{{ slug }}</h1>
    </div>

    <MainBlock class="mt-10" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// components
import AdsBlock from "../../components/CategoryPage/AdsBlock/AdsBlock.vue";
import MainBlock from "../../components/CategoryPage/MainBlock/MainBlock.vue";

export default {
  components: {
    AdsBlock,
    MainBlock,
  },

  computed: {
    // ...mapGetters(["getCategory"]),
    slug() {
      return this.$route.params.tagslug;
    },

    slugName() {
      return this.slug ? this.slug.name.toUpperCase() : "Slug";
    },
  },
  data() {
    return {};
  },

  created() {},
};
</script>


<style scoped>
.tag-block {
  text-align: center;
}

.tag-block .tag-block__description {
  color: #919191;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
}

.tag-block h1 {
  font-size: 41px;
  font-weight: 700;
  text-transform: none;
}
</style>