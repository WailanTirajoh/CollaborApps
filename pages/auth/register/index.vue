<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-12">
        <div class="text-center">
          <h5>Buat akun</h5>
        </div>
        <form
          class="bg-white rounded custom-shadow p-4 mt-3"
          @submit.prevent="register"
        >
          <div class="mb-3">
            <label for="name" class="form-label">Nama lengkap</label>
            <FormInput
              id="name"
              v-model="form.name"
              :error="errors.name"
              type="text"
              placeholder="john doe"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <FormInput
              id="email"
              v-model="form.email"
              :error="errors.email"
              type="email"
              aria-describedby="email-help"
              placeholder="john.doe@example.example"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Kata sandi</label>
            <FormInput
              id="password"
              v-model="form.password"
              :errors="errors.password"
              type="password"
              placeholder="********"
            />
          </div>
          <div class="mb-3">
            <label for="password_confirmation" class="form-label"
              >Konfirmasi</label
            >
            <FormInput
              id="password_confirmation"
              v-model="form.password_confirmation"
              :error="errors.password_confirmation"
              type="password"
              placeholder="********"
            />
          </div>
          <div class="text-center gap-3">
            <div class="d-flex justify-content-center mb-2">
              <FormSubmitButton
                type="submit"
                class="btn btn-light custom-shadow px-4 shadow-sm w-100"
                :loading="form.isLoading"
              >
                Daftar
              </FormSubmitButton>
            </div>
            <hr />
            <div class="text-sm">
              <div>Sudah memiliki akun?</div>
              <div>
                <NuxtLink to="/auth/login">Masuk</NuxtLink>
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
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        isLoading: false
      },
      errors: {}
    }
  },
  head() {
    return {
      title: 'Register Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Register Page'
        }
      ]
    }
  },
  methods: {
    async register() {
      this.form.isLoading = true
      try {
        await this.$axios.post(`register`, this.form)
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
      } catch (e) {
        this.$toast.error(e.response.data.message).goAway(5000)
        this.errors = e.response.data.errors
      }
      this.form.isLoading = false
    }
  }
}
</script>

<style></style>
