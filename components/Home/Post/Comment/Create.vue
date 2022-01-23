<template>
  <form @submit.prevent="createComment">
    <div class="d-flex align-items-center gap-2 my-2">
      <img
        class="img-fluid rounded-circle object-fit-cover"
        style="width: 2rem; height: 2rem; z-index: 1"
        :src="$auth.user.avatar"
      />
      <div class="w-100">
        <FormInput
          class="text-sm"
          v-model="form.text"
          type="text"
          id="disabledTextInput"
          :error="error.text"
          :placeholder="`Reply`"
          autocomplete="off"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: Object,
    url: String,
  },
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
    async createComment() {
      this.form.isProcessing = true;
      try {
        var result = await this.$axios.$post(
          `/post/${this.post.id}/comment`,
          this.form
        );
        this.$emit("add-comment", result.comment);
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
