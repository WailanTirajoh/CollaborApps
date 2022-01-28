<template>
  <!-- <nav
    class="navbar navbar-expand-lg navbar-light d-header-home fixed-top text-center p-sm-0"
  >
    <div class="container-fluid px-3">
      <NuxtLink class="navbar-brand" to="/">KerjaBareng </NuxtLink>
      <div v-if="$auth.loggedIn" class="ms-auto hide-desktop me-4">
        <div class="nav-item dropdown">
          <a
            id="navbarDropdown"
            class="dropdown-toggle"
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
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse justify-content-end"
      >
        <div v-if="!$auth.loggedIn" class="hide-desktop">
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

        <div class="">
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
          <ul
            v-else
            class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto profile-nav bg-white"
          >
            <li class="nav-item dropdown show-desktop">
              <a
                id="navbarDropdown"
                class="dropdown-toggle color-gray"
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
                class="dropdown-menu dropdown-menu-end text-sm"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NuxtLink class="dropdown-item" to="/auth/setting"
                    ><font-awesome-icon
                      :icon="['fas', 'user-cog']"
                      style="width: 15px"
                    />
                    Pengaturan
                  </NuxtLink>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <div
                    class="dropdown-item cursor-pointer"
                    href="#"
                    @click.prevent="logout()"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'sign-out-alt']"
                      style="width: 15px"
                    />
                    Keluar
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav> -->

  <nav class="container-fluid fixed-top">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6"></div>
      <div class="col-lg-3 d-flex justify-content-end pe-0">
        <li
          class="nav-item dropdown show-desktop bg-white py-2 px-4 user-profile shadow-sm"
        >
          <a
            id="navbarDropdown"
            class="dropdown-toggle color-gray"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              class="img-fluid rounded-circle object-fit-cover w-2r h-2r"
              :src="$auth.user.avatar"
            />
            {{ $auth.user.name }}
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end text-sm"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <NuxtLink class="dropdown-item" to="/auth/setting"
                ><font-awesome-icon
                  :icon="['fas', 'user-cog']"
                  style="width: 15px"
                />
                Pengaturan
              </NuxtLink>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <div
                class="dropdown-item cursor-pointer"
                href="#"
                @click.prevent="logout()"
              >
                <font-awesome-icon
                  :icon="['fas', 'sign-out-alt']"
                  style="width: 15px"
                />
                Keluar
              </div>
            </li>
          </ul>
        </li>
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
