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
    <div class="position-relative" v-show="isOpen">
      <div v-if="comments" class="py-2 left-border">
        <ul class="p-0" v-if="comments.length > 0">
          <HomePostCommentShow
            :post="post"
            :comment="thecomment"
            v-for="thecomment in comments"
            :key="thecomment.id"
            @delete-comment="deleteComment"
          ></HomePostCommentShow>
        </ul>
        <div class="text-sm text-center text-secondary mb-2" v-else>
          No comment, be the first to comment
        </div>
      </div>
      <div v-else class="left-border">
        <DefaultLoading class="text-sm mb-2" message="Fetching comment" />
      </div>
      <HomePostCommentSubCreate
        :comment="comment"
        @add-comment="addComment"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    comment: Object,
  },
  data() {
    return {
      isOpen: false,
      comments: null,
    };
  },
  methods: {
    openComment() {
      this.isOpen = !this.isOpen;
      if (this.comments == null) {
        this.fetchComments();
      }
    },
    async fetchComments() {
      try {
        var result = await this.$axios.$get(
          `/comment/${this.comment.id}/subComment`
        );
      } catch (e) {
        console.log(e);
      }
      this.comments = result.comments;
    },
    addComment(comment) {
      this.comments.push(comment);
      this.comment.total_comments++;
      this.$store.dispatch("posts/addTotalComment", this.post);
    },
    deleteComment(comment) {
      this.comments.splice(this.comments.indexOf(comment), 1);
      this.comment.total_comments--;
      this.$store.dispatch("posts/minTotalComment", this.post);
    },
  },
};
</script>

<style>
</style>
