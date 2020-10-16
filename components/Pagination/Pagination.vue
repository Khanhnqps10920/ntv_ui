<template>
  <div class="pagination">
    <div class="pagination__items">
      <div
        class="pagination__items-item"
        :class="current === i+1 ? 'active': ''"
        v-for="(page,i) in totalPages"
        :key="i"
        @click="[current = i + 1, $emit('changePage', current)]"
      >{{i + 1}}</div>
      <div class="pagination__items-item"  :class="current === totalPages ? 'disable' : ''" @click="[current += 1, $emit('changePage', current)]">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <p class="pagination__text">Trang {{current}}/ {{totalPages}}</p>
  </div>
</template>

<script>
export default {
  props: {
    totalNews: {
      type: Number
    },
    limit: {
      type: Number
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalNews / this.limit);
    }
  },
  data() {
    return {
      current: 1,
    };
  }
};
</script>

<style scoped>
.disable {
  color: rgb(219, 219, 219) !important;
  pointer-events: none;
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
}

.pagination__items {
  display: flex;
}

.pagination__items-item {
  padding: 10px 14px;
  background: white;
  margin-right: 8px;
  color: #666;
  line-height: 21px;
  border: 1px solid #e3e3e3;
  cursor: pointer;
  transition: 0.4s ease;
}

.pagination__items-item.active {
  background: var(--maincolor);
  color: white;
}

.pagination__items-item:hover {
  background: var(--maincolor);
  color: white;
}

.pagination__text {
  color: #666;
  line-height: 21px;
  font-size: 12px;
}

@media (max-width: 767px) {
  .pagination__text {
    display: none;
  }
}

@media (max-width: 1018px) and (min-width: 768px) {
  .pagination__text {
    display: none;
  }
}
</style>