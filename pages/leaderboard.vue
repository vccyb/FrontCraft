<template>
  <main class="container mx-auto px-4 py-8 flex flex-col bg-gray-900">
    <!-- search and select -->
    <div class="mb-8 flex flex-wrap justify-between items-center gap-4">
      <Select v-model="selectedStatus" :options="status" optionLabel="name" placeholder="挑战状态"
        class="custom-dropdown" />
      <div>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="value1" placeholder="Search" />
        </IconField>
      </div>
    </div>

    <!-- card -->
    <div class="bg-[#1e1b2e] rounded-lg shadow-xl overflow-hidden mb-8 flex justify-center flex-row gap-4 py-12">
      <div
        class="w-1/4 rounded bg-gradient-to-br from-gray-300 to-gray-500 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-4 py-8 gap-2">
        <!-- img -->
        <div class="relative">
          <img src="https://picsum.photos/200/200"
            class=" rounded-full object-fit border-4 border-white w-24 h-24" /></img>
          <icon name="fluent-emoji-flat:2nd-place-medal" class="w-14 h-14 absolute top-[-14px] right-[-20px]"></icon>
        </div>
        <!--  -->
        <h2 class="text-xl font-bold text-white">Cosmo Coder</h2>
        <p class="text-xl text-white">Rank: No. 2</p>
        <p class="text-xl text-white">Score: 3000</p>
        <div class="flex items-center space-x-2 mt-1 text-white">
          <div class="flex items-center">
            👍 123
          </div>
          <div class="flex items-center">
            🔥 456
          </div>
        </div>
      </div>
      <div
        class="w-1/4 rounded bg-gradient-to-br from-yellow-400 to-yellow-600  transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-4  py-8 gap-2 scale-125 hover:scale-[1.3] z-10">
        <!-- img -->
        <div class="relative">
          <img src="https://picsum.photos/200/200"
            class=" rounded-full object-fit border-4 border-white w-24 h-24" /></img>
          <icon name="fluent-emoji-flat:1st-place-medal" class="w-14 h-14 absolute top-[-14px] right-[-20px]"></icon>
        </div>
        <!--  -->
        <h2 class="text-xl font-bold text-white">Cosmo Coder</h2>
        <p class="text-xl text-white">Rank: No. 1</p>
        <p class="text-xl text-white">Score: 3000</p>
        <div class="flex items-center space-x-2 mt-1 text-white">
          <div class="flex items-center">
            👍 123
          </div>
          <div class="flex items-center">
            🔥 456
          </div>
        </div>
      </div>
      <div
        class="w-1/4 rounded bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-4 py-8 gap-2">
        <!-- img -->
        <div class="relative">
          <img src="https://picsum.photos/200/200"
            class=" rounded-full object-fit border-4 border-white w-24 h-24" /></img>
          <icon name="fluent-emoji-flat:3rd-place-medal" class="w-14 h-14 absolute top-[-14px] right-[-20px]"></icon>
        </div>
        <!--  -->
        <h2 class="text-xl font-bold text-white">Cosmo Coder</h2>
        <p class="text-xl text-white">Rank: No. 3</p>
        <p class="text-xl text-white">Score: 1000</p>
        <div class="flex items-center space-x-2 mt-1 text-white">
          <div class="flex items-center">
            👍 123
          </div>
          <div class="flex items-center">
            🔥 456
          </div>
        </div>
      </div>
    </div>


    <!-- table -->
    <table class="w-full  text-white">
      <thead class="bg-purple-900 ">
        <tr>
          <th class="px-6 py-3 text-left">Rank</th>
          <th class="px-6 py-3 text-left">Developer</th>
          <th class="px-6 py-3 text-left">Score</th>
          <th class="px-6 py-3 text-left">Projects</th>
          <th class="px-6 py-3 text-left">Likes</th>
          <th class="px-6 py-3 text-left">Views</th>
          <th class="px-6 py-3 text-left">Streak</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
        <tr class="border-b border-gray-700 hover:bg-purple-900/50 transition-colors">
          <td class="px-6 py-4">Vccyb</td>
          <td class="px-6 py-4 flex items-center">
            <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full mr-4" />
            vccyb
          </td>
          <td class="px-6 py-4">2000</td>
          <td class="px-6 py-4">15</td>
          <td class="px-6 py-4">500</td>
          <td class="px-6 py-4">270,000</td>
          <td class="px-6 py-4 ">
            🔥 10
          </td>
        </tr>
      </tbody>
    </table>

    <!--  your -->
    <div class="mt-8 text-center text-white">
      <h2 class="text-2xl font-bold mb-4">Your Coding Journey</h2>
      <div class="flex justify-center items-center space-x-8">
        <div
          class="flex flex-col items-center bg-purple-900/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
          <icon name="lucide:trophy" class="w-12 h-12 text-yellow-500 mb-2" />
          <p class="text-lg font-semibold">Rank 42</p>
        </div>
        <div
          class="flex flex-col items-center bg-purple-900/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
          <icon name="lucide:zap" class="w-12 h-12 text-blue-500 mb-2" />
          <p class="text-lg font-semibold">8765 Points</p>
        </div>
        <div
          class="flex flex-col items-center bg-purple-900/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
          <icon name="lucide:code" class="w-12 h-12 text-green-500 mb-2" />
          <p class="text-lg font-semibold">95 Projects</p>
        </div>
        <div
          class="flex flex-col items-center bg-purple-900/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
          <icon name="lucide:flame" class="w-12 h-12 text-red-500 mb-2" />
          <p class="text-lg font-semibold">15 Day Streak</p>
        </div>
      </div>
    </div>

  </main>
</template>

<script lang="ts" setup>
const selectedStatus = ref();
const status = ref([
  { name: "全部", code: "All" },
  { name: "完成", code: "Completed" },
  { name: "进行中", code: "InProgress" },
]);
</script>

<style></style>
