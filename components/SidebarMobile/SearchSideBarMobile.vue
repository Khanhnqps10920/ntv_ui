<template>
  <div class="search-sidebar" :class="{show: isActive}">
    <div class="search-sidebar__icon relative">
      <i class="relative fas fa-times" @click="closeSideBar"></i>
    </div>

    <div class="search-sidebar__search relative">
      <span class="text-xs">Search</span>
      <input type="text" class="search-sidebar__search-input" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },

    closeSideBar: {
      type: Function,
      default: () => 1,
    },
  },
};
</script>

<style scoped>
/* sidebar */

.search-sidebar {
  /* position */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  z-index: 1000;

  /* background */
  background-image: url("../../assets/imgs/sidebar-background.jpg");
  background-size: cover;
  background-position: center top;
  -webkit-transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transition: all 0.5s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
  visibility: hidden;
}

.search-sidebar.show {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  visibility: visible;
}

/* before */

.search-sidebar::before {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  z-index: 1001;

  /* background */
  background: rgba(76, 64, 132, 0.9);
  opacity: 0.98;
  background: linear-gradient(
    to bottom,
    rgba(76, 64, 132, 0.9) 0%,
    rgba(28, 24, 51, 0.9) 100%
  );
}

/* icon */

.search-sidebar .search-sidebar__icon,
.search-sidebar .search-sidebar__search {
  z-index: 1002;
}

.search-sidebar__icon {
  text-align: right;
  padding: 2.5rem 1.25rem;
  font-size: 1.5rem;

  cursor: pointer;
}

.search-sidebar__icon i {
  color: white;
  transition: 0.4s ease;
}

.search-sidebar__icon i:hover {
  color: #febe2b;
  cursor: pointer;
}

/* search */
.search-sidebar .search-sidebar__search {
  margin: 0 5%;
  text-align: center;
}

.search-sidebar .search-sidebar__search span {
  opacity: 0.8;
  color: #e2e8f0;
  display: block;
}

/* input */
.search-sidebar .search-sidebar__search .search-sidebar__search-input {
  color: #fff;
  font-weight: 700;
  font-size: 26px;
  height: 40px;
  line-height: 36px;
  border: 0;
  background: 0 0;
  outline: 0;
  margin: 8px 0;
  padding: 0;
  text-align: center;
  width: 100%;
}

.search-sidebar .search-sidebar__search::before,
.search-sidebar .search-sidebar__search::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  z-index: 1002;
}

.search-sidebar .search-sidebar__search::after {
  opacity: 0.8;
  transform: scaleX(0);
  -webkit-transform: scaleX(0);
  -webkit-transition: transform 0.5s ease 0.8s;
  transition: transform 0.5s ease 0.8s;
}

.search-sidebar.show .search-sidebar__search::after {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
}
</style>