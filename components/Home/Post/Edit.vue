<template>
  <div class="bg-white rounded shadow-sm px-2 py-2">
    <form @submit.prevent="updatePost">
      <div class="d-flex align-items-center gap-3">
        <img
          class="img-fluid rounded-circle object-fit-cover w-3r h-3r"
          :src="$auth.user.avatar"
        />
        <div class="w-100" autocomplete="off">
          <FormTextArea
            id="disabledTextInput"
            v-model="form.text"
            type="text"
            :errors="error.text"
            :placeholder="`Hi ${$auth.user.name}, what are you thinking right now?`"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <FormSubmitButton
          class="btn-sm p-1"
          type="submit"
          :loading="form.isProcessing"
          :disabled="!form.text"
        >
          Update
        </FormSubmitButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        text: this.post.text,
        isProcessing: false
      },
      error: {}
    }
  },
  methods: {
    async updatePost() {
      this.form.isProcessing = true
      try {
        const result = await this.$axios.$put(
          `/posts/${this.post.id}`,
          this.form
        )
        alert(result.message)
        this.$store.dispatch('posts/editPost', result.post)
      } catch (e) {
        if (e.response.data) {
          this.error = e.response.data.errors
        }
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
