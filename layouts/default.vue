<template>
  <WrapperDefault>
    <SharedTheChatBox />
    <div v-if="isChannel === 'channels'" class="row">
      <div class="channel col-lg-2 show-desktop px-0 custom-border-right">
        <HomeSideChannel style="border-radius: 2rem" />
        <HomeSideChannelCreate />
      </div>
      <div class="col-lg-10">
        <Nuxt />
      </div>
    </div>

    <div v-else-if="isChannel === 'notifications'" class="row notification">
      <div
        class="col-lg-2 show-desktop custom-border-right"
        style="min-height: 100vh"
      >
        <ul class="sidebar">
          <li>
            <NuxtLink to="/notifications/unread">
              <div class="">Unread</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notifications/read">
              <div class="">Read</div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-lg-10">
        <Nuxt />
      </div>
    </div>

    <div v-else>
      <Nuxt />
    </div>
  </WrapperDefault>
</template>
<script>
export default {
  computed: {
    isChannel() {
      return this.$route.path.split('/')[1]
    }
  }
}
</script>
