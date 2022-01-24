<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark shadow d-header-home fixed-top text-center p-sm-0"
  >
    <div class="container-fluid">
      <NuxtLink class="navbar-brand text-white" to="/">CollaborApps</NuxtLink>
      <div class="ms-auto hide-desktop me-4">
        <div v-if="$auth.loggedIn" class="nav-item dropdown">
          <a
            id="navbarDropdown"
            class="dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              class="img-fluid rounded-circle object-fit-cover w-2r h-2r"
              :src="$auth.user.avatar"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Setting</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="logout()"
                >Logout</a
              >
            </li>
          </ul>
        </div>
        <div v-else class="nav-item">
          <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
            >Login</NuxtLink
          >
        </div>
      </div>
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
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <div>
          <ul v-if="$auth.loggedIn" class="navbar-nav mb-2 mb-lg-0 gap-2">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link text-transform-capitalize"
                to="/projects"
                >projects</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-transform-capitalize" to="/clients"
                >clients</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-transform-capitalize" to="/teams"
                >teams</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="d-flex ms-auto">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="!$auth.loggedIn" class="nav-item show-desktop">
              <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
                >Login</NuxtLink
              >
            </li>
            <li v-else class="nav-item dropdown show-desktop">
              <a
                id="navbarDropdown"
                class="dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="img-fluid rounded-circle object-fit-cover w-2r h-2r"
                  :src="$auth.user.avatar"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/auth/setting"
                    >Setting</NuxtLink
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="logout()"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        this.$auth.strategy.token.reset()
      } catch (error) {}
    }
  }
}
</script>

<style lang="scss" scoped>
.d-header,
.d-header-home {
  border-style: none;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  --tw-bg-opacity: 1;
  --tw-bg-opacity: 0.85;
  height: var(--header-height);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  z-index: 50;
  color: white;
}

// .d-header-home {
//   background-color: rgba(2, 1, 10, var(--tw-bg-opacity));
// }
</style>
