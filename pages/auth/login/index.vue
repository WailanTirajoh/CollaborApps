<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-12">
        <div class="text-center">
          <h5>Login untuk memulai sesi</h5>
        </div>
        <form
          class="bg-white rounded shadow custom-shadow p-3 mt-3"
          @submit.prevent="login"
        >
          <div class="mb-3">
            <FormInput
              id="email"
              v-model="form.email"
              type="email"
              label="Email"
              :errors="errors.email"
              aria-describedby="email-help"
              placeholder="johndoe@example.example"
            />
            <div id="email-help" class="form-text">
              Kami tidak akan menyebarkan email anda kepada siapapun.
            </div>
          </div>
          <div class="mb-3">
            <FormInput
              id="password"
              v-model="form.password"
              type="password"
              label="Password"
              :errors="errors.password"
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
            <label class="form-check-label" for="remember">Ingat saya</label>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <div class="text-center w-100">
              <div class="d-flex justify-content-center">
                <FormSubmitButton
                  class="w-100"
                  type="submit"
                  :loading="form.isProcessing"
                >
                  Masuk
                </FormSubmitButton>
              </div>
              <!-- <div>or</div> -->
              <hr />
              <div>
                <div class="text-sm">Tidak memiliki akun?</div>
                <NuxtLink class="text-sm" to="/auth/register">Daftar</NuxtLink>
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
  layout: 'login',
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
      errors: {
        email: null,
        password: null
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
        await this.$auth.loginWith('local', {
          data: this.form
        })
      } catch (e) {
        this.$toast.error('ups coba kembali').goAway(5000)
        this.errors = e.response.data.errors
      }
      this.form.isProcessing = false
    }
  }
}
</script>
