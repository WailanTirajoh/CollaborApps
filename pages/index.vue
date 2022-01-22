<template>
  <div>
    <div class="row sidebar" style="min-height: 60vh">
      <div class="px-1 col-lg-2 show-desktop">
        <div class="rounded shadow px-2 py-2 bg-white mb-2 text-center">
          <font-awesome-icon :icon="['fas', 'project-diagram']" /> Recent
          Projects
        </div>
        <HomeSideProject />
      </div>
      <div
        class="px-1 col-12"
        :class="{ 'col-lg-9': !chat.pinned, 'col-lg-7 pe-4': chat.pinned }"
      >
        <div class="row">
          <div class="col-lg-12">
            <HomeCreatePost @push-post="addPost" />
          </div>
          <div class="col-lg-12">
            <HomePost :posts="posts" />
          </div>
        </div>
      </div>
      <RightChatBox @chatClicked="updatePin" />
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
export default {
  ssr: false,
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
  data() {
    return {
      posts: null,
      chat: {
        pinned: true,
      },
    };
  },
  methods: {
    updatePin(event) {
      this.chat.pinned = event;
    },
    async getPosts() {
      try {
        var result = await this.$axios.$get("/posts");
        this.posts = result.posts;
      } catch (e) {
        console.log(e);
      }
    },
    addPost(post) {
      this.posts.unshift(post);
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
