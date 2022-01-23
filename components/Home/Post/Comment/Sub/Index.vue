<template>
  <div class="w-100">
    <div class="p-2 bg-light-gray rounded-3xl">
      <div class="fw-medium text-sm">
        {{ comment.user.name }}
      </div>
      <div class="text-sm">
        {{ comment.text }}
      </div>
    </div>
    <div class="text-xs text-secondary d-flex gap-2 px-2 py-1">
      <div class="fw-bold">Like</div>
      <span class="">·</span>
      <div
        class="fw-bold cursor-pointer noselect"
        :class="{ 'fw-bold text-black ': isOpen }"
        @click="openComment"
      >
        Comment
        <span v-if="comment.total_comments > 0"
          >({{ comment.total_comments }})</span
        >
      </div>
      <span class="">·</span>
      <div>
        {{ comment.created_at }}
      </div>
    </div>
    <div v-show="isOpen" class="position-relative">
      <div v-if="comments" class="py-2 left-border">
        <ul v-if="comments.length > 0" class="p-0">
          <HomePostCommentShow
            v-for="thecomment in comments"
            :key="thecomment.id"
            :post="post"
            :comment="thecomment"
            @delete-comment="deleteComment"
          ></HomePostCommentShow>
        </ul>
        <div v-else class="text-sm text-center text-secondary mb-2">
          No comment, be the first to comment
        </div>
      </div>
      <div v-else class="left-border">
        <DefaultLoading class="text-sm mb-2" message="Fetching comment" />
      </div>
      <HomePostCommentSubCreate :comment="comment" @add-comment="addComment" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    comment: {
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
    openComment() {
      this.isOpen = !this.isOpen
      if (this.comments == null) {
        this.fetchComments()
      }
    },
    async fetchComments() {
      try {
        const result = await this.$axios.$get(
          `/comment/${this.comment.id}/subComment`
        )
        this.comments = result.comments
      } catch (e) {}
    },
    addComment(comment) {
      this.comments.push(comment)
      this.$emit('increment-comment', comment)
      this.$store.dispatch('posts/addTotalComment', this.post)
    },
    deleteComment(comment) {
      this.comments.splice(this.comments.indexOf(comment), 1)
      this.$emit('decrement-comment', comment)
      this.$store.dispatch('posts/minTotalComment', this.post)
    }
  }
}
</script>

<style></style>
