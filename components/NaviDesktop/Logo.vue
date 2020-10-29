<template>
  <!-- <nuxt-link to="/" class="logo block sm:text-3xl md:text-4xl lg:text-5xl uppercase">{{webname}}</nuxt-link> -->
  <nuxt-link to="/" class="logo block sm:text-3xl md:text-4xl lg:text-5xl uppercase">Nông Nghiệp 365</nuxt-link>
</template>

<script>
export default {
  computed : {
    webname() {
      return process.env.Webname
    }
  }
}
</script>
<style scoped>

</style>
