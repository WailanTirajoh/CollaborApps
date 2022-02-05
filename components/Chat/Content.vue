<template>
  <div class="chat">
    <div ref="chatContent" class="chat-history">
      <ul class="mb-0">
        <li v-for="(chat, index) in chats" :key="index" class="clearfix my-4">
          <template v-if="isUser(chat)">
            <div
              class="message-data d-flex justify-content-end align-items-center"
            >
              <span class="message-data-time mx-2">
                <span class="fw-bold float-end">
                  {{ chat.user.name }}
                </span>
                <br />
                <span class="fw-lighter float-end">
                  {{ chat.created_at }}
                </span>
              </span>
              <img
                :src="chat.user.avatar"
                class="rounded-circle float-start"
                style="height: 35px"
              />
            </div>
            <div class="message my-message float-end">
              {{ chat.message }}
            </div>
          </template>

          <template v-else>
            <li class="clerfix mb-3">
              <div class="message-data d-flex align-items-center">
                <img
                  :src="chat.user.avatar"
                  class="rounded-circle float-start"
                  style="height: 35px"
                />
                <span class="message-data-time mx-2">
                  <span class="fw-bold">
                    {{ chat.user.name }}
                  </span>
                  <br />
                  <span class="fw-lighter">{{ chat.created_at }}</span>
                </span>
              </div>
              <div class="message other-message">
                {{ chat.message }}
              </div>
            </li>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chats: {
      type: Array,
      required: true
    }
  },

  methods: {
    isUser(chat) {
      return chat.user.id === this.$auth.user.id
    },
    async scrollToBottomOfChat() {
      await new Promise((resolve) => setTimeout(resolve, 0.2))
      const element = this.$refs.chatContent
      if (element) {
        element.scrollTop = this.$refs.chatContent.scrollHeight
      }
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
