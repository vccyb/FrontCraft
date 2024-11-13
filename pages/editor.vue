<template>
  <div class="flex flex-col flex-1 h-full w-full bg-gray-900 p-2">
    <Splitter layout="vertical" class="flex-1 flex-col gap-2">
      <!-- 上方编辑区域 -->
      <SplitterPanel :size="60">
        <Splitter class="h-full gap-[1px]">
          <!-- HTML 编辑器 -->
          <SplitterPanel :size="33">
            <div class="h-full flex flex-col">
              <div class="text-white px-2 py-1 bg-gray-800 rounded-t">HTML</div>
              <div
                ref="htmlEditorContainer"
                class="flex-1 w-full bg-gray-800 rounded-b"
              />
            </div>
          </SplitterPanel>

          <!-- CSS 编辑器 -->
          <SplitterPanel :size="33">
            <div class="h-full flex flex-col">
              <div class="text-white px-2 py-1 bg-gray-800 rounded-t">CSS</div>
              <div
                ref="cssEditorContainer"
                class="flex-1 w-full bg-gray-800 rounded-b"
              />
            </div>
          </SplitterPanel>

          <!-- JavaScript 编辑器 -->
          <SplitterPanel :size="34">
            <div class="h-full flex flex-col">
              <div class="text-white px-2 py-1 bg-gray-800 rounded-t">
                JavaScript
              </div>
              <div
                ref="jsEditorContainer"
                class="flex-1 w-full bg-gray-800 rounded-b"
              />
            </div>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>

      <!-- 下方预览区域 -->
      <SplitterPanel :size="40">
        <div class="h-full flex flex-col gap-2">
          <div class="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              ref="previewFrame"
              class="w-full h-full"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Button from "primevue/button";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

import * as monaco from "monaco-editor";

import {
  editorOptions,
  initTheme,
  initWorkers,
  defaultCode,
  type CodeContent,
} from "~/config/editor";

// 编辑器容器引用
const htmlEditorContainer = ref<HTMLElement | null>(null);
const cssEditorContainer = ref<HTMLElement | null>(null);
const jsEditorContainer = ref<HTMLElement | null>(null);

// 编辑器实例
let htmlEditor: monaco.editor.IStandaloneCodeEditor | null = null;
let cssEditor: monaco.editor.IStandaloneCodeEditor | null = null;
let jsEditor: monaco.editor.IStandaloneCodeEditor | null = null;

// 初始化 Monaco Editor
const initMonaco = () => {
  initWorkers();
  initTheme();

  // 创建编辑器实例
  if (htmlEditorContainer.value) {
    htmlEditor = monaco.editor.create(htmlEditorContainer.value, {
      ...editorOptions,
      language: "html",
      value: code.value.html,
    });

    htmlEditor.onDidChangeModelContent(() => {
      code.value.html = htmlEditor?.getValue() || "";
    });
  }

  if (cssEditorContainer.value) {
    cssEditor = monaco.editor.create(cssEditorContainer.value, {
      ...editorOptions,
      language: "css",
      value: code.value.css,
    });

    cssEditor.onDidChangeModelContent(() => {
      code.value.css = cssEditor?.getValue() || "";
    });
  }

  if (jsEditorContainer.value) {
    jsEditor = monaco.editor.create(jsEditorContainer.value, {
      ...editorOptions,
      language: "javascript",
      value: code.value.js,
    });

    jsEditor.onDidChangeModelContent(() => {
      code.value.js = jsEditor?.getValue() || "";
    });
  }
};

// 销毁编辑器
const disposeMonaco = () => {
  htmlEditor?.dispose();
  cssEditor?.dispose();
  jsEditor?.dispose();
};

// 定义代码类型接口
interface CodeContent {
  html: string;
  css: string;
  js: string;
}

// 代码内容
const code = ref<CodeContent>({
  html: '<div class="greeting">Hello World</div>',
  css: ".greeting { color: blue; font-size: 24px; text-align: center; margin-top: 20px; }",
  js: 'console.log("Hello World")',
});

// 预览框架引用
const previewFrame = ref<HTMLIFrameElement | null>(null);

// 更新预览
const updatePreview = () => {
  if (!previewFrame.value) return;

  const previewContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${code.value.css}</style>
      </head>
      <body>
        ${code.value.html}
        <script>${code.value.js}<\/script>
      </body>
    </html>
  `;

  previewFrame.value.srcdoc = previewContent;
};

// 监听代码变化
watch(code, updatePreview, { deep: true });

// 初始化时更新预览
onMounted(() => {
  initMonaco();
  updatePreview();
});

onBeforeUnmount(() => {
  disposeMonaco();
});

// 定义页面布局
definePageMeta({
  layout: "editor",
});
</script>

<style scoped>
:deep(.p-splitter) {
  border: none;
  background-color: transparent;
}

:deep(.p-splitter-gutter) {
  background-color: #374151 !important;
  min-width: 6px;
}

:deep(.p-splitter-gutter-handle) {
  background-color: #4b5563;
}

:deep(.p-splitter-vertical > .p-splitter-gutter) {
  min-height: 6px;
}

textarea {
  outline: none;
  border: 1px solid #374151;
}

textarea:focus {
  border-color: #4b5563;
}

/* 确保 Splitter 在深色背景下的样式正确 */
:deep(.p-splitter-panel) {
  background-color: transparent;
}

/* 移除 textarea 默认的调整大小功能 */
textarea {
  resize: none;
}

/* 优化编辑器圆角 */
.rounded-t {
  border-radius: 0.375rem 0.375rem 0 0;
}

.rounded-b {
  border-radius: 0 0 0.375rem 0.375rem;
}
</style>
