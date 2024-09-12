<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  label?: string
  modelValue: boolean
  iconOn?: string
  iconOff?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconOn: 'ph:check-square',
  iconOff: 'ph:square',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const data = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const id = useId()
</script>

<template>
  <div class="form-checkbox">
    <input :id="id" v-model="data" type="checkbox" :name="id">
    <label :for="id">

      <div class="icon">
        <Icon :icon="modelValue ? props.iconOn : props.iconOff" />
      </div>

      <p v-if="props.label">{{ props.label }}</p>
    </label>
  </div>
</template>
