<template>
  <div >
    Store
  </div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Stores Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Stores Page",
        },
      ],
    };
  },
};
</script>

<style>

</style>
