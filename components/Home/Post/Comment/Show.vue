<template>
  <li class="d-flex gap-2 position-relative left-line my-1">
    <img
      class="img-fluid rounded-circle object-fit-cover"
      style="width: 2rem; height: 2rem; z-index: 1"
      :src="comment.user.avatar"
    />
    <div class="w-100 position-relative">
      <div class="d-flex">
        <div class="p-2 bg-light-gray rounded-3xl w-100">
          <div class="fw-medium text-sm">
            {{ comment.user.name }}
          </div>
          <div class="text-sm">
            {{ comment.text }}
          </div>
        </div>
        <div class="dropdown">
          <button
            id="dropdownMenuButton1"
            class="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :disabled="form.isProcessing"
          >
            <font-awesome-icon
              class="text-sm"
              :class="{ 'fa-pulse': form.isProcessing }"
              :icon="['fas', form.isProcessing ? 'spinner' : 'ellipsis-h']"
            />
          </button>
          <ul
            v-if="comment.user.id == $auth.user.id"
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <button
                class="dropdown-item text-sm btn"
                @click="deleteComment(comment)"
              >
                <font-awesome-icon
                  class="me-1"
                  :icon="['far', 'trash-alt']"
                />Hapus
              </button>
            </li>
          </ul>
          <ul
            v-else
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <button class="dropdown-item text-sm btn">
                <font-awesome-icon
                  :icon="['fas', 'bullhorn']"
                  class="me-1 color-red"
                />Laporkan
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-xs text-secondary d-flex gap-2 px-2 py-1">
        <div class="fw-bold">Suka</div>
        <span class="">·</span>
        <div>
          {{ comment.created_at }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        isProcessing: false
      },
      isOpen: false
    }
  },
  methods: {
    openComment() {
      this.isOpen = !this.isOpen
    },
    async deleteComment(comment) {
      this.form.isProcessing = true
      try {
        if (confirm('Are you sure want to delete this comment?')) {
          const response = await this.$axios.$delete(
            `/posts/${this.post.id}/comments/${comment.id}`
          )
          this.$toast
            .success(response.message, {
              position: 'top-right',
              Icon: 'check'
            })
            .goAway(2500)
          this.$emit('delete-comment', comment)
        }
      } catch (e) {
        alert(e.response.data.message)
      }
      this.form.isProcessing = false
    }
  }
}
</script>
