<template>
  <div class="">
    <div class="row">
      <div class="col-12 col-md-8 py-2 bg-dark-4 custom-border-right">
        <HomePost :channel-id="channelId" />
      </div>
      <div class="col-md-4 peoples position-relative">
        <HomeSideRoom :channel-id="channelId" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'channel',
  middleware: 'auth',
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
  computed: {
    channelId() {
      return this.$route.params.id
    }
  },
  beforeDestroy() {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave(`channels.${this.channelId}.posts`)
  },
  mounted() {
    this.$echo
      .channel(`channels.${this.channelId}.posts`)
      .listen('.created', (e) => {
        this.$store.dispatch('posts/addPost', e.post)
      })
      .listen('.deleted', (e) => {
        this.$store.dispatch('posts/deletePost', e.post)
      })
  }
}
</script>
