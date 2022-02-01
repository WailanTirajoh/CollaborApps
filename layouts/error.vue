<template>
  <div
    class="bg-gray container d-flex align-items-center justify-content-center h-100"
  >
    <div class="">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink v-if="$auth.user" to="/">Home page</NuxtLink>
      <NuxtLink v-else to="/auth/login">Login page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
