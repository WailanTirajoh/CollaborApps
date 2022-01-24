<template>
  <div class="w-100 position-relative">
    <div class="d-flex">
      <div class="p-2 bg-light-gray rounded-3xl w-100">
        <div class="fw-medium text-sm">
          {{ comment.user.name }}
        </div>
        <div class="text-sm">
          {{ comment.text }}
        </div>
      </div>
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
          class="dropdown-menu dropdown-menu-end"
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
              />Hapus</a
            >
          </li>
        </ul>
        <ul
          v-else
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a class="dropdown-item text-sm" href="#">
              <font-awesome-icon
                :icon="['fas', 'bullhorn']"
                class="me-1 color-red"
              />Laporkan</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="text-xs text-secondary d-flex gap-2 px-2 py-1">
      <div class="fw-bold">Suka</div>
      <span class="">·</span>
      <div
        class="fw-bold cursor-pointer noselect"
        :class="{ 'fw-bold text-black ': isOpen }"
        @click="openComment"
      >
        Komentar
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
            class="intro-y"
            @delete-comment="deleteComment"
          ></HomePostCommentShow>
        </ul>
        <div v-else class="text-center text-secondary mb-2 intro-y">
          <i class="text-sm"> Tidak ada komentar, jadilah yang pertama </i>
        </div>
      </div>
      <div v-else class="left-border intro-y">
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
      this.comment.total_comments++
      this.$store.dispatch('posts/addTotalComment', this.post)
    },
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

<style></style>
