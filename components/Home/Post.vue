<template>
  <div class="row post">
    <div
      class="d-flex align-items-center justify-content-center"
      v-if="fetching"
      style="min-height: 300px"
    >
      <DefaultLoading />
    </div>
    <div v-else>
      <div class="col-lg-12" v-for="(post, index) in posts" :key="index">
        <div class="bg-white rounded shadow p-3 py-2 my-2">
          <div class="header d-flex mb-2 position-relative">
            <div class="avatar">
              <img
                :src="post.user.avatar"
                alt="user-avatar"
                class="img-fluid rounded-circle"
                style="width: 40px"
              />
            </div>
            <div class="mid ps-3">
              <div class="fw-bold">
                {{ post.user.name }}
              </div>
              <div class="text-sm text-secondary" style="margin-top: -4px">
                {{ post.created_at }}
              </div>
            </div>
            <div class="position-absolute top-0 end-0">
              <div class="dropdown">
                <button
                  class="btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon
                    class="text-sm"
                    :icon="['fas', 'ellipsis-v']"
                  />
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li><a class="dropdown-item text-sm" href="#">Share</a></li>
                  <li><a class="dropdown-item text-sm" href="#">Edit</a></li>
                  <li>
                    <a
                      @click="deletePost(post)"
                      class="dropdown-item text-sm"
                      href="#"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="body">
            {{ post.text }}
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-lg-12">{{ scrolledToBottom }} | {{ pageHeight }}</div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      scrolledToBottom: false,
      pageHeight: null,
      fetching: false,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    ...mapActions(["posts/getPosts"]),
    async fetch() {
      this.fetching = true;
      await this.$store.dispatch("posts/getPosts");
      this.fetching = false;
    },
    async deletePost(post) {
      if (confirm("Are you sure want to delete this post?")) {
        var response = await this.$axios.$delete(`/posts/${post.id}`);
        this.$store.dispatch("posts/removePost", post);
        alert(response.message);
      }
    },
    // infinity scroll todo
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight >
          document.documentElement.offsetHeight - 50;

        if (bottomOfWindow) {
          // alert('bottom')
          this.scrolledToBottom = true; // replace it with your code
        } else {
          this.scrolledToBottom = false; // replace it with your code
        }
      };
    },
  },
  mounted() {
    this.scroll();
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
.post {
  .dropdown-menu {
    min-width: 5rem;
    li {
      .dropdown-item {
        padding: 0.25rem 0.45rem;
      }
    }
  }
}
</style>
