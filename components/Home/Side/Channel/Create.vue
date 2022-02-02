<template>
  <!-- Modal -->
  <div
    id="exampleModal"
    ref="theModal"
    class="modal fade"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="z-index: 10000"
  >
    <div class="modal-dialog">
      <form class="modal-content" @submit.prevent="store">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">Buat saluran baru</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <FormInput
                id="name"
                v-model="form.name"
                type="name"
                label="Nama"
                :errors="errors.name"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            ref="modalCloseButton"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Batal
          </button>

          <FormSubmitButton type="submit" :loading="form.isProcessing">
            Simpan
          </FormSubmitButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        isProcessing: false,
        name: ''
      },
      errors: {}
    }
  },
  methods: {
    async store() {
      this.form.isProcessing = true
      try {
        const response = await this.$axios.post('channels', this.form)
        const { message, channel } = response.data
        this.$store.dispatch('channels/addChannels', {
          channels: [channel]
        })
        this.$toast
          .success(message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(5000)
        this.$refs.modalCloseButton.click()
        this.resetForm()
      } catch (e) {
        this.errors = e.response.data.errors
      }
      this.form.isProcessing = false
    },

    resetForm() {
      this.form.isProcessing = false
      this.form.name = ''
      this.errors = {}
    }
  }
}
</script>

<style></style>
