<template>
  <div class="row">
    <div v-if="posts">
      <div class="col-lg-12" v-for="(post, index) in posts" :key="index">
        <div class="bg-white rounded shadow px-2 py-2 my-2">
          {{ post.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Object,
  },
};
</script>

<style>
</style>
