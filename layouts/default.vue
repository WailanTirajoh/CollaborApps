<template>
  <div class="bg-gray-400 font-mono">
    <TheNavbar />
    <Nuxt class="container py-4" style="min-height: 90vh" />
  </div>
</template>

<script>
import TheNavbar from "../components/Shared/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
}
.bg-gray {
  &-400 {
    background-color: #f2f2f2;
  }
}
</style>
