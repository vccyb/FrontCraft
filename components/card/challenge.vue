<template>
  <div
    class="bg-[#2d2b3d] cursor-pointer rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow duration-300"
  >
    <img :src="card.img" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-white mb-2">{{ card.title }}</h3>
      <p class="text-gray-400 text-sm mb-4">
        {{ card.description }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-sm font-medium text-purple-400">{{
          card.difficulty
        }}</span>
        <Button size="sm" class="bg-[#7e3af2] hover:bg-[#6929df] text-white">
          开始
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ChallengeCard } from "~/types/card";

const props = defineProps<{
  card: ChallengeCard;
}>();
</script>

<style></style>
