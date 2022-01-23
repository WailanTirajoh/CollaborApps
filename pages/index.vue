<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="px-1 col-lg-3 show-desktop">
        <div class="rounded shadow-sm px-2 py-2 bg-white mb-2 text-center">
          <font-awesome-icon :icon="['fas', 'project-diagram']" /> Recent
          Projects
        </div>
        <HomeSideProject />
      </div>
      <div
        class="px-sm-1 col-12"
        :class="{
          'col-lg-7': !$store.state.chat.isPinned,
          'col-lg-6 pe-sm-4': $store.state.chat.isPinned,
        }"
      >
        <div class="row">
          <div class="col-lg-12">
            <HomePostCreate @push-post="addPost" />
          </div>
          <div class="col-lg-12">
            <HomePost />
          </div>
        </div>
      </div>
      <HomeSideChat/>
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Homepage",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["posts/addNewPost"]),
    addPost(post) {
      this.$store.dispatch("posts/addNewPost", post);
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("posts/resetPosts");
    next();
  },
};
</script>
