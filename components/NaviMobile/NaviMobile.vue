<template>
  <nav class="mobile-nav flex h-12 items-center px-5">
    <div class="flex-1">
      <i class="mobile-nav__icons fas fa-bars" @click="$emit('openSideBar')"></i>
    </div>
    <div class="flex-1 text-center font-extrabold uppercase font-sans">Nông Thôn Việt</div>
    <div class="flex-1 text-right">
      <i class="mobile-nav__icons fas fa-search" @click="$emit('openSearchSideBar')"></i>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
.mobile-nav {
  /* position */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  /* other element */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.mobile-nav .mobile-nav__icons {
  font-size: 1.6rem;
  cursor: pointer;
}
</style>>