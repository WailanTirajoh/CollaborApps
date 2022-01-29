<template>
  <div>
    <div class="row" style="min-height: 100vh">
      <div
        class="col-md-1 server show-desktop tw-bg-blue-900 bg-light shadow-sm"
        :class="{ hide: hide }"
      >
        <HomeSideServer />
      </div>
      <div
        class="channel col-md-2 show-desktop position-relative px-0 custom-border-right"
      >
        <HomeSideChannel style="border-radius: 2rem" />
      </div>
      <div class="col-12 col-md-6 py-2 bg-dark-4 custom-border-right">
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
    // this.hide = true
    // await new Promise((resolve) => setTimeout(resolve, 500))
    next()
  },
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
