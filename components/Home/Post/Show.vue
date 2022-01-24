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
                Share
              </a>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                data-bs-toggle="modal"
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
                />Report</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body">
      {{ post.text }}
    </div>
    <div class="d-flex justify-content-between text-sm text-secondary mt-2">
      <div class="">{{ post.total_reacts }} Likes</div>
      <div class="">
        {{ post.total_comments }}
        {{ post.total_comments > 1 ? 'comments' : 'comment' }}
      </div>
    </div>
    <hr class="my-1" />
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
  }
}
</script>

<style></style>
