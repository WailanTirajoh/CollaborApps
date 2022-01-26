<template>
  <form @submit.prevent="createComment">
    <div class="d-flex align-items-center gap-2 mb-2">
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
          :disabled="form.isProcessing"
          :errors="error.text"
          :placeholder="`Balas pesan ${nickname}`"
          autocomplete="off"
        />
        <button class="btn text-sm" :disabled="form.text == ''">
          <font-awesome-icon
            :class="{ 'me-1': true, 'fa-pulse': form.isProcessing }"
            :icon="['fas', form.isProcessing ? 'spinner' : 'paper-plane']"
          />
        </button>
      </div>
    </div>
  </form>
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
        text: '',
        isProcessing: false
      },
      error: {}
    }
  },
  computed: {
    nickname() {
      return this.post.user.name.split(' ')[0]
    }
  },
  methods: {
    async createComment() {
      if (this.form.text == '') return
      this.form.isProcessing = true
      try {
        const response = await this.$axios.$post(
          `/post/${this.post.id}/comment`,
          this.form
        )
        this.$toast
          .success(response.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
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

<style></style>
