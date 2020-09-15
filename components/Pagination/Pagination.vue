<template>
  <div class="pagination">
    <div class="pagination__items">
      <div class="pagination__items-item active">1</div>
      <div class="pagination__items-item">2</div>
      <div class="pagination__items-item">3</div>
      <div class="pagination__items-item">4</div>
      <div class="pagination__items-item">
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <p class="pagination__text">Page 1 of 4</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  padding: 10px 15px;
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