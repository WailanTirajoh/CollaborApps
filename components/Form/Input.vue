<template>
  <div>
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      ref="input"
      v-bind="$attrs"
      :type="type"
      class="form-control px-3 py-2"
      :class="{ 'is-invalid': errors }"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="errors" :id="`${id}Feedback`" class="invalid-feedback">
      <div v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    errors: {
      type: Array,
      required: false,
      default: () => {}
    }
  }
}
</script>
