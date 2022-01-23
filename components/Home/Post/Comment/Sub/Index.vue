<template>
  <div>
    <div class="p-2 bg-light-gray rounded-3xl mb-">
      {{ comment.text }}
    </div>
    <div class="text-xs text-secondary d-flex gap-2">
      <div class="fw-bold">Like</div>
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
      <div>
        {{ comment.created_at }}
      </div>
    </div>
    <div class="" v-show="isOpen">
      <div v-if="comments" class="pt-3">
        <ul class="p-0" v-if="comments.length > 0">
          <HomePostCommentShow
            :comment="thecomment"
            v-for="thecomment in comments"
            :key="thecomment.id"
          ></HomePostCommentShow>
        </ul>
        <div class="text-sm text-secondary mb-2" v-else>
          No comment, be the first to comment
        </div>
      </div>
      <div v-else>
        <DefaultLoading class="text-sm" message="Fetching comment" />
      </div>
      <HomePostCommentSubCreate class="mb-3" :comment="comment" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style>
</style>
