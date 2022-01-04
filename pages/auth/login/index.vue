<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-12">
        <div class="text-center">
          <h5>Please login to start the session {{ error.email }}</h5>
        </div>
        <form
          @submit.prevent="login"
          class="bg-white rounded shadow border p-3 mt-3"
        >
          <div class="mb-3">
            <FormInput
              v-model="form.email"
              id="email"
              type="email"
              label="Email"
              :error="error.email"
              aria-describedby="email-help"
              placeholder="johndoe@example.example"
            />
            <div id="email-help" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <FormInput
              v-model="form.password"
              id="password"
              type="password"
              label="Password"
              :error="error.password"
              placeholder="*********"
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
          <div class="d-flex align-items-center justify-content-center gap-3">
            <div class="text-center w-100">
              <div class="d-flex justify-content-center">
                <FormSubmitButton class="w-100" type="submit" :loading="form.isProcessing">
                  Login
                </FormSubmitButton>
              </div>
              <div>or</div>
              <hr>
              <div>
                <div class="text-sm">
                  Doesnt have account?
                </div>
                <NuxtLink class="text-sm" to="/auth/register">Register</NuxtLink>
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
  auth: "guest",
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
        isProcessing: false,
      },
      error: {
        email: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        this.form.isProcessing = true;
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
