<template>
  <div class="">
    <DefaultLoadingSearch />
    <div class="text-center text-secondary" style="margin-top: -20px">
      {{ message ? message : "Please wait" }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style>
</style>
