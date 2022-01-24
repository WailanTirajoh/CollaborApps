<template>
  <li class="d-flex gap-2 position-relative left-line my-1">
    <img
      class="img-fluid rounded-circle object-fit-cover"
      style="width: 2rem; height: 2rem; z-index: 1"
      :src="comment.user.avatar"
    />
    <HomePostCommentSub :post="post" :comment="comment" />
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    async deleteComment(comment) {
      try {
        if (confirm('Are you sure want to delete this comment?')) {
          await this.$axios.$delete(
            `/post/${this.post.id}/comment/${comment.id}`
          )
          this.$emit('delete-comment', comment)
        }
      } catch (e) {
        alert(e.response.data.message)
      }
    }
  }
}
</script>
