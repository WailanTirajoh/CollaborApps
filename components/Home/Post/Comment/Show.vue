<template>
  <li class="d-flex gap-2 mt-2 position-relative left-line">
    <img
      class="img-fluid rounded-circle object-fit-cover"
      style="width: 2rem; height: 2rem; z-index: 1"
      :src="comment.user.avatar"
    />
    <HomePostCommentSub :post="post" :comment="comment" />
    <div>
      <div class="dropdown">
        <button
          class="btn"
          type="button"
          id="dropdownMenuButton1"
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
              @click="deleteComment(comment)"
              class="dropdown-item text-sm"
              href="#"
              >Delete</a
            >
          </li>
        </ul>
        <ul v-else class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item text-sm" href="#">Report</a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    comment: Object,
    post: Object,
  },
  methods: {
    async deleteComment(comment) {
      try {
        if (confirm("Are you sure want to delete this comment?")) {
          var response = await this.$axios.$delete(
            `/post/${this.post.id}/comment/${comment.id}`
          );
          this.$emit("delete-comment", comment);
        }
      } catch (e) {
        alert(e.response.data.message);
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>
