<template>
  <div>
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <textarea
      :id="id"
      ref="input"
      v-bind="$attrs"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': error }"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div :id="`${id}Feedback`" class="invalid-feedback" v-if="error">
      {{ error[0] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`;
      },
    },
    type: {
      type: String,
      default: "text",
    },
    value: String,
    label: String,
    error: String,
  },
};
</script>

<style>
</style>
