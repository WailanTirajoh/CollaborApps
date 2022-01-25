<template>
  <div class="row">
    <div class="col-md-8">
      <video
        id="myVideo"
        ref="myVideo"
        style="width: 100%"
        @contextmenu.prevent="handler"
      >
        <source
          src="https://okcms.kasatmata.xyz/media/249aec10-44db-45ae-844c-65647570a021/production-ID_4524598-(1).mp4.mp4"
          type="video/mp4"
        />
      </video>
      <button
        v-if="!video.isPlaying"
        class="btn btn-sm bg-white"
        @click="playVideo"
      >
        Play
      </button>
      <button v-else class="btn btn-sm bg-white" @click="pauseVideo">
        Pause
      </button>
      <input
        id="range"
        v-model="currentTime"
        type="range"
        class="form-range"
        :min="video.min"
        :max="video.max"
        step="0.000000001"
        :disabled="video.isPlaying"
      />
    </div>
    <div class="col-md-4">
      <div class="bg-white rounded shadow-sm">test</div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      video: {
        element: null,
        isPlaying: false,
        min: 0,
        max: 0
      },
      currentTime: 0,
      devtools: null
    }
  },
  head() {
    return {
      title: 'Nobar Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Friend Page'
        }
      ]
    }
  },
  computed: {
    videoPlayer() {
      return this.$refs.myVideo
    }
  },
  watch: {
    currentTime(currentTime) {
      if (!this.video.isPlaying) {
        if (this.videoPlayer.currentTime != currentTime) {
          this.videoPlayer.currentTime = currentTime
        }
      }
    }
  },
  mounted() {
    this.video.max = this.videoPlayer.duration
    window.setInterval(() => {
      this.updateVideoTime()
    }, 1000)
  },
  methods: {
    playVideo() {
      this.video.isPlaying = true
      this.videoPlayer.play()
    },
    pauseVideo() {
      this.video.isPlaying = false
      this.videoPlayer.pause()
    },
    goToSec(sec) {
      this.videoPlayer.currentTime = sec
    },
    updateVideoTime() {
      this.currentTime = this.videoPlayer.currentTime
    },
    handler(e) {
      e.preventDefault()
    }
  }
}
</script>
