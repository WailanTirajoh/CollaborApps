<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">MyFirstNuxt</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <button
                type="button"
                class="btn btn-primary"
                @click="incrementTotalInvoice()"
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="decrementTotalInvoice()"
              >
                -
              </button>

              {{
                totalInvoice
              }}

              <li class="nav-item" v-if="!$auth.loggedIn">
                <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
                  >Login</NuxtLink
                >
              </li>
              <li class="nav-item" v-else>
                <a
                  class="cursor-pointer text-decoration-none nav-link"
                  to="#"
                  @click.prevent="logout()"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

  // VUE

  computed: {
    totalInvoice() {
      // return this.$store.state.invoice.totalInvoice

      return this.$store.getters["invoice/getTotalInvoice"]();
    },
  },

  methods: {
    async logout() {
      try {
        await this.$auth.logout();
      } catch (error) {
        console.log(error);
      }
    },
    incrementTotalInvoice() {
      this.$store.dispatch(
        "invoice/setNewTotalMutation",
        this.totalInvoice + 1
      );
    },
    decrementTotalInvoice() {
      this.$store.dispatch(
        "invoice/setNewTotalMutation",
        this.totalInvoice - 1
      );
    },

    async test(){

    }
  },
};
</script>

<style lang="scss" scoped>
</style>
