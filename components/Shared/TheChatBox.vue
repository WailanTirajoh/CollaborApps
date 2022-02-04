<template>
  <div
    class="position-fixed show-desktop chat-box shadow-sm"
    :class="{ isPinned }"
    style="z-index: 10"
  >
    <ChatHeader />
    <div class="h-100">
      <div class="textbox px-2 py-1" style="overflow-y: auto; height: 80%">
        <div class="chat">
          <div class="chat-history">
            <ul class="mb-0">
              <li class="clearfix mb-3">
                <div
                  class="message-data d-flex justify-content-end align-center"
                >
                  <span class="message-data-time mx-2">
                    <span class="fw-bold float-end"> name</span><br />
                    <span class="fw-lighter">created at</span>
                  </span>
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 40px"
                  />
                </div>
                <div class="message my-message float-end">my message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 40px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 40px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 40px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 40px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="input w-100 position-fixed bottom-0">
          <div class="input-group input-append">
            <input
              :placeholder="`Masukkan pesan...`"
              type="text"
              autocomplete="off"
              class="form-control"
            />
            <button class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </button>
          </div>
          <div class="d-flex justify-content-between py-2">
            TODO : list icons
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isPinned() {
      return this.$store.state.chat.isPinned
    }
  }
}
</script>

<style lang="scss" scoped></style>
