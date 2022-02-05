<template>
  <div class="">
    <p>
      <button
        :class="{
          active: $store.state.posts.filter == 'is_pinned',
          'bg-white': $store.state.posts.filter == null
        }"
        class="btn shadow-sm"
        type="button"
        @click="filterOnlyPin"
      >
        Pin
      </button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    filterOnlyPin() {
      this.$store.dispatch('posts/setFilterIsPinned')
    }
  }
}
</script>

<style lang="scss" scoped>
button.active {
  background-color: #e4e6e9 !important;
}
</style>
