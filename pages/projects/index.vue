<template>
  <div >Friends</div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Friends Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Friend Page",
        },
      ],
    };
  },
};
</script>

<style>
</style>
