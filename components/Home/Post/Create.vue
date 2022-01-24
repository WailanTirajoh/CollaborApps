<template>
  <div class="bg-white rounded shadow-sm px-2 py-2">
    <form @submit.prevent="createPost">
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
            :placeholder="`Hai ${nickname}, apa yang sedang anda kerjakan?`"
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
          Kirim
        </FormSubmitButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        text: '',
        isProcessing: false
      },
      error: {}
    }
  },
  computed: {
    nickname() {
      return this.$auth.user.name.split(' ')[0]
    }
  },
  methods: {
    async createPost() {
      this.form.isProcessing = true
      if (this.form.text == '') return
      try {
        await this.$axios.$post('/post', this.form)
      } catch (e) {
        this.error = e.response.data.errors
      }
      this.resetForm()
    },
    resetForm() {
      this.form.text = ''
      this.form.isProcessing = false
    }
  }
}
</script>
