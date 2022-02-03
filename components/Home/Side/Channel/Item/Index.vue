<template>
  <NuxtLink :to="`/channels/${slug}`">
    <div
      class="side-link d-flex gap-1"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="d-flex justify-content-between w-100">
        <div class="d-flex">
          <div class="side-icon">
            <font-awesome-icon :icon="['fas', icon]" />
          </div>
          {{ name }}
        </div>
        <div v-show="hover">
          <NuxtLink :to="`/channels/${slug}/edit`" data-bs-toggle="tooltip">
            <font-awesome-icon class="text-secondary" :icon="['fas', 'cog']" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: 'briefcase'
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style></style>
