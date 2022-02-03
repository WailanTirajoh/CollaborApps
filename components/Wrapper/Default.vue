<template>
  <div class="font-mono position-relative">
    <section class="container-fluid">
      <SharedTheChatBox />
      <div class="row" style="min-height: 100vh">
        <div
          class="col-md-1 server show-desktop tw-bg-blue-900 bg-light shadow-sm p-0"
        >
          <HomeSideServer />
        </div>
        <div class="col-md-11">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
