<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <span v-if="$auth.loggedIn">Welcome {{ $auth.user.name }}!</span>
        <span v-else>Homepage</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Homepage",
        },
      ],
    };
  },
};
</script>
