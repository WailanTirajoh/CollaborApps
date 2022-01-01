<template>
  <div>
    <TheNavbar />
    <slot />
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
</style>
