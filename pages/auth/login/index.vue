<template>
  <div class="mt-5">
    <div class="title">
      <h1>Login Page</h1>
    </div>
    <form
      @submit.prevent="login"
      class="bg-white rounded shadow border p-4 mt-3"
    >
      <div class="mb-3">
        <label for="exampleInputphone_number1" class="form-label">Phone Number</label>
        <input
          v-model="form.phone_number"
          type="text"
          class="form-control"
          id="exampleInputphone_number1"
          aria-describedby="phone_numberHelp"
        />
        <div id="phone_numberHelp" class="form-text">
          We'll never share your phone_number with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Login Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login Page",
        },
      ],
    };
  },
  data() {
    return {
      form: {
        phone_number: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      this.$auth.loginWith("laravelSanctum", {
        data: this.form,
      });
    },
  },
};
</script>

<style>
</style>
