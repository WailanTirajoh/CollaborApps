<template>
  <WrapperDefault>
    <div class="row">
      <div
        class="notification col-lg-2 show-desktop px-0 custom-border-right"
        style="min-height: 100vh"
      >
        <ul>
          <li>
            <NuxtLink to="/notifications/unread"> Unread </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notifications/read"> Read </NuxtLink>
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
