<template>
  <li class="d-flex gap-2 position-relative left-line my-1">
    <img
      class="img-fluid rounded-circle object-fit-cover"
      style="width: 2rem; height: 2rem; z-index: 1"
      :src="comment.user.avatar"
    />
    <HomePostCommentSub :post="post" :comment="comment" />
    <div>
      <div class="dropdown">
        <button
          id="dropdownMenuButton1"
          class="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-h']" />
        </button>
        <ul
          v-if="comment.user.id == $auth.user.id"
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a
              class="dropdown-item text-sm"
              href="#"
              @click="deleteComment(comment)"
            >
              <font-awesome-icon
                class="me-1"
                :icon="['far', 'trash-alt']"
              />Delete</a
            >
          </li>
        </ul>
        <ul v-else class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item text-sm" href="#">
              <font-awesome-icon
                :icon="['fas', 'bullhorn']"
                class="me-1 color-red"
              />Report</a
            >
          </li>
        </ul>
      </div>
    </div>
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
