<template>
  <div class="position-sticky" style="z-index: 1; top: 0; height: 100vh">
    <div class="position-relative h-100">
      <div class="">
        <NuxtLink to="/auth/setting">
          <img
            class="img-fluid object-fit-cover"
            style="border-radius: 0 0 2rem 2rem"
            :src="$auth.user.avatar"
          />
        </NuxtLink>
      </div>
      <hr class="text-secondary" />
      <NuxtLink
        to="/channels"
        class="text-secondary text-center p-3 border-bottom d-block"
      >
        <font-awesome-icon :icon="['fas', 'home']" />
      </NuxtLink>
      <NuxtLink
        to="/notification/unread"
        class="text-secondary text-center p-3 border-bottom d-block"
      >
        <font-awesome-icon :icon="['fas', 'bell']" />
      </NuxtLink>
      <div
        class="position-absolute bottom-0 bg-light w-100 text-center"
        style="height: 10vh"
      >
        <button
          class="bg-gray text-black text-secondary p-1 px-4 border shadow-sm w-100 h-100"
          @click.prevent="logout()"
        >
          <font-awesome-icon
            :icon="['fas', 'power-off']"
            style="width: 3vh; height: 3vh"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        if (confirm(`Ingin logout?`)) {
          this.$auth.strategy.token.reset()
          await this.$auth.logout()
        }
      } catch (error) {}
    }
  }
}
</script>

<style></style>
