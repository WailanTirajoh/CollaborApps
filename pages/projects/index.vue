<template>
  <div>Projects</div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Projects Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Friend Page'
        }
      ]
    }
  }
}
</script>
