<template>
  <div class="row post">
    <div
      v-if="fetching"
      class="d-flex align-items-center justify-content-center"
      style="min-height: 300px"
    >
      <DefaultLoading />
    </div>
    <div v-else>
      <div v-for="(post, index) in posts" :key="index" class="col-lg-12">
        <DefaultModal :id="index">
          <HomePostEdit :post="post" />
        </DefaultModal>
        <HomePostShow :post="post" />
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
    async deletePost(post) {
      if (confirm('Are you sure want to delete this post?')) {
        const response = await this.$axios.$delete(`/post/${post.id}`)
        this.$store.dispatch('posts/removePost', post)
        alert(response.message)
      }
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
          this.scrolledToBottom = true // replace it with your code
        } else {
          this.scrolledToBottom = false // replace it with your code
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
