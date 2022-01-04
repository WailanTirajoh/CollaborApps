<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-12">
        <div class="text-center">
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
              placeholder="john doe"
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
              placeholder="john.doe@example.example"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="********"
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
              placeholder="********"
            />
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <FormSubmitButton
              type="submit"
              class="btn btn-light border px-4 shadow-sm"
              :loading="form.isLoading"
            >
              Register
            </FormSubmitButton>
            <div >or <NuxtLink to="/auth/login">Login</NuxtLink></div>
          </div>
        </form>
      </div>
    </div>
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
        isLoading: false,
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
