<template>
  <div>
    <div class="header">
      <h1>Setting</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-12">
        <form
          @submit.prevent="editProfile"
          class="bg-white rounded shadow p-3 py-4 mt-3"
        >
          <div class="row mb-3">
            <div class="col-lg-12">
              <div class="d-flex justify-content-center position-relative">
                <div class="position-absolute bottom-0 mb-2">
                  <button class="btn btn-sm btn-light" @click.prevent="deleteProfilePhoto">
                    Delete Photo
                  </button>
                </div>
                <img :src="url" class="img-fluid w-50 mb-2 rounded"/>
              </div>
              <input
                type="file"
                class="form-control"
                :class="{ 'is-invalid': error.avatar }"
                @change="onFileChange"
                @input="form.avatar = $event.target.files[0]"
              />
              <div
                :id="`${id}Feedback`"
                class="invalid-feedback"
                v-if="error.avatar"
              >
                {{ error.avatar[0] }}
              </div>
            </div>
            <div class="col-lg-12">
              <FormInput
                v-model="form.name"
                id="name"
                type="text"
                label="Name"
                :error="error.name"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12"></div>
          </div>
          <div class="row align-items-center justify-content-center gap-3">
            <div class="col-lg-12 text-center w-100">
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
        avatar: null,
        isProcessing: false,
      },
      error: {},
      url: this.$auth.user.avatar,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.avatar = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    async editProfile() {
      this.form.isProcessing = true;
      try {
        var formData = new FormData();
        formData.append("name", this.form.name);
        if (this.form.avatar) {
          formData.append("avatar", this.form.avatar);
        }
        var result = await this.$axios.$post(
          "/user/update",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        await this.$auth.fetchUser();
        alert(result.message);
      } catch (e) {
        console.log(e);
        this.error = e.response.data.errors;
        // this.error.avatar = e.response.data.errors;
      }
      this.form.isProcessing = false;
    },
    async deleteProfilePhoto() {
      this.form.isProcessing = true;
      try {
        var result = await this.$axios.$delete(
          "/user/profile-photo"
        );
        await this.$auth.fetchUser();
        this.url = this.$auth.user.avatar;
        alert(result.message);
      } catch (e) {
        console.log(e);
      }
      this.form.isProcessing = false;
    },
  },
};
</script>

<style>
</style>
