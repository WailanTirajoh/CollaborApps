<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    Stay and steady, redirecting you to channel
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      hide: false
    }
  },
  head() {
    return {
      title: 'Beranda',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Beranda'
        }
      ]
    }
  },
  async mounted() {
    await this.$store.dispatch('channels/fetchChannels')
    const channels = this.$store.state.channels.channels
    this.$router.push(`/channels/${channels[0].slug}`)
  }
}
</script>
