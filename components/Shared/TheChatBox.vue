<template>
  <div
    class="position-fixed show-desktop chat-box shadow-sm"
    :class="{ isPinned }"
    style="z-index: 10"
  >
    <ChatHeader />
    <div class="h-100">
      <div class="textbox px-2 py-1" style="overflow-y: auto; height: 80%">
        <ChatContent v-if="!isLoadingChats" :chats="chats" />
      </div>
      <div>
        <div class="input w-100 position-fixed bottom-0">
          <div class="input-group input-append">
            <input
              ref="iSendMessage"
              v-model="message"
              :disabled="isLoadingSendMessage"
              placeholder="Masukkan pesan..."
              type="text"
              class="form-control"
              @keyup.enter="addNewChat"
            />
            <button
              :disabled="isLoadingSendMessage"
              class="btn btn-primary"
              @click="addNewChat"
            >
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
  data() {
    return {
      message: 'hallo',
      isLoadingSendMessage: false,
      isLoadingChats: false,
      chats: []
    }
  },

  async fetch() {
    await this.getChats()
  },

  computed: {
    isPinned() {
      return this.$store.state.chat.isPinned
    }
  },

  methods: {
    async addNewChat() {
      if (!this.message) return
      try {
        this.isLoadingSendMessage = true
        await this.$axios({
          url: 'chats',
          method: 'POST',
          data: {
            message: this.message
          }
        })
        this.message = ''
        this.isLoadingSendMessage = false
        this.$nextTick(() => this.$refs.iSendMessage.focus())
        this.$fetch()
      } catch (e) {
        alert('gagal kirim pesan silahkan coba lagi...')
      }
    },
    async getChats() {
      try {
        this.isLoadingChats = false
        const {
          data: { chats }
        } = await this.$axios({
          url: 'chats',
          method: 'get'
        })
        this.chats = chats
      } catch (e) {
        alert('gagal mendapatkan list pesan, silahkan coba lagi...')
      }
    }
  }
}
</script>
