<template>
  <div class="">
    <DefaultLoadingSearch />
    <div class="text-center text-secondary" style="margin-top: -20px">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default: 'Please wait'
    }
  }
}
</script>
