<template>
  <div>
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <textarea
      :id="id"
      ref="input"
      v-bind="$attrs"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': errors }"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="errors" :id="`${id}Feedback`" class="invalid-feedback">
      {{ errors[0] }}
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
      required: true
    },
    value: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    errors: {
      type: Array,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style></style>
