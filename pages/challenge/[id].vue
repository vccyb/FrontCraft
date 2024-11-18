<template>
  <main class="w-full container mx-auto px-4 py-8 flex flex-col bg-gray-900">
    <!-- title -->
    <div class="flex justify-between items-center text-white">
      <h1 class="text-3xl font-bold">Purple Messages</h1>
      <div class="flex gap-2 items-center text-xl">
        <icon name="fluent-emoji-flat:star"></icon>
        <span> Medium </span>
      </div>
    </div>
    <!-- main content -->
    <div class="w-full mt-8 flex flex-row gap-8 text-white">
      <div class="flex-1 rounded">
        <div class="bg-gray-800 rounded flex flex-col px-6 py-6 gap-4">
          <h2 class="text-xl font-semibold">Challenge Details</h2>
          <img
            src="https://picsum.photos/600/300"
            class="object-cover w-full h-[300px] rounded-md"
            alt=""
          />
          <span
            >Create a responsive message interface with a purple theme. The
            interface should include a list of messages on the left and a
            detailed view of the selected message on the right. Implement hover
            effects and ensure the design is accessible.</span
          >
          <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row gap-2 items-center">
              <Avatar
                label="v"
                size="large"
                shape="circle"
                style="transform: scale(0.8)"
                class="person-avatar"
              />
              <div class="flex flex-col">
                <span class="text-sm font-semibold">John Doe</span>
                <span class="text-sm text-gray-400">Challenge Creator</span>
              </div>
            </div>
            <Button label="登录" severity="help">Start Challenge</Button>
          </div>
        </div>
        <div class="bg-gray-800 rounded flex flex-col px-6 py-6 gap-4 mt-4">
          <h2 class="text-xl font-semibold">Challenge Details</h2>
          <div class="flex flex-row gap-4">
            <span class="flex flex-row gap-2 items-center"
              ><Icon name="lucide:users" class="text-xl text-purple-600" /> 1234
              participants</span
            >
            <span class="flex flex-row gap-2 items-center"
              ><Icon name="lucide:trophy" class="text-xl text-green-600" />85%
              completion rate</span
            >
            <span class="flex flex-row gap-2 items-center"
              ><Icon name="lucide:thumbs-up" class="text-xl text-blue-600" />956
              likes</span
            >
          </div>
        </div>
        <div class="bg-gray-800 rounded flex flex-col px-6 py-6 gap-4 mt-4">
          <h2 class="text-xl font-semibold">Community Solutions</h2>
          <div class="grid grid-cols-2 gap-6">
            <card-challenge :card="card" />
            <card-challenge :card="card" />
            <card-challenge :card="card" />
            <card-challenge :card="card" />
            <card-challenge :card="card" />
            <card-challenge :card="card" />
          </div>
          <Paginator
            :rows="10"
            :totalRecords="120"
            :rowsPerPageOptions="[10, 20, 30]"
            class="custom-paginator mt-8"
          ></Paginator>
        </div>
      </div>
      <div
        class="sidebar shrink-0 sticky top-[20px] bg-gray-800 rounded p-4 flex flex-col gap-4"
      >
        <card-challenge :card="card" />
        <card-challenge :card="card" />
        <card-challenge :card="card" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const card = ref({
  id: 1,
  name: "挑战1",
  description: "这是挑战1的描述",
  difficulty: "简单",
  img: "https://picsum.photos/200/300",
});
</script>

<style scoped>
.person-avatar {
  transition: all 0.3s ease-in-out;
}
.person-avatar:hover {
  cursor: pointer;
  box-shadow: 0 0 0 4px rgba(207, 181, 231, 0.8);
}

.sidebar {
  width: 320px;
  height: fit-content;
}

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
