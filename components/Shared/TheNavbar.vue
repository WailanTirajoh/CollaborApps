<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark shadow d-header-home fixed-top text-center p-sm-0"
  >
    <div class="container-fluid px-3">
      <NuxtLink class="navbar-brand text-white fw-bold" to="/"
        >KerjaBareng</NuxtLink
      >
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
            <li><a class="dropdown-item" href="#">Profil</a></li>
            <li><a class="dropdown-item" href="#">Pengaturan</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="logout()"
                >Keluar</a
              >
            </li>
          </ul>
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
        <div v-if="!$auth.loggedIn">
          <div class="nav-item">
            <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
              >Masuk</NuxtLink
            >
          </div>
          <div class="nav-item">
            <NuxtLink to="/auth/register" class="nav-link text-decoration-none"
              >Daftar</NuxtLink
            >
          </div>
        </div>

        <ul v-if="$auth.loggedIn" class="navbar-nav mb-2 mb-lg-0 gap-2">
          <li class="nav-item">
            <NuxtLink class="nav-link" aria-current="page" to="/"
              >Beranda</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-transform-capitalize" to="/projects"
              >Projek</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-transform-capitalize" to="/clients"
              >Klien</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-transform-capitalize" to="/teams"
              >Tim</NuxtLink
            >
          </li>
        </ul>

        <div class="d-flex ms-auto">
          <ul v-if="!$auth.loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item show-desktop">
              <NuxtLink to="/auth/login" class="nav-link text-decoration-none"
                >Masuk</NuxtLink
              >
            </li>
            <li class="nav-item show-desktop">
              <NuxtLink
                to="/auth/register"
                class="nav-link text-decoration-none"
                >Daftar</NuxtLink
              >
            </li>
          </ul>
          <ul v-else class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown show-desktop">
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
                    >Pengaturan</NuxtLink
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="logout()"
                    >Keluar</a
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
  // -webkit-backdrop-filter: blur(12px);
  // backdrop-filter: blur(12px);
  // --tw-bg-opacity: 1;
  // --tw-bg-opacity: 0.85;
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
