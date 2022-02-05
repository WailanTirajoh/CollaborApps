<template>
  <WrapperDefault>
    <div class="row notification">
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
  </WrapperDefault>
</template>

<script>
export default {}
</script>

<style></style>
