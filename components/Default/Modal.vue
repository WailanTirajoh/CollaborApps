<template>
  <div
    :id="`theModal-${id}`"
    class="modal fade"
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
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    buttonText: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
