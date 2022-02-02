<template>
  <div>
    <div class="row" style="min-height: 100vh">
      <div
        class="col-md-1 server show-desktop tw-bg-blue-900 bg-light shadow-sm"
      >
        <HomeSideServer />
      </div>
      <div class="channel col-md-2 show-desktop px-0 custom-border-right">
        <HomeSideChannel style="border-radius: 2rem" />
        <HomeSideChannelCreate />
      </div>
      <div class="col-md-9">
        <slot />
      </div>
    </div>
  </div>
</template>
