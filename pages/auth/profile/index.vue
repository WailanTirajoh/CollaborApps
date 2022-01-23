<template>
  <div>Profile</div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Profile Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Profile Page'
        }
      ]
    }
  }
}
</script>
