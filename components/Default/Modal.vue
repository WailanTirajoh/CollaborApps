<template>
  <div
    class="modal fade"
    id="theModal"
    tabindex="-1"
    aria-labelledby="defaultModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="defaultModal">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    buttonText: String,
  },
};
</script>

<style>
</style>
