<template>
  <div class="font-mono position-relative">
    <SharedTheNavbar />
    <section class="container-fluid">
      <SharedTheChatBox />
      <Nuxt />
    </section>
    <SharedTheFooter />
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
