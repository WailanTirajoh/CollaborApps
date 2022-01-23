<template>
  <div class="">
    <div class="d-flex justify-content-between text-secondary my-1">
      <button class="btn d-flex align-items-center gap-1">
        <font-awesome-icon :icon="['far', 'thumbs-up']" />
        <div class="text-sm">Like</div>
      </button>
      <button class="btn d-flex align-items-center gap-1" @click="openComment">
        <font-awesome-icon :icon="[isOpen ? 'fas' : 'far', 'comments']" />
        <div class="text-sm">Comment</div>
      </button>
      <button class="btn d-flex align-items-center gap-1">
        <font-awesome-icon :icon="['far', 'share-square']" />
        <div class="text-sm">Share</div>
      </button>
    </div>
    <div v-show="isOpen">
      <div v-if="comments">
        <ul class="p-0" v-if="comments.length > 0">
          <div class="my-2" v-for="comment in comments" :key="comment.id">
            <HomePostCommentShow
              :post="post"
              :comment="comment"
              @delete-comment="deleteComment"
            />
          </div>
        </ul>
        <div class="my-2 text-center" v-else>
          "Seems quiet in here, lets make some noise {{ $auth.user.name }}"
        </div>
      </div>
      <div v-else>
        <DefaultLoading class="text-sm" message="Fetching comment" />
      </div>
      <HomePostCommentCreate :post="post" @add-comment="addComment" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      isOpen: false,
      comments: null,
    };
  },
  methods: {
    async fetch() {
      try {
        var response = await this.$axios.$get(`/post/${this.post.id}/comment`);
        this.comments = response.comments;
      } catch (e) {
        console.log(e);
      }
    },
    openComment() {
      this.isOpen = !this.isOpen;
      if (this.comments == null) {
        this.fetch();
      }
    },
    addComment(comment) {
      this.comments.push(comment);
      this.$store.dispatch("posts/addTotalComment", this.post);
    },
    deleteComment(comment) {
      this.comments.splice(this.comments.indexOf(comment), 1);
      this.$store.dispatch("posts/minTotalComment", this.post);
    },
  },
};
</script>

<style>
</style>
