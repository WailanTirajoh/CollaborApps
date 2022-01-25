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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave('post')
    next()
  },
  middleware: 'auth',
  data() {
    return {
      toastr: {
        isConnected: false
      }
    }
  },
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
    this.$echo.leave('post', 'hello')
  },
  mounted() {
    this.$echo
      .channel('post')
      .listen('.created', (e) => {
        this.$store.dispatch('posts/addNewPost', e.post)
      })
      .listen('.deleted', (e) => {
        this.$store.dispatch('posts/removePost', e.post)
      })

    if (!this.toastr.isConnected) {
      this.$echo.channel('toastr').listen('.message', (e) => {
        this.$toast
          .success(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(4500)
      })
      this.toastr.isConnected = true
    }
  },
  methods: {
    ...mapActions(['posts/addNewPost'])
  }
}
</script>
