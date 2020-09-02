<template>
  <div class="bg-black">
    <Container1640>
      <div class="flex items-center text-xs text-white h-8">
        <nuxt-link to class="mr-5 hover:text-hovercolor">Advertise</nuxt-link>
        <nuxt-link to class="mr-5 hover:text-hovercolor">About</nuxt-link>
        <nuxt-link to class="mr-5 hover:text-hovercolor">Events</nuxt-link>
        <nuxt-link to class="mr-5 hover:text-hovercolor">Write for us</nuxt-link>
        <nuxt-link to class="mr-5 hover:text-hovercolor">In the press</nuxt-link>
        <nuxt-link to class="ml-auto hover:text-hovercolor">Sign In / Join</nuxt-link>
        <h1 class=test>background: var(--boo-mint-green);</h1>
      </div>
    </Container1640>
  </div>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
export default {
  components: {
    Container1640
  }
};
</script>

<style scoped>
.test {
    color : var(--maincolor)
}
</style>