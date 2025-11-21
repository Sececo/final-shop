<template>
  <div class="input-container">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      class="custom-input"
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

.custom-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  color: var(--color-primary);
  font-size: 1rem;
  transition: border 0.2s, box-shadow 0.2s;
  box-shadow: var(--color-shadow);
}
.custom-input:focus {
  border-color: var(--color-secondary);
  box-shadow: var(--color-shadow-hover);
  outline: none;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>