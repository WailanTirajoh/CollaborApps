<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="col-lg-3 pe-1 position-relative">
        <div class="show-desktop position-sticky" style="top: 0px">
          <HomeSideRoom class="intro-y" />
        </div>
      </div>
      <div
        class="col-12 col-lg-6 py-4"
        style="border-left: 1px solid rgba(108, 117, 125, 0.5)"
      >
        <HomePostCreate class="intro-y" />
        <HomePost />
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
    // this.$echo
    //   .join(`home.1`)
    //   .here((users) => {
    //     //
    //   })
    //   .whisper('typing', {
    //     name: this.$auth.user.name
    //   })
    //   .listenForWhisper('typing', (e) => {
    //     console.log(e)
    //   })
    //   .joining((user) => {
    //     this.$toast
    //       .success(`${user.name} masuk ke halaman ini`, {
    //         position: 'top-right',
    //         Icon: 'check'
    //       })
    //       .goAway(4500)
    //   })
    //   .leaving((user) => {
    //     this.$toast
    //       .success(`${user.name} keluar dari halaman ini`, {
    //         position: 'top-right',
    //         Icon: 'check'
    //       })
    //       .goAway(4500)
    //   })
    //   .error((error) => {
    //     console.error(error)
    //   })
    //   .listen('.index', (e) => {
    //     console.log(e)
    //   })
  }
}
</script>
