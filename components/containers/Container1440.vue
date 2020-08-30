<template>
  <div class="container-max-1440">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-max-1440 {
  max-width: 1440px;
  width : auto !important;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>
