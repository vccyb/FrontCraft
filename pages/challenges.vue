<template>
  <main class="container mx-auto px-4 py-8 flex flex-col bg-gray-900">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold text-white">挑战中心</h2>
      <NuxtLink
        to="/person-center"
        class="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-200"
        >查看我的挑战进度
        <Icon name="mdi:arrow-right" size="20" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-6 gap-6">
      <div class="p-4 rounded-md col-span-4">
        <div>
          <SelectButton
            v-model="selectedTab"
            :options="tabOptions"
            optionLabel="label"
            option-value="value"
            :allow-empty="false"
            class="text-white bg-gray-700 border-gray-600 md:text-lg"
          />

          <Tabs :value="selectedTab" class="mt-4">
            <TabList class="display-none" style="display: none">
              <Tab value="current">Header I</Tab>
              <Tab value="upcoming">Header II</Tab>
              <Tab value="past">Header III</Tab>
            </TabList>
            <TabPanels
              class="rounded-md text-white"
              style="background-color: rgb(31, 41, 55); padding: 0"
            >
              <TabPanel value="current" class="text-white rounded-md">
                <!-- detail 挑战卡片 -->
                <div class="bg-gray-800 rounded flex flex-col px-6 py-6 gap-4">
                  <div class="flex justify-between items-center">
                    <h2 class="text-3xl font-bold">Challenge Details</h2>
                    <div class="flex gap-2 items-center">
                      <Icon name="mdi:clock"></Icon>
                      <span
                        class="text-xl bg-gradient-to-r from-teal-400 bg-clip-text text-transparent to-blue-500 flex gap-2 items-center"
                      >
                        23:45:02</span
                      >
                    </div>
                  </div>
                  <img
                    src="https://picsum.photos/600/300"
                    class="object-cover w-full h-[300px] rounded-md"
                    alt=""
                  />
                  <span
                    >Create a responsive message interface with a purple theme.
                    The interface should include a list of messages on the left
                    and a detailed view of the selected message on the right.
                    Implement hover effects and ensure the design is
                    accessible.</span
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
                        <span class="text-sm text-gray-400"
                          >Challenge Creator</span
                        >
                      </div>
                      <div class="flex flex-col ml-2">
                        <span
                          class="text-sm text-gray-400 flex items-center gap-1"
                        >
                          <Icon name="lucide:users" />
                          <span> 1,234 参与者 </span>
                        </span>
                        <span
                          class="text-sm text-gray-400 flex items-center gap-1"
                        >
                          <Icon name="lucide:trophy"></Icon>
                          <span>85% 完成率</span>
                        </span>
                      </div>
                    </div>
                    <Button label="登录" severity="help"
                      >Start Challenge</Button
                    >
                  </div>
                </div>

                <div class="w-full h-8 bg-gray-900"></div>

                <div
                  class="bg-gray-800 rounded-md mt-2 flex flex-col px-4 py-4 gap-4"
                >
                  <h2 class="text-xl font-bold text-white">每日代码技巧</h2>
                  <div class="space-y-4">
                    <div class="bg-[#1a1625] rounded-lg p-4">
                      <h3 class="text-sm font-medium text-purple-300 mb-2">
                        CSS 网格布局快速技巧
                      </h3>
                      <div class="relative">
                        <pre
                          class="text-xs text-gray-300 overflow-x-auto p-2 bg-black/20 rounded"
                        > <code>.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}</code>  </pre>
                        <p class="text-xs text-gray-400 mt-2">
                          使用 auto-fit 和 minmax()
                          创建响应式网格布局，无需媒体查询！
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-400"
                      >今日提示由 @CSSWizard 提供</span
                    >
                    <span
                      class="flex items-center text-purple-400 cursor-pointer hover:text-purple-300"
                    >
                      分享技巧
                      <Icon
                        name="mdi:share-variant"
                        class="w-4 h-4 ml-1"
                      ></Icon>
                    </span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                value="upcoming"
                class="rounded-md text-white"
                style="background-color: rgb(17, 24, 39); padding: 0"
              >
                <div class="grid grid-cols-2 gap-4 rounded-md text-white">
                  <!-- 即将开始卡片 -->
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md px-2 py-1"
                        >即将开始</span
                      >
                      <span>2天后</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center">
                      <span>预计难度：中等</span>
                      <Button size="small">提醒我</Button>
                    </div>
                  </div>
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md px-2 py-1"
                        >即将开始</span
                      >
                      <span>2天后</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center">
                      <span>预计难度：中等</span>
                      <Button size="small">提醒我</Button>
                    </div>
                  </div>
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md px-2 py-1"
                        >即将开始</span
                      >
                      <span>2天后</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center">
                      <span>预计难度：中等</span>
                      <Button size="small">提醒我</Button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                value="past"
                style="background-color: rgb(17, 24, 39); padding: 0"
                class="rounded-md text-white"
              >
                <div class="grid grid-cols-2 gap-4 rounded-md text-white">
                  <!-- 即将开始卡片 -->
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md px-2 py-1"
                        >已结束</span
                      >
                      <span>2024/11/23</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <div class="flex flex-col items-start gap-2">
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:users" />
                          <span> 1,234 参与者 </span>
                        </div>
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:trophy"></Icon>
                          <span>85% 完成率</span>
                        </div>
                      </div>

                      <Button size="small"
                        >查看详情<Icon name="lucide:arrow-right"></Icon
                      ></Button>
                    </div>
                  </div>
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md px-2 py-1"
                        >已结束</span
                      >
                      <span>2024/11/23</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <div class="flex flex-col items-start gap-2">
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:users" />
                          <span> 1,234 参与者 </span>
                        </div>
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:trophy"></Icon>
                          <span>85% 完成率</span>
                        </div>
                      </div>

                      <Button size="small"
                        >查看详情<Icon name="lucide:arrow-right"></Icon
                      ></Button>
                    </div>
                  </div>
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md px-2 py-1"
                        >已结束</span
                      >
                      <span>2024/11/23</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <div class="flex flex-col items-start gap-2">
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:users" />
                          <span> 1,234 参与者 </span>
                        </div>
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:trophy"></Icon>
                          <span>85% 完成率</span>
                        </div>
                      </div>

                      <Button size="small"
                        >查看详情<Icon name="lucide:arrow-right"></Icon
                      ></Button>
                    </div>
                  </div>
                  <div
                    class="rounded-lg text-card-foreground shadow-sm bg-[#2d2b3d] border-0 p-4 flex flex-col gap-4 min-w-[300px]"
                  >
                    <div class="flex justify-between items-center text-sm">
                      <span
                        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md px-2 py-1"
                        >已结束</span
                      >
                      <span>2024/11/23</span>
                    </div>
                    <h2 class="text-2xl font-bold">动态数据可视化</h2>
                    <div class="text-sm text-gray-400">
                      使用D3.js或其他可视化库创建交互式数据图表，展示实时数据更新。
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <div class="flex flex-col items-start gap-2">
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:users" />
                          <span> 1,234 参与者 </span>
                        </div>
                        <div class="flex items-center gap-1">
                          <Icon name="lucide:trophy"></Icon>
                          <span>85% 完成率</span>
                        </div>
                      </div>

                      <Button size="small"
                        >查看详情<Icon name="lucide:arrow-right"></Icon
                      ></Button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <div class="rounded-md col-span-2 mt-20 flex flex-col gap-10">
        <!-- 进度卡片 -->
        <div class="flex flex-col gap-4 bg-gray-800 px-6 py-4 rounded-md">
          <h2 class="text-xl font-semibold text-white">你的挑战进度</h2>
          <div class="flex justify-between items-center">
            <h3 class="text-3xl font-semibold text-white">6 / 7</h3>
            <span class="text-md text-white font-bold">本周已完成</span>
          </div>
          <!-- 进度段 -->
          <div class="grid grid-cols-7 gap-2">
            <div
              v-for="day in 6"
              :key="day"
              class="w-full h-4 rounded-md bg-gray-700"
            >
              <div
                class="h-full rounded-md bg-green-500"
                :style="{ width: '100%' }"
              ></div>
            </div>
            <div class="w-full h-4 rounded-md bg-gray-700"></div>
          </div>
          <div class="text-sm text-gray-400">继续加油！享受挑战的乐趣！</div>
        </div>
        <!-- 公告卡片 -->
        <div class="flex flex-col gap-4 bg-gray-800 px-6 py-4 rounded-md">
          <h2 class="text-xl font-semibold text-white">网站公告</h2>
          <div class="italic text-md text-white rounded-md">
            "每日一练，进步不止。让我们一起在前端的世界里探索无限可能！"
          </div>
          <div class="text-sm text-gray-400">
            <div class="flex items-center gap-1 text-sm text-gray-400">
              <Icon name="lucide:info" class="text-gray-100 text-md"></Icon>
              <span> 有任何问题或建议？随时联系我们! </span>
            </div>

            <div class="flex items-center gap-1 text-sm text-gray-400">
              <Icon
                name="ic:baseline-email"
                class="text-gray-100 text-md"
              ></Icon>
              <span class="cursor-pointer hover:underline">
                support@frontendchallenges.com</span
              >
            </div>
          </div>
        </div>

        <!--  排行榜卡片 -->
        <div class="flex flex-col gap-2 bg-gray-800 px-6 py-4 rounded-md">
          <h2 class="text-xl font-semibold text-white">本周排行榜</h2>
          <div v-for="i in 5" :key="i" class="flex items-center gap-2">
            <div class="flex items-center gap-4">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-white"
                :class="dynamicColor(i)"
              >
                <span>
                  {{ i }}
                </span>
              </div>
              <img
                src="https://picsum.photos/40"
                alt="User Avatar"
                class="w-8 h-8 rounded-full"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-white">陈宇博</span
              ><span class="text-xs text-gray-300">完成12个挑战</span>
            </div>
            <!-- 点赞和评论的icon -->
            <div class="flex items-center gap-2 ml-auto">
              <span class="flex items-center gap-1 text-gray-300">
                <Icon name="mdi:thumb-up-outline" class="text-gray-300"></Icon>
                <span>120</span>
              </span>
              <span class="flex items-center gap-1 text-gray-300">
                <Icon name="mdi:comment-outline" class="text-gray-300"></Icon>
                <span>80</span>
              </span>
            </div>
          </div>
          <div
            class="flex justify-center mt-2 items-center text-white font-bold text-center cursor-pointer hover:underline-offset-2 hover:underline"
          >
            查看完整排行榜
          </div>
        </div>

        <!-- 社区活跃度卡片 -->
        <div class="flex flex-col gap-4 bg-gray-800 rounded-lg p-4">
          <h2 class="text-xl font-bold text-white">社区活跃度</h2>
          <div class="grid grid-cols-3 gap-4 text-white">
            <div class="flex flex-col items-center gap-2">
              <Icon
                name="mdi:comment-outline"
                class="text-4xl text-white"
              ></Icon>
              <span class="text-2xl">282</span>
              <span>今日提交</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Icon
                name="mdi:thumb-up-outline"
                class="text-4xl text-white"
              ></Icon>
              <span class="text-2xl">282</span>
              <span>今日点赞</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Icon name="lucide:users" class="text-4xl text-white"></Icon>
              <span class="text-2xl">282</span>
              <span>今日活跃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const selectedTab = ref("current");
const tabOptions = [
  { label: "当前挑战", value: "current" },
  { label: "即将开始", value: "upcoming" },
  { label: "往期挑战", value: "past" },
];

// 1,2,3 和其他返回颜色
// 金银铜三色

const dynamicColor = (index: number) => {
  if (index === 1) {
    return "bg-gradient-to-r from-yellow-300 to-yellow-600";
  }
  if (index === 2) {
    // 银色

    return "bg-gradient-to-r from-gray-200 to-gray-400";
  }
  if (index === 3) {
    return "bg-gradient-to-r from-orange-500 to-orange-700";
  }
};
</script>

<style scoped>
.icon-gradient {
  /* 确保图标继承父元素的颜色 */
  color: inherit;
}
</style>
