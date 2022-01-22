<template>
  <div class="bg-white rounded shadow px-2 py-2">
    <form @submit.prevent="createPost">
      <div class="d-flex align-items-center gap-3">
        <img
          class="img-fluid rounded-circle object-fit-cover w-3r h-3r"
          :src="$auth.user.avatar"
        />
        <div class="w-100" autocomplete="off">
          <FormTextArea
            v-model="form.text"
            type="text"
            id="disabledTextInput"
            :error="error.text"
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
          Send
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
        text: null,
        isProcessing: false,
      },
      error: {},
    };
  },
  methods: {
    async createPost() {
      this.form.isProcessing = true;
      try {
        var result = await this.$axios.$post("/post", this.form);
        this.$emit("push-post", result.post);
      } catch (e) {
        console.log(e);
        this.error = e.response.data.errors;
      }
      this.resetForm();
    },
    resetForm() {
      this.form.text = null;
      this.form.isProcessing = false;
    },
  },
};
</script>

<style>
</style>
