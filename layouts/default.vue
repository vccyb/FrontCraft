<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-900">
    <!-- 顶部导航栏 -->

    <header class="h-14 flex items-center px-4 border-b border-gray-700">
      <nav class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-3">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-white hover:text-gray-300"
          >
            FrontCrafter
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <nav>
            <NuxtLink to="/challenges" class="text-white nav-link"
              >挑战</NuxtLink
            >
            <NuxtLink to="/courses" class="text-white nav-link">课程</NuxtLink>
            <NuxtLink to="/community" class="text-white nav-link"
              >社区</NuxtLink
            >
            <NuxtLink to="/leaderboard" class="text-white nav-link"
              >排行榜</NuxtLink
            >
            <NuxtLink to="/map" class="text-white nav-link">地图</NuxtLink>
          </nav>

          <Button
            label="登录"
            severity="help"
            size="small"
            @click="navigateTo('/login')"
          />
          <Avatar
            label="v"
            size="large"
            shape="circle"
            style="transform: scale(0.8)"
            class="person-avatar"
            @click="navigateTo('/person-center')"
          />
        </div>
      </nav>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex flex-1 flex-col min-h-0 w-full bg-gray-900">
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

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.nav-link:hover {
  color: #cfb5e7;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.person-avatar {
  transition: all 0.3s ease-in-out;
}
.person-avatar:hover {
  cursor: pointer;
  box-shadow: 0 0 0 4px rgba(207, 181, 231, 0.8);
}
</style>
