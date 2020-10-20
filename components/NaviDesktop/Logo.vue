<template>
  <nuxt-link to="/" class="logo block sm:text-3xl md:text-4xl lg:text-5xl uppercase font-sans">{{webname}}</nuxt-link>
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
