<template>
  <div>
    <div class="row" style="min-height: 100vh">
      <div
        class="server show-desktop bg-white"
        style="border-right: 0.5px solid rgba(108, 117, 125, 0.25)"
      ></div>
      <div class="room show-desktop position-relative px-0">
        <div class="position-sticky" style="height: 100vh; top: 0">
          <HomeSideChannel class="intro-y py-2 px-2" style="height: 90%" />
          <div class="bg-white border-top p-1" style="height: 10%">
            <div class="text-sm">Server Setting</div>
          </div>
        </div>
      </div>
      <div
        class="col-12 col-md-6 py-2"
        style="border-left: 0.5px solid rgba(108, 117, 125, 0.25)"
      >
        <HomePostCreate class="intro-y" />
        <HomePost />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave('post', 'home.1', `users.${this.$auth.user.id}`)
    next()
  },
  middleware: 'auth',
  data() {
    return {
      voice: {
        firstRecord: false,
        rec: null,
        handleVar: '',
        audioChunks: [],
        blob: null,
        audio: null,
        stream: null
      }
    }
  },
  head() {
    return {
      title: 'Beranda',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Beranda'
        }
      ]
    }
  },
  mounted() {
    this.$echo
      .channel('post')
      .listen('.created', (e) => {
        this.$store.dispatch('posts/addPost', e.post)
      })
      .listen('.deleted', (e) => {
        this.$store.dispatch('posts/deletePost', e.post)
      })

    this.$echo.private('channel.1').listen('.voice', (response) => {
      this.voice.audio = document.createElement('audio')
      this.voice.audio.src = response.voice
      this.voice.audio.play()
      const vm = this
      this.voice.audio.addEventListener('ended', () => {
        vm.voice.audioChunks = []
        vm.voice.audio.remove()
      })
    })
    window.addEventListener('keydown', this.record)
    window.addEventListener('keyup', this.stopRecord)
  },
  methods: {
    handlerFunction() {
      this.voice.audioChunks = []
      if (this.voice.stream) {
        this.voice.rec = new MediaRecorder(this.voice.stream)
        this.voice.rec.ondataavailable = (e) => {
          this.voice.audioChunks.push(e.data)
          if (this.voice.rec.state == 'inactive') {
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
      }
    },
    stopAudioOnly() {
      this.voice.stream.getTracks().forEach(function (track) {
        track.stop()
      })
    },
    async broadcastVoice(src) {
      await this.$axios.post(`channel/1/voice`, {
        voice: src
      })
    },
    async record(e) {
      if (e.which == 71) {
        if (this.voice.firstRecord == false) {
          try {
            this.voice.stream = await navigator.mediaDevices.getUserMedia({
              audio: true
            })
            this.handlerFunction()
          } catch (e) {}
          this.voice.firstRecord = true
        }
        if (this.voice.handleVar != e.which) {
          this.voice.rec.start()
          this.voice.handleVar = e.which
          this.$toast
            .success(`recording`, {
              position: 'top-right',
              Icon: 'check'
            })
            .goAway(2500)
        }
      }
    },
    stopRecord() {
      if (this.voice.handleVar != 71) return
      this.voice.rec.stop()
      this.voice.handleVar = ''
      this.$toast
        .success(`sending record`, {
          position: 'top-right',
          Icon: 'check'
        })
        .goAway(2500)
    }
  }
}
</script>
