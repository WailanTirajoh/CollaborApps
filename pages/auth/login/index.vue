<template>
  <div class="mt-5">
    <div class="title">
      <h5>Please login to start the session {{ form.isLoading }}</h5>
    </div>
    <form
      @submit.prevent="login"
      class="bg-white rounded shadow border p-4 mt-3"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="email-help"
        />
        <div id="email-help" class="form-text">
          We'll never share your email with anyone else.
        </div>
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
      <div class="mb-3 form-check">
        <input
          v-model="form.remember"
          type="checkbox"
          class="form-check-input"
          id="remember"
        />
        <label class="form-check-label" for="remember">Remember me</label>
      </div>
      <div class="d-flex align-items-center gap-3">
        <button type="submit" class="btn btn-light border px-4 shadow-sm">
          Login
        </button>
        <div class="">or <NuxtLink to="/auth/register">Register</NuxtLink></div>
      </div>
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
        remember: false,
        isLoading: false,
      },
    };
  },
  methods: {
    async login() {
      // this.$auth
      //   .loginWith("laravelSanctum", {
      //     data: this.form,
      //   })
      //   .then((e) => {
      //     // Kasih pop up login berhasil
      //   })
      //   .error((error) => {
      //     console.log(error);
      //   })
      //   .finally((e) => {
      //     this.form.isLoading = false;
      //   });

      try {
        this.form.isLoading = true;
        await this.$auth.loginWith("laravelSanctum", {
          data: this.form,
        });
      } catch (e) {
        // log error or do some thing
      }
      this.form.isLoading = false;
    },
  },
};
</script>

<style>
</style>
