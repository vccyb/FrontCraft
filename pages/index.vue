<template>
  <header
      class="px-4 lg:px-6 h-14 flex items-center backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-700">
    <a class="flex items-center justify-center" href="#">
      <Icon name="lucide:layout" class="h-6 w-6 text-purple-600 dark:text-indigo-400"/>
      <span class="ml-2 text-xl font-bold text-gray-800 dark:text-white">FrontEndCrafter</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a class="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400" href="#challenges">
        挑战
      </a>
      <a class="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400" href="#features">
        特性
      </a>
      <a class="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400" href="#pricing">
        会员
      </a>
      <a class="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400" href="#community">
        社区
      </a>
    </nav>
  </header>
  <main class="flex-1 flex flex-col items-center ">
    <!--    section 1 主内容-->
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center bg-gray-50">
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold mb-6 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
              每日前端挑战，提升编码技能
            </h1>
            <p class="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
              FrontEndCrafter：通过实战项目和日常挑战，磨练您的HTML、CSS和JavaScript技能。
            </p>
          </div>
          <div class="space-x-4">
            <Button class="bg-indigo-600 hover:bg-indigo-700 text-white" severity="help" raised>
              开始免费挑战
            </Button>
            <Button severity="help" variant="outlined" raised
                    class=" text-indigo-600  hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900">
              查看挑战示例
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section id="challenges"
             class="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800 flex items-center justify-center  bg-gray-100">
      <div class="w-[100%]">
        <h2 class="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
          今日挑战预览
        </h2>
        <div class="flex flex-row gap-4 px-6 mt-8 w-[100%]">
          <Card class="w-[50%] ">
            <template #title class="text-2xl">😜简单: 响应式导航栏</template>
            <template #subtitle>
              创建一个在移动端可折叠的响应式导航栏
            </template>
            <template #content>
              <div class="w-full h-[400px]">
                <img src="https://picsum.photos/600/400" class="w-full h-full object-cover" alt="">
              </div>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="开始挑战" severity="help" raised class="w-full"/>
              </div>
            </template>
          </Card>
          <Card class="w-[50%]">
            <template #title class="text-2xl">😈复杂: 交互式定价表</template>
            <template #subtitle>
              实现一个带有切换按钮的动态定价表
            </template>
            <template #content>
              <div class="w-full h-[400px] ">
                <img src="https://picsum.photos/600/400" class="w-full h-full object-cover" alt="">
              </div>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="开始挑战" severity="help" raised class="w-full"/>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
    <section id="features" class="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="w-full flex justify-center items-center">
        <h2 class="text-3xl   font-bold tracking-tighter sm:text-5xl text-center mb-10 text-gray-800 dark:text-white">
          为什么选择 FrontEndCrafter
        </h2>
      </div>
      <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-6">
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
        <div
            class="flex flex-col justify-center border-1 rounded-lg shadow-md items-center p-6 space-y-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <Icon name="lucide:layout" class="h-10 w-10 text-purple-600 dark:text-indigo-400"/>
          <div class="text-xl font-bold text-gray-800 dark:text-white">每日编码挑战</div>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            每天新的前端项目，从简单到复杂，满足不同水平的学习需求。</p>
        </div>
      </div>
    </section>
    <section id="pricing"
             class="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div class="container px-4 md:px-6">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">
          选择适合您的计划
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <div class="flex flex-col justify-between space-y-8 p-6 border-2 rounded-lg">
            <div>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">免费版</div>
              <div class="mt-2">适合初学者入门</div>
              <div class="mt-4 text-4xl font-bold text-gray-800 dark:text-white">¥0/月</div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
              </ul>
            </div>
            <button raised class="w-full h-full bg-purple-600 hover:bgpurple-700 text-white font-bold py-2 px-4 rounded">
              开始免费体验
            </button>
          </div>
          <div class="flex flex-col justify-between space-y-8 p-6 border-2 border-indigo-500 rounded-lg">
            <div>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">免费版</div>
              <div class="mt-2">适合初学者入门</div>
              <div class="mt-4 text-4xl font-bold text-gray-800 dark:text-white">¥0/月</div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
              </ul>
            </div>
            <button raised class="w-full h-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              开始免费体验
            </button>
          </div>

          <div class="flex flex-col justify-between space-y-8 p-6 border-2 rounded-lg">
            <div>
              <div class="text-2xl font-bold text-gray-800 dark:text-white">免费版</div>
              <div class="mt-2">适合初学者入门</div>
              <div class="mt-4 text-4xl font-bold text-gray-800 dark:text-white">¥0/月</div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
                <li class="flex items-center  space-x-1">
                  <Icon name="lucide:check-circle" class="h-5 w-5 text-green-500 dark:text-green-400"/>
                  <p>
                    每周3个免费挑战
                  </p>
                </li>
              </ul>
            </div>
            <button raised class="w-full h-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              开始免费体验
            </button>
          </div>

          <div>

          </div>
        </div>
      </div>
    </section>
    <section id="community" class="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div class="container px-4 md:px-6">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">
          开发者社区
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <div class="flex border-[1px] rounded-lg flex-col justify-between p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div class="pt-4">
              <p class="text-gray-600 dark:text-gray-300 italic">"FrontEndCrafter的每日挑战极大地提升了我的CSS技能，尤其是在响应式设计方面。"</p>
            </div>
            <div class="text-right text-sm font-medium text-gray-700 dark:text-gray-300">
              - 李明，前端开发者
            </div>
          </div>
          <div class="flex flex-col  border-[1px] rounded-lg justify-between p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div class="pt-4">
              <p class="text-gray-600 dark:text-gray-300 italic">"FrontEndCrafter的每日挑战极大地提升了我的CSS技能，尤其是在响应式设计方面。"</p>
            </div>
            <div class="text-right text-sm font-medium text-gray-700 dark:text-gray-300">
              - 李明，前端开发者
            </div>
          </div>
          <div class="flex flex-col  border-[1px] rounded-lg justify-between p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div class="pt-4">
              <p class="text-gray-600 dark:text-gray-300 italic">"FrontEndCrafter的每日挑战极大地提升了我的CSS技能，尤其是在响应式设计方面。"</p>
            </div>
            <div class="text-right text-sm font-medium text-gray-700 dark:text-gray-300">
              - 李明，前端开发者
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer
      class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
    <p class="text-xs text-gray-700 dark:text-gray-400">© 2024 FrontEndCrafter. 保留所有权利.</p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <a class="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400" href="#">
        使用条款
      </a>
      <a class="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-400" href="#">
        隐私政策
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>