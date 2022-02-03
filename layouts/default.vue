<template>
  <div class="font-mono position-relative">
    <section class="container-fluid">
      <SharedTheChatBox />
      <div class="row" style="min-height: 100vh">
        <div
          class="col-md-1 server show-desktop tw-bg-blue-900 bg-light shadow-sm p-0"
        >
          <HomeSideServer />
        </div>
        <div class="row">
          <div class="col-lg-12">
            <Nuxt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    this.$echo.leave('toastr', `users.${this.$auth.user.id}`)
  },
  mounted() {
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
      .listen('.post.comment.created', (e) => {
        this.$toast
          .success(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(4500)
      })
      .listen('.post.react.created', (e) => {
        this.$toast
          .success(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(4500)
      })
  }
}
</script>
