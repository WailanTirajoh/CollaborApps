<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="px-1 col-lg-3 show-desktop">
        <div
          class="rounded shadow-sm px-2 py-2 bg-white mb-2 text-center intro-y"
        >
          <font-awesome-icon :icon="['fas', 'project-diagram']" /> Recent
          Projects
        </div>
        <HomeSideProject class="intro-y" />
      </div>
      <div
        class="px-sm-1 col-12"
        :class="{
          'col-lg-8': !$store.state.chat.isPinned,
          'col-lg-6 pe-sm-4': $store.state.chat.isPinned
        }"
      >
        <div class="row">
          <div class="col-lg-12">
            <HomePostCreate class="intro-y" />
          </div>
          <div class="col-lg-12">
            <HomePost />
          </div>
        </div>
      </div>
      <HomeSideChat />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    next()
  },
  middleware: 'auth',
  head() {
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Homepage'
        }
      ]
    }
  },
  beforeDestroy() {
    this.$echo.leave('post')
  },
  mounted() {
    this.$echo.channel('post').listen('.created', (e) => {
      this.$store.dispatch('posts/addNewPost', e.post)
      this.$toast
        .success(`New post created by ${e.post.user.name}`, {
          position: 'top-right',
          Icon: 'check'
        })
        .goAway(10000)
    })
  },
  methods: {
    ...mapActions(['posts/addNewPost'])
    // addPost(post) {
    //   this.$store.dispatch('posts/addNewPost', post)
    // }
  }
}
</script>
