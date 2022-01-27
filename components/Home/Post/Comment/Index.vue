<template>
  <div>
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="like"
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
      <ul v-if="post.comments.length > 0" class="p-0 m-0">
        <div v-for="comment in post.comments" :key="comment.id" class="intro-y">
          <HomePostCommentShow :post="post" :comment="comment" />
        </div>
      </ul>
      <div v-else class="my-2 text-center intro-y">
        <i class="text-sm"> "Tidak ada balasan, jadilah yang pertama" </i>
      </div>
      <HomePostCommentCreate :post="post" />
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
      isOpen: false
    }
  },
  methods: {
    async like() {
      try {
        const response = await this.$axios.$post(
          `/posts/${this.post.id}/reacts`,
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
    }
  }
}
</script>
