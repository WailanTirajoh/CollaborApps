<template>
  <div
    class="user d-flex align-items-center justify-content-between bg-gray p-2 pe-3 rounded"
    @mouseover="showVolume = true"
    @mouseleave="showVolume = false"
  >
    <div class="d-flex align-items-center gap-3 intro-y w-100">
      <img :src="user.image" class="w-3r h-3r rounded-circle" />
      <div class="w-100">
        <div class="d-flex justify-content-between">
          <div class="text-lg">{{ user.name }}</div>
          <div v-if="user.isSpeaking">
            <font-awesome-icon
              class="intro-opacity"
              :icon="[
                'fas',
                volume == 0
                  ? 'volume-mute'
                  : volume < 0.51
                  ? 'volume-down'
                  : 'volume-up'
              ]"
            />
          </div>
        </div>
        <div class="w-100">
          <div class="text-xs text-secondary">
            {{ volumePercentage }}
          </div>
          <div class="input-range">
            <input
              v-model="volume"
              class="w-100"
              type="range"
              min="0"
              max="1"
              step="0.01"
              @input="
                $emit('change-user-volume', {
                  volume: volume,
                  userId: user.id
                })
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      volume: this.user.volume,
      showVolume: false
    }
  },
  computed: {
    volumePercentage() {
      return `${parseInt(this.user.volume * 100)}%`
    }
  }
}
</script>

<style></style>
