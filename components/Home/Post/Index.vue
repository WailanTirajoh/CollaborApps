<template>
  <div class="row post">
    <div
      v-if="fetching"
      class="d-flex align-items-center justify-content-center"
      style="min-height: 300px"
    >
      <DefaultLoading />
    </div>
    <div v-else>
      <div v-for="(post, index) in posts" :key="index" class="col-lg-12">
        <DefaultModal :id="index">
          <HomePostEdit :post="post" />
        </DefaultModal>
        <div class="bg-white rounded shadow-sm p-3 py-2 my-2">
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
                  id="dropdownMenuButton1"
                  class="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon
                    class="text-sm"
                    :icon="['fas', 'ellipsis-v']"
                  />
                </button>
                <ul
                  v-if="post.user.id == $auth.user.id"
                  class="dropdown-menu dropdown-menu-end text-sm text-secondary"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="['far', 'bookmark']" />
                      Pin
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="['far', 'share-square']" />
                      Share
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item"
                      data-bs-toggle="modal"
                      :data-bs-target="`#theModal-${index}`"
                    >
                      <font-awesome-icon :icon="['far', 'edit']" />
                      Edit
                    </button>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" @click="deletePost(post)">
                      <font-awesome-icon :icon="['far', 'trash-alt']" />
                      Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="body">
            {{ post.text }}
          </div>
          <div
            class="d-flex justify-content-between text-sm text-secondary mt-2"
          >
            <div class="">0 Likes</div>
            <div class="">
              {{ post.total_comments }}
              {{ post.total_comments > 1 ? 'comments' : 'comment' }}
            </div>
          </div>
          <hr class="my-1" />
          <HomePostComment :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledToBottom: false,
      pageHeight: null,
      fetching: false,
      thePost: null
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  mounted() {
    this.scroll()
    this.fetch()
  },
  methods: {
    async fetch() {
      this.fetching = true
      await this.$store.dispatch('posts/fetchPost')
      this.fetching = false
    },
    async deletePost(post) {
      if (confirm('Are you sure want to delete this post?')) {
        const response = await this.$axios.$delete(`/post/${post.id}`)
        this.$store.dispatch('posts/removePost', post)
        alert(response.message)
      }
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight >
          document.documentElement.offsetHeight - 50

        if (bottomOfWindow) {
          // alert('bottom')
          this.scrolledToBottom = true // replace it with your code
        } else {
          this.scrolledToBottom = false // replace it with your code
        }
      }
    }
  }
}
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
