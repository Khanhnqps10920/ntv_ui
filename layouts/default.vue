<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://kit.fontawesome.com/a767a8054c.js",
          crossorigin: "anonymous",
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Gelasio:wght@400;700&family=Source+Sans+Pro:wght@200&display=swap",
          rel: "stylesheet",
        },
        {
          link:
            "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap",
          rel: "stylesheet",
        },
      ],
    };
  },
};
</script>

<style>
</style>
