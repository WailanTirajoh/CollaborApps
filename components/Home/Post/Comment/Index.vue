<template>
  <div>
    <div class="d-flex justify-content-between text-xs text-secondary mt-2">
      <div class="cursor-pointer" @click="postReactList">
        {{ post.reacts.length }} Suka
      </div>
      <div class="cursor-pointer no-select" @click="commentOpen">
        {{ post.comments.length }}
        Komentar
      </div>
    </div>
    <hr class="my-1 text-secondary" />
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="postReactCreate"
      >
        <font-awesome-icon
          :class="{ 'fa-pulse': form.isProcessing }"
          :icon="[
            form.isProcessing ? 'fas' : isLiked ? 'fas' : 'far',
            form.isProcessing ? 'spinner' : 'thumbs-up'
          ]"
        />
        <div class="text-sm">Suka</div>
      </button>
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="commentOpen"
      >
        <font-awesome-icon :icon="[isOpen ? 'fas' : 'far', 'comments']" />
        <div class="text-sm">Komentar</div>
      </button>
      <button
        class="btn btn-sm d-flex align-items-center gap-1 text-secondary"
        @click="postShare"
      >
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
      form: {
        isProcessing: false
      },
      isOpen: false
    }
  },
  computed: {
    isLiked() {
      return this.post.reacts[
        this.post.reacts.findIndex(
          (react) => react.user_id == this.$auth.user.id
        )
      ]
    }
  },
  methods: {
    async postReactCreate() {
      this.form.isProcessing = true
      try {
        const response = await this.$axios.$post(
          `/posts/${this.post.id}/reacts`,
          { react_id: 1 }
        )
        this.$toast
          .success(response.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
      } catch (e) {}
      this.form.isProcessing = false
    },
    commentOpen() {
      this.isOpen = !this.isOpen
    },
    postReactList() {
      alert('belom')
      // to be code
    },
    postShare() {
      alert('belom')
      // to be code
    }
  }
}
</script>
