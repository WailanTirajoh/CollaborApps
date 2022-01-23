<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      shadow
      d-header-home
      fixed-top
      text-center
      p-sm-0
    "
  >
    <div class="container-fluid">
      <NuxtLink class="navbar-brand text-white" to="/">CollaborApps</NuxtLink>
      <div class="ms-auto hide-desktop me-4">
        <div class="nav-item dropdown" v-if="$auth.loggedIn">
          <a
            class="dropdown-toggle text-white"
            href="#"
            id="navbarDropdown"
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
        <div class="nav-item" v-else>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <ul class="navbar-nav mb-2 mb-lg-0 gap-2" v-if="$auth.loggedIn">
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
            <li class="nav-item show-desktop" v-if="!$auth.loggedIn">
              <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
                >Login</NuxtLink
              >
            </li>
            <li class="nav-item dropdown show-desktop" v-else>
              <a
                class="dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
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
                <!-- <li>
                  <NuxtLink class="dropdown-item" to="/auth/profile"
                    >Profile</NuxtLink
                  >
                </li> -->
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
        await this.$auth.logout();
        this.$auth.strategy.token.reset()
      } catch (error) {
        console.log(error);
      }
    },
  },
};
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

.d-header-home {
  background-color: rgba(2, 1, 10, var(--tw-bg-opacity));
}
</style>
