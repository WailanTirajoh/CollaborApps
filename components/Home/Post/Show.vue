<template>
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
        <div class="fw-bold mb-1">
          {{ post.user.name }}
        </div>
        <div class="text-xs text-secondary" style="margin-top: -4px">
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
            <font-awesome-icon class="text-sm" :icon="['fas', 'ellipsis-v']" />
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
                Bagikan
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="deletePost(post)">
                <font-awesome-icon :icon="['far', 'trash-alt']" />
                Hapus</a
              >
            </li>
          </ul>
          <ul
            v-else
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a class="dropdown-item text-sm" href="#">
                <font-awesome-icon
                  :icon="['fas', 'bullhorn']"
                  class="me-1 color-red"
                />Laporkan</a
              >
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
    <div class="d-flex justify-content-between text-xs text-secondary mt-2">
      <div>{{ post.total_reacts }} Suka</div>
      <div>
        {{ post.comments.length }}
        Komentar
      </div>
    </div>
    <hr class="my-1 text-secondary" />
    <HomePostComment :post="post" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    async deletePost(post) {
      if (confirm('Are you sure want to delete this post?')) {
        try {
          await this.$axios.$delete(`/posts/${post.id}`)
        } catch (e) {
          alert(e.message)
        }
      }
    }
  }
}
</script>

<style></style>
