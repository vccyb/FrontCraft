<template>
  <div
      class="flex flex-col  border-[1px] rounded-lg justify-between p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="pt-4">
      <p class="text-gray-600 dark:text-gray-300 italic">
        {{`"${card.quote}"`}}</p>
    </div>
    <div class="text-right text-sm font-medium text-gray-700 dark:text-gray-300">
      - {{ card.author}}
    </div>
  </div>
</template>

<script setup lang="ts">

import type {CommunityCard} from '~/types/card'



const props = defineProps<{
  card: CommunityCard
}>()
</script>

<style scoped>

</style>