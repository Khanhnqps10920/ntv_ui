<template>
  <div class="relative z-10">
    <div class="w-full fixed top-0 left-0 bg-white shadow" style="opacity : 95%">
      <Container1640>
        <div class="flex sm:flex-wrap items-center text-black h-16">
          <!-- <Logo /> -->
          <div>
            <nuxt-link
              to="/"
              class="logo block md:text-2xl lg:text-2xl uppercase font-sans mr-5"
            >Pulses pro</nuxt-link>
          </div>
          <div class="flex">
            <nuxt-link
              :to="tag.to"
              v-for="(tag,i) in menuTags"
              :key="i"
              class="mr-5 sm:mr-3 font-bold sm:text-xs md:text-xs lg:text-sm hover:text-hovercolor"
            >{{tag.name}}</nuxt-link>
          </div>
        </div>
      </Container1640>
    </div>
  </div>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
// import Logo from "@/components/NaviDesktop/Logo"
export default {
  components: {
    Container1640
    // Logo,
  },
  props: {
    menuTags: {
      type: Array,
      required: true
    }
  }
};
</script>