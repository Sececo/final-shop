<template>
  <div class="input-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      class="input-field"
      :placeholder="placeholder"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'text' | 'password' | 'email'>,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-label {
  margin-bottom: 0.5rem;
  color: #000;
  font-weight: bold;
}

.input-field {
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
}

.input-field:focus {
  outline: none;
  border-color: #000;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>