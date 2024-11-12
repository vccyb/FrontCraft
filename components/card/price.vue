<template>
  <div class="flex flex-col justify-between space-y-8 p-6 border-2 rounded-lg" :class="dynamicStyles.border">
    <div>
      <div class="text-2xl font-bold text-gray-800 dark:text-white">{{ card.title }}</div>
      <div class="mt-2">{{ card.description }}</div>
      <div class="mt-4 text-4xl font-bold text-gray-800 dark:text-white">{{ card.price }}</div>
      <ul class="mt-4 space-y-2">
        <li v-for="feature in card.features" class="flex items-center  space-x-1">
          <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
          <p>
            {{ feature }}
          </p>
        </li>
      </ul>
    </div>
    <button raised class="w-full  text-white font-bold py-2 px-4 rounded" :class="dynamicStyles.button">
      {{ card.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">

import type {PriceCard} from "~/types/card";

const props = defineProps<{
  card: PriceCard,
  highlight: boolean
}>();


const dynamicStyles = computed(() => {
  return {
    border: props.highlight? 'border-indigo-500' : '',
    button: props.highlight? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-purple-600 hover:bg-purple-700'
  }
})



</script>

<style scoped>

</style>