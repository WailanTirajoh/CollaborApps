<template>
  <div class="mt-5">
    <div class="title">
      <h5>Create your account</h5>
    </div>
    <form
      @submit.prevent="register"
      class="bg-white rounded shadow border p-4 mt-3"
    >
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="email-help"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label"
          >Password Confirmation</label
        >
        <input
          v-model="form.password_confirmation"
          type="password"
          class="form-control"
          id="password_confirmation"
        />
      </div>
      <div class="d-flex align-items-center gap-3">
        <button type="submit" class="btn btn-light border px-4 shadow-sm">
          Register
        </button>
        <div class="">or <NuxtLink to="/auth/login">Login</NuxtLink></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Register Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Register Page",
        },
      ],
    };
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    register() {},
  },
};
</script>

<style>
</style>
