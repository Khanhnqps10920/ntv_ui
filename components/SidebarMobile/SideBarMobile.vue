<template>
  <div class="sidebar-mobile">
    <div class="sidebar-mobile__icon relative">
      <i class="relative fas fa-times" @click="$emit('closeSideBar')"></i>
    </div>

    <ul class="sidebar-mobile__menu relative">
      <li
        class="sidebar-mobile__menu-item"
        v-for="(tag, i) in categories"
        :key="i"
        @click="$emit('closeSideBar')"
      >
        <nuxt-link :to="`/category/${tag.alias}-id=${tag.id}`">{{
          tag.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type:Array,
      default: () => []
    }
  },
 

  data() {
    return {
      // categories: [
      //   { name: "Thời sự", id: 1, alias: "thoi-su" },
      //   { name: "Tạp chí", id: 2, alias: "thoi-su" },
      //   { name: "Nông nghiệp", id: 3, alias: "thoi-su" },
      //   { name: "Khám phá", id: 4, alias: "thoi-su" },
      //   { name: "Nông nghiệp việt", id: 5, alias: "thoi-su" },
      // ],
    };
  },
};
</script>

<style>
/* sidebar */

.sidebar-mobile {
  /* position */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index:10000;
  /* background */
  background-image: url("../../assets/imgs/nongthon.jpg");
  background-size: cover;
  background-position: center top;

  /* scroll */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.sidebar-mobile.hide {
  width: 0;
}

.hide.sidebar-mobile::before {
  width: 0;
}

.sidebar-mobile::-webkit-scrollbar {
  display: none;
}

/* sidebar background - position */
.sidebar-mobile::before {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: 1001;

  /* background */
  opacity: 0.8;
  background: linear-gradient(
    45deg,
    rgba(1, 3, 2, 0.9) 0%,
    rgba(95, 94, 95, 0.9) 100%
  );

  /* transition */
  transition: width 0.4s ease;
}

.sidebar-mobile .sidebar-mobile__icon,
.sidebar-mobile .sidebar-mobile__menu {
  z-index: 1002;
}

/* icon */
.sidebar-mobile__icon {
  text-align: right;
  padding: 1rem 1.25rem;
  font-size: 1.5rem;

  cursor: pointer;
}

.sidebar-mobile__icon i {
  color: white;
  transition: 0.4s ease;
}

.sidebar-mobile__icon i:hover {
  color: var(--hovercolor);
  cursor: pointer;
}

/* menu */
.sidebar-mobile__menu {
  padding: 0 1.25rem;
  height: 80%;
  overflow: auto;
}

/* menu item */
.sidebar-mobile__menu .sidebar-mobile__menu-item {
  line-height: 24px;
}

.sidebar-mobile__menu .sidebar-mobile__menu-item a {
  display: block;
  padding: 12px 30px 12px 12px;
  font-size: 21px;
  color: white;
  font-weight: 700;
}

.sidebar-mobile__menu .sidebar-mobile__menu-item a:hover {
  color: var(--hovercolor);
}
</style>