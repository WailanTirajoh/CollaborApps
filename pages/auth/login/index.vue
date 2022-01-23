<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-12">
        <div class="text-center">
          <h5>Please login to start the session {{ error.email }}</h5>
        </div>
        <form
          class="bg-white rounded shadow border p-3 mt-3"
          @submit.prevent="login"
        >
          <div class="mb-3">
            <FormInput
              id="email"
              v-model="form.email"
              type="email"
              label="Email"
              :errors="error.email"
              aria-describedby="email-help"
              placeholder="johndoe@example.example"
            />
            <div id="email-help" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <FormInput
              id="password"
              v-model="form.password"
              type="password"
              label="Password"
              :errors="error.password"
              placeholder="*********"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              id="remember"
              v-model="form.remember"
              type="checkbox"
              class="form-check-input"
            />
            <label class="form-check-label" for="remember">Remember me</label>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <div class="text-center w-100">
              <div class="d-flex justify-content-center">
                <FormSubmitButton
                  class="w-100"
                  type="submit"
                  :loading="form.isProcessing"
                >
                  Login
                </FormSubmitButton>
              </div>
              <!-- <div>or</div> -->
              <hr />
              <div>
                <div class="text-sm">Doesnt have account?</div>
                <NuxtLink class="text-sm" to="/auth/register"
                  >Register</NuxtLink
                >
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
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      form: {
        email: null,
        password: null,
        remember: false,
        isProcessing: false
      },
      error: {
        email: null
      }
    }
  },
  head() {
    return {
      title: 'Login Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login Page'
        }
      ]
    }
  },
  methods: {
    async login() {
      this.form.isProcessing = true
      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: this.form
        })
      } catch (e) {
        this.error.email = e.response.data.errors.email[0]
      }
      this.form.isProcessing = false
    }
  }
}
</script>
