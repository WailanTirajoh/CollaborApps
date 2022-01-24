<template>
  <li class="d-flex gap-2 position-relative left-line my-1">
    <img
      class="img-fluid rounded-circle object-fit-cover"
      style="width: 2rem; height: 2rem; z-index: 1"
      :src="comment.user.avatar"
    />
    <HomePostCommentSub :post="post" :comment="comment" />
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
  methods: {

  }
}
</script>
