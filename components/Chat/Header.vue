<template>
  <div class="header cursor-pointer" @click="togglePin">
    <div
      class="d-flex justify-content-between align-items-center py-2 px-2 w-100"
    >
      <div class="d-flex gap-2">
        <img
          :src="$auth.user.avatar"
          class="img-fluid rounded-circle object-fit-cover w-2r h-2r"
          alt=""
        />
        <h6 class="my-auto">Pesan</h6>
      </div>
      <div class="me-2">
        <font-awesome-icon
          :icon="['fas', isPinned ? 'chevron-down' : 'chevron-up']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isPinned() {
      return this.$store.state.chat.isPinned
    }
  },
  methods: {
    togglePin() {
      this.$store.dispatch('chat/updatePin')
    }
  }
}
</script>

<style></style>
