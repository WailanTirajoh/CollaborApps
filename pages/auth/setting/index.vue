<template>
  <div>
    <div class="header">
      <h1>Setting</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-12">
        <form
          @submit.prevent="editProfile"
          class="bg-white rounded shadow border p-3 mt-3"
        >
          <div class="mb-3">
            <FormInput
              v-model="form.name"
              id="name"
              type="text"
              label="Name"
              :error="error.name"
              placeholder="John Doe"
            />
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <div class="text-center w-100">
              <div class="d-flex justify-content-center">
                <FormSubmitButton
                  class="w-100"
                  type="submit"
                  :loading="form.isProcessing"
                >
                  Update
                </FormSubmitButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Setting Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Setting Page",
        },
      ],
    };
  },
  data() {
    return {
      form: {
        name: this.$auth.user.name,
        isProcessing: false,
      },
      error: {
        name: null,
      },
    };
  },
  methods: {
    async editProfile() {
      this.form.isProcessing = true;
      try {
        await this.$auth.loginWith("laravelSanctum", {
          data: this.form,
        });
      } catch (e) {
        console.log(e);
        this.error.email = e.response.data.errors.email[0];
      }
      this.form.isProcessing = false;
    },
  },
};
</script>

<style>
</style>
