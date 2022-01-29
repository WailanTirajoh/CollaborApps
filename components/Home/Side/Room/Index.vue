<template>
  <div class="room position-sticky voice top-0 p-1" style="height: 100vh">
    <div class="header pb-2 d-flex justify-content-end">
      <button class="btn btn-sm btn-light border">Pengaturan Ruangan</button>
    </div>
    <div
      class="bg-white rounded-sm px-2 overflow-y-auto rounded py-1 shadow-sm"
      style="height: 85vh"
    >
      <div class="text-sm text-secondary text-end pb-1">
        Tahan "G" untuk mengirim suara
      </div>
      <div v-if="users.length > 0" class="">
        <HomeSideRoomUser
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="mb-2"
          @change-user-volume="changeUserVolume"
        />
      </div>
      <div v-else>
        <div
          class="d-flex align-items-center justify-content-center intro-y"
          style="min-height: 300px"
        >
          <DefaultLoading />
        </div>
      </div>
    </div>
    <div class="" style="height: 10vh"></div>
  </div>
</template>

<script>
export default {
  props: {
    channelId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      voice: {
        firstRecord: false,
        record: null,
        handleVar: null,
        audioChunks: [],
        blob: null,
        toast: null
      },
      users: []
    }
  },
  beforeDestroy() {
    this.$echo.leave(`channel.1`)
    window.removeEventListener('keydown', this.record)
    window.removeEventListener('keyup', this.stopRecord)
  },
  mounted() {
    this.$echo
      .join(`channel.${this.channelId}`)
      .here((users) => {
        this.users = users
      })
      .joining((user) => {
        this.$toast
          .info(`${user.name} bergabung ke saluran`, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(5000)
        this.users.push(user)
      })
      .leaving((user) => {
        this.$toast
          .error(`${user.name} meninggalkan ke saluran`, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(5000)
        const index = this.users.findIndex(
          (currentUser) => currentUser.id == user.id
        )
        if (index > -1) {
          this.users.splice(index, 1)
        }
      })
      .listen('.voice', (response) => {
        const user = response.user
        const index = this.users.findIndex(
          (currentUser) => currentUser.id == user.id
        )

        if (index > -1) {
          this.users[index].isSpeaking = true

          const audio = this.getUserAudio(user.id)
          audio.src = response.voice
          audio.volume = this.users[index].volume
          audio.play()
          const vm = this
          audio.addEventListener('ended', () => {
            vm.voice.audioChunks = []
            vm.users[index].isSpeaking = false
          })
        }
      })
    window.addEventListener('keydown', this.record)
    window.addEventListener('keyup', this.stopRecord)
  },
  methods: {
    changeUserVolume({ volume, userId }) {
      const index = this.users.findIndex(
        (currentUser) => currentUser.id == userId
      )
      if (index > -1) {
        this.users[index].volume = volume
      }
    },
    handlerFunction(stream) {
      this.voice.record = new MediaRecorder(stream)
      this.voice.record.ondataavailable = (e) => {
        this.voice.audioChunks.push(e.data)
        if (this.voice.record.state == 'inactive') {
          this.voice.blob = new Blob(this.voice.audioChunks, {
            type: 'audio/webm'
          })
          const reader = new FileReader()
          reader.readAsDataURL(this.voice.blob)
          const vm = this
          reader.onloadend = function () {
            const base64data = reader.result
            vm.broadcastVoice(base64data)
          }
        }
      }
    },
    async broadcastVoice(src) {
      await this.$axios.post(`channel/1/voice`, {
        voice: src
      })
    },
    async record(e) {
      // 71 = keycode for "G"
      if (e.which == 71) {
        // setup voice stream only when user want to use mic
        if (this.voice.firstRecord == false) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true
            })
            this.handlerFunction(stream)
          } catch (e) {}
          this.voice.firstRecord = true
        }
        if (this.voice.handleVar != e.which) {
          this.voice.record.start()
          this.voice.handleVar = e.which
          this.voice.toast = this.$toast.success(`Merekam ...`, {
            position: 'top-right',
            Icon: 'check'
          })
        }
      }
    },
    stopRecord() {
      if (this.voice.handleVar != 71) return
      this.voice.record.stop()
      this.voice.handleVar = null
      this.voice.toast.goAway()
    },
    getUserAudio(userId) {
      let audio = document.getElementById(`audio-${userId}`)
      if (audio == undefined) {
        audio = document.createElement('audio')
        audio.id = `audio-${userId}`
      }
      return audio
    }
  }
}
</script>

<style></style>
