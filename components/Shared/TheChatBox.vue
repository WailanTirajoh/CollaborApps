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
                  class="message-data d-flex justify-content-end align-items-center"
                >
                  <span class="message-data-time mx-2">
                    <span class="fw-bold float-end"> name</span><br />
                    <span class="fw-lighter">created at</span>
                  </span>
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 35px"
                  />
                </div>
                <div class="message my-message float-end">my message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-items-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 35px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-items-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 35px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-items-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 35px"
                  />
                  <span class="message-data-time mx-2">
                    <span class="fw-bold"> name</span> <br />
                    <span class="fw-lighter">created at</span>
                  </span>
                </div>
                <div class="message other-message">other message</div>
              </li>

              <li class="clerfix mb-3">
                <div class="message-data d-flex align-items-center">
                  <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    class="rounded-circle float-start"
                    style="height: 35px"
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

<style lang="scss" scoped>
.chat {
  .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6;
  }

  .chat-history {
    height: 500px;
    padding: 12px;
    border-bottom: 2px solid #fff;
    overflow-x: auto;

    ul {
      padding: 0;

      li {
        list-style: none;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .message-data {
      margin-bottom: 4px;

      .message-data-time {
        color: #434651;
        font-size: 13px;
      }

      &.other {
        justify-content: end;
      }
    }

    .message {
      color: #444;
      padding: 8px;
      line-height: 26px;
      font-size: 16px;
      border-radius: 4px;
      display: inline-block;
      position: relative;
    }

    .other-message {
      background: #efefef;
    }

    .my-message {
      background: #e8f1f3;
      text-align: right;

      &::after {
        border-bottom-color: #e8f1f3;
        left: 93%;
      }
    }
  }

  .chat-message {
    padding: 20px;
  }
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}
</style>
