<template>
  <button
    class="btn btn-light border px-4 d-flex align-items-center gap-1 text-center justify-content-center"
    :class="{ loading: loading }"
    :disabled="loading"
  >
    <div v-if="!loading">
      <slot />
    </div>
    <div
      v-if="loading"
      class="spinner-border text-center"
      role="status"
      style="width: 1rem; height: 1rem"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>
<style lang="scss" scoped>
button {
  min-width: 5.5rem;
  height: 2.25rem;
  transition: all 0.35s ease;
  &.loading {
    height: 2rem;
    min-width: 2rem !important;
  }
}
</style>
