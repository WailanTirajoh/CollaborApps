<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="col-lg-3 position-relative">
        <div class="px-1 show-desktop position-sticky" style="top: 60px">
          <div
            class="rounded shadow-sm px-2 py-2 bg-white mb-2 text-center intro-y"
          >
            <font-awesome-icon :icon="['fas', 'project-diagram']" />
            Projek
          </div>
          <HomeSideProject class="intro-y" />
        </div>
      </div>
      <div class="px-sm-1 col-12 col-lg-6">
        <div class="row">
          <div class="col-lg-12">
            <HomePostCreate class="intro-y" />
          </div>
          <div class="col-lg-12">
            <HomePost />
          </div>
        </div>
      </div>
      <div class="col-lg-3 position-relative">
        <div class="px-1 show-desktop position-sticky" style="top: 60px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave('post', 'toastr', 'home.1', `users.${this.$auth.user.id}`)
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
      .listen('.comment.created', (e) => {
        this.$store.dispatch('posts/addComment', {
          post: e.post,
          comment: e.comment
        })
      })
      .listen('.comment.deleted', (e) => {
        this.$store.dispatch('posts/deleteComment', {
          post: e.post,
          comment: e.comment
        })
      })
      .listen('.react.created', (e) => {
        this.$store.dispatch('posts/addReact', {
          post: e.post,
          react: e.react
        })
      })
      .listen('.react.deleted', (e) => {
        this.$store.dispatch('posts/deleteReact', {
          post: e.post,
          react: e.react
        })
      })

    this.$echo.channel('toastr').listen('.message', (e) => {
      this.$toast
        .success(e.message, {
          position: 'top-right',
          Icon: 'check'
        })
        .goAway(4500)
    })
    this.$echo
      .private(`users.${this.$auth.user.id}`)
      .listen('.post.commented', (e) => {
        this.$toast
          .success(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(4500)
      })
      .listen('.post.reacted', (e) => {
        this.$toast
          .success(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(4500)
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
