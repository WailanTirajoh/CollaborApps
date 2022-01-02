<template>
  <div class="mt-5">
    <div class="title">
      <h1>
        Login Page
        <div v-if="$auth.loggedIn">{{ $auth.user.name }}</div>
      </h1>
    </div>
    <form
      @submit.prevent="login"
      class="bg-white rounded shadow border p-4 mt-3"
    >
      <div class="mb-3">
        <label for="exampleInputemail1" class="form-label"
          >Email</label
        >
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="exampleInputemail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
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
        email: null,
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
