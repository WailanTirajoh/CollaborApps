<template>
  <div
    class="
      px-1
      position-fixed
      show-desktop
      chat-box
      bg-blizard-blue
      shadow
      px-2
      py-2
      bg-white
    "
    :class="{ pinned: isPinned }"
    style=""
  >
    <div class="h-100">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h3 class="my-auto">Chat</h3>
        </div>
        <button class="btn me-2" @click="togglePin">
          <div v-if="isPinned">
            <font-awesome-icon :icon="['fas', 'ghost']" />
          </div>
          <div v-else>
            <font-awesome-icon :icon="['fas', 'thumbtack']" />
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
export default {
  data() {
    return {
      isPinned: true,
    };
  },
  methods: {
    togglePin() {
      this.isPinned = !this.isPinned;
      this.$emit("chatClicked", this.isPinned);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
