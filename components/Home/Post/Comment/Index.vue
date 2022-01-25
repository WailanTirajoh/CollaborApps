<template>
  <div>
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="likePost"
      >
        <font-awesome-icon :icon="['far', 'thumbs-up']" />
        <div class="text-sm">Suka</div>
      </button>
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="openComment"
      >
        <font-awesome-icon :icon="[isOpen ? 'fas' : 'far', 'comments']" />
        <div class="text-sm">Komentar</div>
      </button>
      <button class="btn btn-sm d-flex align-items-center gap-1 text-secondary">
        <font-awesome-icon :icon="['far', 'share-square']" />
        <div class="text-sm">Bagikan</div>
      </button>
    </div>
    <div v-show="isOpen">
      <div v-if="comments">
        <ul v-if="comments.length > 0" class="p-0 m-0">
          <div v-for="comment in comments" :key="comment.id" class="intro-y">
            <HomePostCommentShow
              :post="post"
              :comment="comment"
              @delete-comment="deleteComment"
              @decrement-comment="decrementComment"
              @increment-comment="incrementComment"
            />
          </div>
        </ul>
        <div v-else class="my-2 text-center intro-y">
          <i class="text-sm"> "Tidak ada balasan, jadilah yang pertama" </i>
        </div>
      </div>
      <div v-else class="left-border">
        <DefaultLoading class="text-sm intro-y" message="Mengambil komentar" />
      </div>
      <HomePostCommentCreate :post="post" @add-comment="addComment" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      comments: null
    }
  },
  methods: {
    async fetch() {
      try {
        const response = await this.$axios.$get(`/post/${this.post.id}/comment`)
        this.comments = response.comments
      } catch (e) {}
    },
    async likePost() {
      try {
        const response = await this.$axios.$post(
          `/post/${this.post.id}/react`,
          { react_id: 1 }
        )
        if (response.like) {
          this.$store.dispatch('posts/addTotalReacts', this.post)
        } else {
          this.$store.dispatch('posts/minTotalReacts', this.post)
        }

        this.$toast
          .success(response.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
      } catch (e) {}
    },
    openComment() {
      this.isOpen = !this.isOpen
      if (this.comments == null) {
        this.fetch()
      }
    },
    addComment(comment) {
      this.comments.push(comment)
      this.$store.dispatch('posts/addTotalComment', this.post)
    },
    deleteComment(comment) {
      this.comments.splice(this.comments.indexOf(comment), 1)
      this.$store.dispatch('posts/minTotalComment', this.post)
    },
    incrementComment(comment) {
      this.comments[this.comments.findIndex((cmt) => cmt.id == comment.id)]
        .total_comments++
    },
    decrementComment(comment) {
      this.comments[this.comments.findIndex((cmt) => cmt.id == comment.id)]
        .total_comments--
    }
  }
}
</script>
