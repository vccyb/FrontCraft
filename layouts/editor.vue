<template>
  <div class="h-[100vh] flex flex-col bg-gray-900">
    <!-- 顶部导航栏 -->

    <header class="h-14 flex items-center px-4 border-b border-gray-700">
      <nav class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-white hover:text-gray-300"
          >
            FrontCraft
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-3">
          <button
            class="text-black bg-slate-200 hover:bg-slate-400 hover:text-white px-2 py-1 rounded-md transition-colors duration-300"
          >
            保存
          </button>
          <button
            class="text-black bg-slate-200 hover:bg-slate-400 hover:text-white px-2 py-1 rounded-md transition-colors duration-300"
          >
            设置
          </button>
        </div>
      </nav>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>

<style scoped>
:deep(.p-button.p-button-secondary) {
  background: #374151;

  border: none;
}

:deep(.p-button.p-button-secondary:hover) {
  background: #4b5563;
}
</style>
