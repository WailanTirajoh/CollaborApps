<template>
  <div class="row">
    <div v-if="posts.length == 0">
      Loading...
    </div>
    <div v-else>
      <div class="col-lg-12" v-for="(post, index) in posts" :key="index">
        <div class="bg-white rounded shadow px-2 py-2 my-2" v-html="post.text">
          <!-- {{ post.text }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    ...mapActions(["posts/getPosts"]),
    async fetch() {
      await this.$store.dispatch("posts/getPosts");
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>

<style>
</style>
