<template>
  <div
    class="tags h-16 border-gray-200 border-t-2 border-b-2 border-solid flex justify-center items-center"
  >
    <nuxt-link
      :to="`/category/${tag.alias}-id=${tag.id}`"
      v-for="(tag, i) in menuTags"
      :key="i"
      class="tag uppercase px-3 sm:px-2 font-bold sm:text-xs md:text-sm lg:text-md font-sans hover:text-hovercolor"
    >
      <span @mouseover="onHoverTag(tag.subCates, tag.id)">
        {{ tag.name }}
        <span v-if="tag.subCates.length">
          <i class="fas fa-angle-down"></i>
        </span>
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    menuTags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onHoverTag(subs, id) {
      if (subs && subs.length) {
        this.$emit("onHover", subs, id);
      } else {
        this.$emit("onLeaveHovered");
      }
    },
  },
};
</script>

<style scoped>
.tags {
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
}

.tags::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1018px) and (min-width: 768px) {
  .tag {
    font-size: 9px;
  }
}
@media (max-width: 1140px) and (min-width: 1019px) {
  .tag {
    font-size: 11px;
  }
}
@media (min-width: 1141px) {
  .tag {
    font-size: 12px;
  }
}
</style>