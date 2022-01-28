<template>
  <div
    class="position-fixed top-0 d-flex justify-content-end pe-0 end-0"
    style="z-index: 1"
  >
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
