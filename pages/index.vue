<template>
  <div>
    <div class="row" style="min-height: 100vh">
      <HomeSideServer />
      <div
        class="channel col-md-2 show-desktop position-relative px-0 custom-border-right"
      >
        <HomeSideChannel />
      </div>
      <div class="col-12 col-md-6 py-2 custom-border-right">
        <HomePostCreate class="intro-y" />
        <HomePost />
      </div>
      <div class="col-md-3 peoples position-relative">
        <HomeSideRoom :channel-id="1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave('post', 'home.1', `users.${this.$auth.user.id}`)
    next()
  },
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
  mounted() {
    this.$echo
      .channel('post')
      .listen('.created', (e) => {
        this.$store.dispatch('posts/addPost', e.post)
      })
      .listen('.deleted', (e) => {
        this.$store.dispatch('posts/deletePost', e.post)
      })
  }
}
</script>
