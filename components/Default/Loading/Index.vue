<template>
  <div class="">
    <div v-if="type == 'search'">
      <DefaultLoadingSearch />
    </div>
    <div v-if="type == 'eater'">
      <DefaultLoadingEater />
    </div>
    <div v-if="type == 'dot'">
      <DefaultLoadingDot />
    </div>
    <div class="text-center text-secondary" style="margin-top: -10px">
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
    },
    type: {
      type: String,
      required: false,
      default: 'search'
    }
  }
}
</script>
