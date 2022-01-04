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
      <div class="d-flex justify-content-between">
        <div class="">Chat</div>
        <button @click="togglePin">{{ isPinned ? "Unpin" : "Pin" }}</button>
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
.chat-box {
  transition: all 0.35s ease-in-out;
  width: 400px;
  height: 80vh;
  right: 0;
  border-radius: 0px 200px 200px 0px;
  transform: translateX(275px);
  border-radius: 1rem;
  &:hover {
    transform: translateX(0px);
  }
  &.pinned {
    transform: translateX(0px);
  }
}
</style>
