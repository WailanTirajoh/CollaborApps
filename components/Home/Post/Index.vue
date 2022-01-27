<template>
  <div class="row post">
    <div
      v-if="fetching"
      class="d-flex align-items-center justify-content-center intro-y"
      style="min-height: 300px"
    >
      <DefaultLoading />
    </div>
    <div v-else>
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="col-lg-12 intro-y"
      >
        <DefaultModal :id="index">
          <HomePostEdit :post="post" />
        </DefaultModal>
        <HomePostShow v-if="post" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledToBottom: false,
      pageHeight: null,
      fetching: false,
      thePost: null
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  mounted() {
    this.scroll()
    this.fetch()
  },
  methods: {
    async fetch() {
      this.fetching = true
      await this.$store.dispatch('posts/fetchPost')
      this.fetching = false
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight >
          document.documentElement.offsetHeight - 50

        if (bottomOfWindow) {
          this.scrolledToBottom = true
        } else {
          this.scrolledToBottom = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  .dropdown-menu {
    min-width: 5rem;
    li {
      .dropdown-item {
        padding: 0.25rem 0.45rem;
      }
    }
  }
}
</style>
