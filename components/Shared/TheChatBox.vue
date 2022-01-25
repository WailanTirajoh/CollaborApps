<template>
  <div
    class="position-fixed show-desktop chat-box shadow-sm bg-white"
    style="z-index: 10"
    :class="{ pinned: isPinned }"
  >
    <div class="header cursor-pointer" @click="togglePin">
      <div class="d-flex justify-content-between align-items-center py-2 px-2">
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
            :icon="['fas', isPinned ? 'chevron-up' : 'chevron-down']"
          />
        </div>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    isPinned() {
      return this.$store.state.chat.isPinned
    }
  },
  methods: {
    ...mapActions(['chat/updatePin']),
    togglePin() {
      this.$store.dispatch('chat/updatePin')
    }
  }
}
</script>

<style lang="scss" scoped></style>
