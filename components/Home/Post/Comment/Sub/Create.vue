<template>
  <form class="position-relative h-left-border" @submit.prevent="createComment">
    <div class="d-flex align-items-center gap-2 mb-1">
      <img
        class="img-fluid rounded-circle object-fit-cover"
        style="width: 2rem; height: 2rem; z-index: 1"
        :src="$auth.user.avatar"
      />
      <div class="w-100 d-flex">
        <FormInput
          id="disabledTextInput"
          v-model="form.text"
          class="text-sm w-100"
          type="text"
          :errors="error.text"
          :placeholder="`Reply`"
          autocomplete="off"
        />
        <button class="btn text-sm">
          <font-awesome-icon class="me-1" :icon="['far', 'paper-plane']" />
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        text: null,
        isProcessing: false
      },
      error: {}
    }
  },
  methods: {
    async createComment() {
      this.form.isProcessing = true
      if (this.form.text == null) return
      try {
        const result = await this.$axios.$post(
          `/comment/${this.comment.id}/subComment`,
          this.form
        )
        this.$emit('add-comment', result.comment)
      } catch (e) {
        this.error = e.response.data.errors
      }
      this.resetForm()
    },
    resetForm() {
      this.form.text = null
      this.form.isProcessing = false
    }
  }
}
</script>
