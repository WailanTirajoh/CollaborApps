<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="col-lg-3 position-relative">
        <div class="show-desktop position-sticky pr-1" style="top: 70px">
          <HomeSideRoom class="intro-y" />
        </div>
      </div>
      <div class="col-12 col-lg-6 px-0">
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
