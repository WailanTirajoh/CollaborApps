<template>
  <div class="position-sticky" style="z-index: 1; top: 0">
    <div class="nav-item dropdown">
      <a
        id="navbarDropdown"
        class="dropdown-toggle color-gray"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          class="img-fluid object-fit-cover hover-float"
          style="border-radius: 0 0 2rem 2rem"
          :src="$auth.user.avatar"
        />
      </a>
      <ul
        class="dropdown-menu custom-shadow-box dropdown-menu-end text-sm hover-float"
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
    </div>
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

<style></style>
