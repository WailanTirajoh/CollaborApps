<template>
  <div
    class="modal fade"
    :id="`theModal-${id}`"
    tabindex="-1"
    aria-labelledby="defaultModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable p-0">
      <div class="modal-content">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    buttonText: String,
  },
};
</script>

<style>
</style>
