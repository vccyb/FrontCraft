<template>
  <div
      class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <Icon :name="card.icon" class="h-10 w-10" :class="dynamicClass.color"/>
    <div class="text-xl font-bold text-gray-800 dark:text-white">{{ card.title }}</div>
    <p class="text-gray-600 dark:text-gray-400 text-center">
      {{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">

import type {FeatureCard} from "~/types/card";

const props = defineProps<{
  card: FeatureCard
}>()

const colorMap = {
  indigo: 'text-indigo-500',
  green: 'text-green-500',
  blue: 'text-blue-500',
  red: 'text-red-500',
  yellow: 'text-yellow-500',
  violet: 'text-violet-500'
}

const dynamicClass = {
  color: props.card.color ? colorMap[props.card.color as any as keyof typeof colorMap] : 'text-purple-500',
}



</script>

<style scoped>

</style>