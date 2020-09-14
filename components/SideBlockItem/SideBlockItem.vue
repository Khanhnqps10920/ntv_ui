<template>
  <div class="side-item" :class="{'noneImg': noneImg, 'border':isBorder, 'square': isSquare }">
    <div class="side-item__info">
      <h3 class="side-item__title">
        <nuxt-link to="/post">{{ item.name }}</nuxt-link>
      </h3>
      <p class="side-item__date">{{ item.date }}</p>
    </div>

    <div class="side-item__img" v-if="!noneImg">
      <img :src="item.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noneImg: {
      type: Boolean,
      default: false,
    },

    isBorder: {
      type: Boolean,
      default: false,
    },

    isSquare: {
      type: Boolean,
      default: false,
    },

    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.side-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 20px;
}

.side-item.border {
  border-bottom: 1px solid #eaeaea;
}

.side-item.border:last-child {
  border: none;
}

.side-item.noneImg .side-item__info {
  width: 100%;
}

.side-item .side-item__info {
  width: 70%;
}

.side-item .side-item__date {
  font-size: 13px;
  line-height: 1;
  font-style: italic;
  font-weight: 400;
}

.side-item .side-item__info h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
  line-height: 20px;
}

.side-item .side-item__info h3 a:hover {
  color: var(--hovercolor);
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

.side-item.square .side-item__img {
  border-radius: 0;
}

.side-item.square .side-item__img img {
  border-radius: 0;
}

/* responsive */
@media (max-width: 767px) {
}

@media (min-width: 768px) {
}

/* tablet */
@media (max-width: 1018px) and (min-width: 768px) {
  .side-item {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .side-item.square {
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  .side-item.square .side-item__date {
    display: none;
  }

  .side-item .side-item__info h3 {
    font-size: 12px;
    line-height: 16px;
  }

  .side-item.square .side-item__info {
    width: 60%;
  }

  .side-item.square h3 {
    line-height: 1;
  }

  .side-item .side-item__img {
    width: 50px;
    height: 50px;
  }
}

/* dékstop */
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