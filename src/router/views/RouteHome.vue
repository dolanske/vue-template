<script setup lang='ts'>
import { Input } from '@dolanske/vui'
import { ref } from 'vue'

const name = ref('World')
</script>

<template>
  <div class="p-l">
    <h1 class="mb-m">
      Hello {{ name }}
    </h1>
    <Input v-model="name" placeholder="Your name" />
  </div>
</template>
