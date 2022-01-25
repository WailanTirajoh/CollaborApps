<template>
  <div class="bg-white rounded shadow-sm px-2 py-2">
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
            :placeholder="`Hai ${nickname}, apa yang sedang anda kerjakan?`"
            autocomplete="off"
          />
        </div>
      </div>
      <div
        v-if="url"
        class="my-1 d-flex justify-content-center position-relative"
      >
        <img :src="url" class="img-fluid max-h-250-px" />
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div>
          <label
            v-if="form.file == null"
            for="files"
            class="input-file btn border text-secondary btn-sm h-100 d-flex align-items-center text-sm"
            >Pilih berkas</label
          >
          <div
            v-else
            class="input-file btn border text-secondary btn-sm h-100 d-flex align-items-center text-sm"
            @click="deletePhoto"
          >
            <font-awesome-icon :icon="['fas', 'times-circle']" class="me-1" />
            Hapus
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
        file: null,
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
        if (this.form.file) {
          formData.append('file', this.form.file)
        }
        await this.$axios.$post('/post', formData, {
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
