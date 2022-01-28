<template>
  <div>
    <div class="row" style="min-height: 100vh">
      <div class="server show-desktop bg-white custom-border-right">
        <div class="position-sticky intro-y" style="z-index: 1; top: 5px">
          <div class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="dropdown-toggle color-gray"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                class="img-fluid rounded-circle object-fit-cover border"
                :src="$auth.user.avatar"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end text-sm"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NuxtLink class="dropdown-item" to="/auth/setting"
                  ><font-awesome-icon
                    :icon="['fas', 'user-cog']"
                    style="width: 15px"
                  />
                  Pengaturan
                </NuxtLink>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <div
                  class="dropdown-item cursor-pointer"
                  href="#"
                  @click.prevent="logout()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'sign-out-alt']"
                    style="width: 15px"
                  />
                  Keluar
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="channel show-desktop position-relative px-0 custom-border-right"
      >
        <div class="position-sticky" style="height: 100vh; top: 0">
          <HomeSideChannel class="intro-y py-2 px-2" style="height: 90%" />
          <div class="bg-white border-top p-1" style="height: 10%">
            <div class="text-sm">Server Setting</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 py-2 custom-border-right">
        <HomePostCreate class="intro-y" />
        <HomePost />
      </div>
      <div class="col-md-3 peoples position-relative">
        <div class="position-sticky voice top-0 p-1">
          <div class="header">Ruangan Suara</div>
          <div class="body p-4">Tahan "G" untuk mengirim suara</div>
          <div class="bg-white rounded-sm p-2">
            <div v-for="user in users" :key="user.id" class="mb-2">
              <div class="d-flex align-items-center gap-3">
                <img :src="user.image" class="w-3r h-3r rounded-circle" />
                <div class="text-lg">{{ user.name }}</div>
                <div v-if="user.isSpeaking">sedang berbicara...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('posts/resetPosts')
    this.$echo.leave(
      'post',
      'home.1',
      `users.${this.$auth.user.id}`,
      `channel.1`
    )
    next()
  },
  middleware: 'auth',
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

    this.$echo
      .join('channel.1')
      .here((users) => {
        this.users = users
      })
      .joining((user) => {
        this.$toast
          .info(`${user.name} bergabung ke channel`, {
            position: 'top-right',
            Icon: 'check'
          })
          .goAway(5000)
        this.users.push(user)
      })
      .leaving((user) => {
        this.$toast
          .error(`${user.name} meninggalkan ke channel`, {
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
        if (index) this.users[index].isSpeaking = true

        let audio = document.getElementById(`audio-${user.id}`)
        if (audio == undefined) {
          audio = document.createElement('audio')
          audio.setAttribute('id', `audio-${user.id}`)
        }
        audio.src = response.voice
        audio.play()
        const vm = this
        audio.addEventListener('ended', () => {
          vm.voice.audioChunks = []
          vm.users[index].isSpeaking = false
        })
      })
    window.addEventListener('keydown', this.record)
    window.addEventListener('keyup', this.stopRecord)
  },
  methods: {
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

    async logout() {
      try {
        await this.$auth.logout()
        this.$auth.strategy.token.reset()
      } catch (error) {}
    }
  }
}
</script>
