<template>
  <div class="bg-white rounded shadow-sm px-2 py-2 mb-2">
    <form @submit.prevent="createPost">
      <div class="d-flex gap-3">
        <img
          class="img-fluid rounded-circle object-fit-cover w-3r h-3r mt-2"
          :src="$auth.user.avatar"
        />
        <div class="w-100" autocomplete="off">
          <FormTextArea
            id="disabledTextInput"
            v-model="form.text"
            type="text"
            :disabled="form.isProcessing"
            :errors="error.text"
            :placeholder="`Hai ${nickname}, what are you working on?`"
            autocomplete="off"
          />
        </div>
      </div>
      <div
        v-if="url"
        class="my-1 d-flex justify-content-center position-relative bg-gray rounded p-1"
      >
        <img :src="url" class="img-fluid rounded max-h-250-px" />
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div>
          <label
            v-if="form.file == null"
            for="files"
            class="input-file btn border text-secondary btn-sm h-100 d-flex align-items-center text-sm"
            >Choose File</label
          >
          <div
            v-else
            class="input-file btn custom-shadow text-secondary btn-sm h-100 d-flex align-items-center text-sm"
            @click="deletePhoto"
          >
            <font-awesome-icon :icon="['fas', 'times-circle']" class="me-1" />
            Delete
          </div>
          <input
            id="files"
            style="visibility: hidden; display: none"
            type="file"
            accept="image/*"
            @change="onFileChange"
          />
        </div>
        <FormSubmitButton
          class="btn btn-sm p-1 text-secondary"
          type="submit"
          :loading="form.isProcessing"
          :disabled="!form.text"
        >
          Send
        </FormSubmitButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    channelId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        text: '',
        file: null,
        channel_id: this.channelId,
        isProcessing: false
      },
      error: {},
      url: null
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
        const formData = new FormData()
        formData.append('text', this.form.text)
        formData.append('channel_id', this.form.channel_id)
        if (this.form.file) {
          formData.append('file', this.form.file)
        }
        await this.$axios.$post(`/channels/${this.channelId}/posts`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.resetForm()
      } catch (e) {
        this.error = e.response.data.errors
      }
    },
    onFileChange(e) {
      if (e.target.files[0]) {
        const file = e.target.files[0]
        this.form.file = file
        this.url = URL.createObjectURL(file)
      }
    },
    deletePhoto() {
      this.form.file = null
      this.url = null
    },
    resetForm() {
      this.form.text = ''
      this.form.isProcessing = false
      this.deletePhoto()
    }
  }
}
</script>
