<template>
  <div>Setting</div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Setting Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Setting Page",
        },
      ],
    };
  },
};
</script>

<style>
</style>
