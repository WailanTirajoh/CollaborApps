<template>
  <div class="">{{ channelId }}</div>
</template>

<script>
export default {
  computed: {
    channelId() {
      return this.$route.params.id
    }
  }
}
</script>

<style></style>
