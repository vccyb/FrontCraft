<template>
  <div>
    <main class="flex-1 p-6 bg-gray-900">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-1/4">
          <div
            class="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-lg p-6 shadow-lg"
          >
            <div class="flex flex-col items-center mb-6">
              <img
                src="https://picsum.photos/100/100"
                alt="User Avatar"
                class="w-24 h-24 rounded-full border-4 border-white mb-4"
              />
              <h2 class="text-2xl font-bold text-white">John Doe</h2>
              <p class="text-indigo-200">@johndoe</p>
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <h3 class="text-sm font-medium text-indigo-100">挑战</h3>
                <p class="text-2xl font-bold text-white">42</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <h3 class="text-sm font-medium text-indigo-100">自定义</h3>
                <p class="text-2xl font-bold text-white">7</p>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3">
                <h3 class="text-sm font-medium text-indigo-100">点赞</h3>
                <p class="text-2xl font-bold text-white">1337</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/4">
          <div class="flex flex-col justify-center items-start gap-4">
            <div
              class="w-full flex flex-row flex-wrap justify-between items-center gap-4"
            >
              <div class="flex flex-wrap items-center gap-4">
                <Select
                  v-model="selectedStatus"
                  :options="status"
                  optionLabel="name"
                  placeholder="挑战状态"
                  class="custom-dropdown"
                />
                <Select
                  v-model="selectedDifficulty"
                  :options="difficultys"
                  optionLabel="name"
                  placeholder="挑战难度"
                  class="custom-dropdown"
                />
                <Select
                  v-model="selectedType"
                  :options="types"
                  optionLabel="name"
                  placeholder="挑战类型"
                  class="custom-dropdown"
                />
              </div>
              <div>
                <IconField>
                  <InputIcon class="pi pi-search" />
                  <InputText v-model="value1" placeholder="Search" />
                </IconField>
              </div>
            </div>

            <!-- card -->
            <div class="grid grid-cols-3 gap-6 w-full">
              <card-challenge
                v-for="challenge of challenges"
                :card="challenge"
              ></card-challenge>
            </div>

            <div class="flex w-full justify-end">
              <Paginator
                :rows="10"
                :totalRecords="120"
                :rowsPerPageOptions="[10, 20, 30]"
                class="custom-paginator"
              ></Paginator>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import type { ChallengeCard } from "~/types/card";

const selectedStatus = ref();
const status = ref([
  { name: "全部", code: "All" },
  { name: "完成", code: "Completed" },
  { name: "进行中", code: "InProgress" },
]);

const selectedDifficulty = ref();
const difficultys = ref([
  { name: "全部", code: "All2" },
  { name: "简单", code: "Easy" },
  { name: "中等", code: "Medium" },
  { name: "困难", code: "Hard" },
]);

const selectedType = ref();

const types = ref([
  { name: "挑战", code: "Challenge" },
  { name: "自定义", code: "Custom" },
]);

const challenges = ref<ChallengeCard[]>([
  {
    id: 1,
    name: "挑战1",
    description: "这是挑战1的描述",
    difficulty: "简单",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "挑战2",
    description: "这是挑战2的描述",
    difficulty: "中等",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "挑战3",
    description: "这是挑战3的描述",
    difficulty: "困难",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "挑战4",
    description: "这是挑战4的描述",
    difficulty: "简单",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "挑战5",
    description: "这是挑战5的描述",
    difficulty: "中等",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "挑战6",
    description: "这是挑战6的描述",
    difficulty: "困难",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "挑战7",
    description: "这是挑战7的描述",
    difficulty: "困难",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "挑战8",
    description: "这是挑战8的描述",
    difficulty: "困难",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "挑战9",
    description: "这是挑战9的描述",
    difficulty: "困难",
    img: "https://picsum.photos/200/300",
  },
]);
</script>

<style scoped>
:deep(.p-paginator) {
  background-color: #1f2937 !important; /* gray-800 */
  border-radius: 6px;
  padding: 0.5rem;
}

:deep(.p-paginator .p-paginator-element) {
  background-color: #374151 !important; /* gray-700 */
  color: #e5e7eb !important;
  border: none !important;
}

:deep(.p-paginator .p-paginator-element.p-highlight) {
  background-color: #4b5563 !important; /* gray-600 */
  color: white !important;
}

/* 每页显示条数选择器 */
:deep(.p-paginator-rpp-select) {
  background-color: #374151 !important; /* gray-700 */
  border: none !important;
  color: #e5e7eb !important;
}

/* 选择器面板和选项 */
:deep(.p-paginator-rpp-select .p-overlay) {
  background-color: #374151 !important;
  color: #e5e7eb !important;
}
</style>
