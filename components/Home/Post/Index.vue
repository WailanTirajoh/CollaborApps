<template>
  <div class="row post">
    <div class="col-lg-12">
      <HomePostCreate :channel-id="channelId" />
    </div>
    <div class="col-lg-12">
      <HomePostFilter :channel-id="channelId" @fetch-posts="fetch" />
    </div>
    <div v-for="post in posts" :key="post.id" class="col-lg-12 intro-y">
      <HomePostShow :post="post" :channel-id="channelId" />
    </div>
    <div v-if="$store.state.posts.noData" class="col-lg-12">
      <div class="text-center text-sm text-secondary mt-2">End of the line</div>
      <hr class="mt-1 pt-0" />
    </div>
    <div v-else-if="fetching" class="col-lg-12">
      <div
        class="d-flex align-items-center justify-content-center intro-y"
        style="min-height: 300px"
      >
        <DefaultLoading />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channelId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scrolledToBottom: false,
      pageHeight: null,
      fetching: false,
      thePost: null,
      infiniteScroll: false
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  watch: {
    scrolledToBottom() {
      if (
        this.scrolledToBottom &&
        !this.fetching &&
        !this.$store.state.posts.noData
      ) {
        this.fetch()
      }
    }
  },
  mounted() {
    this.scroll()
    this.fetch()
  },
  methods: {
    async fetch() {
      this.fetching = true
      try {
        await this.$store.dispatch('posts/fetchPost', {
          infiniteScroll: this.infiniteScroll,
          channelId: this.channelId
        })
      } catch (e) {}
      this.fetching = false
      this.infiniteScroll = true
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
