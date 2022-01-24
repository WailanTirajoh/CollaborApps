<template>
  <div
    class="px-1 position-fixed show-desktop chat-box bg-blizard-blue shadow px-2 py-2 bg-white"
    style="z-index: 10"
    :class="{ pinned: isPinned }"
  >
    <div class="h-100">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h3 class="my-auto">Pesan</h3>
        </div>
        <button class="btn me-2" @click="togglePin">
          <div v-if="isPinned">
            <font-awesome-icon :icon="['fas', 'unlock']" />
          </div>
          <div v-else>
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
        </button>
      </div>
      <div class="">
        <hr />
      </div>
    </div>
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
