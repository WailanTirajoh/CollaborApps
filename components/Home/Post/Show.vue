<template>
  <div class="bg-white rounded shadow-sm p-3 py-2 mb-2">
    <div class="header d-flex mb-2 position-relative">
      <div class="avatar">
        <img
          :src="post.user.avatar"
          alt="user-avatar"
          class="img-fluid rounded-circle object-fit-cover"
          style="width: 40px; height: 40px"
        />
      </div>
      <div class="mid ps-3">
        <div class="mb-1" style="font-weight: 500">{{ post.user.name }}</div>
        <div class="text-xs text-secondary" style="margin-top: -4px">
          {{ post.created_at }}
        </div>
      </div>
      <div class="position-absolute top-0 end-0">
        <div class="dropdown">
          <div
            id="dropdownMenuButton1"
            class="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon
              class="text-sm"
              :class="{ 'fa-pulse': form.isProcessing }"
              :icon="['fas', form.isProcessing ? 'spinner' : 'ellipsis-v']"
            />
          </div>
          <ul
            v-if="post.user.id == $auth.user.id"
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <div
                class="dropdown-item btn btn-sm text-sm"
                @click="pinPost(post)"
              >
                <font-awesome-icon
                  :icon="['far', 'bookmark']"
                  style="width: 15px"
                />
                {{ post.is_pinned ? 'Unpin' : 'Pin' }}
              </div>
            </li>
            <li>
              <div
                class="dropdown-item btn btn-sm text-sm"
                @click="sharePost(post)"
              >
                <font-awesome-icon
                  :icon="['far', 'share-square']"
                  style="width: 15px"
                />
                Bagikan
              </div>
            </li>
            <li>
              <div
                class="dropdown-item btn btn-sm text-sm"
                @click="deletePost(post)"
              >
                <font-awesome-icon
                  :icon="['far', 'trash-alt']"
                  style="width: 15px"
                />
                Hapus
              </div>
            </li>
          </ul>
          <ul
            v-else
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <div
                class="dropdown-item text-sm btn btn-sm"
                @click="reportPost(post)"
              >
                <font-awesome-icon
                  :icon="['fas', 'bullhorn']"
                  class="me-1 color-red"
                />Laporkan
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="text">
        {{ post.text }}
      </div>
      <div
        v-if="post.file"
        class="d-flex justify-content-center bg-gray rounded py-1 my-1"
      >
        <img :src="post.file" class="img-fluid max-h-250-px rounded" />
      </div>
    </div>
    <HomePostComment :post="post" :channel-id="channelId" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    channelId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        isProcessing: false
      }
    }
  },
  destroyed() {
    this.$echo.leave(`post.${this.post.id}`)
  },
  mounted() {
    this.$echo
      .private(`post.${this.post.id}`)
      .listen('.comment.created', (e) => {
        this.$store.dispatch('posts/addComment', {
          post: e.post,
          comment: e.comment
        })
      })
      .listen('.comment.deleted', (e) => {
        this.$store.dispatch('posts/deleteComment', {
          post: e.post,
          comment: e.comment
        })
      })
      .listen('.react.created', (e) => {
        this.$store.dispatch('posts/addReact', {
          post: e.post,
          react: e.react
        })
      })
      .listen('.react.deleted', (e) => {
        this.$store.dispatch('posts/deleteReact', {
          post: e.post,
          react: e.react
        })
      })
  },
  methods: {
    async deletePost(post) {
      if (confirm('Are you sure want to delete this post?')) {
        this.form.isProcessing = true
        try {
          await this.$axios.$delete(
            `/channels/${this.channelId}/posts/${post.id}`
          )
        } catch (e) {}
        this.form.isProcessing = false
      }
    },
    sharePost(post) {
      alert('belom')
    },
    async pinPost(post) {
      this.form.isProcessing = true
      try {
        const response = await this.$axios.$post(
          `/channels/${this.channelId}/posts/${post.id}/pin`
        )
        this.$store.dispatch('posts/pinPost', { post })
        this.$toast
          .success(response.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
      } catch (e) {
        this.$toast
          .error(e.message, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(2500)
      }
      this.form.isProcessing = false
    },
    reportPost(post) {
      alert('belom')
    }
  }
}
</script>

<style></style>
