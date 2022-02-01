<template>
  <div
    class="user d-flex align-items-center justify-content-between bg-gray intro-y"
    style="border-radius: 0.5rem"
    @mouseover="showVolume = true"
    @mouseleave="showVolume = false"
  >
    <div class="row align-items-center intro-y w-100">
      <div class="col-4">
        <img
          :src="user.image"
          class="img-fluid object-fit-cover"
          style="
            border-radius: 0.5rem 0rem 0rem 0.5rem;
            height: 100%;
            object-fit: cover;
          "
        />
      </div>
      <div class="col-8 px-0">
        <div class="d-flex justify-content-between">
          <div class="text-lg">{{ user.name }}</div>
          <div v-if="user.isSpeaking">
            <font-awesome-icon
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
